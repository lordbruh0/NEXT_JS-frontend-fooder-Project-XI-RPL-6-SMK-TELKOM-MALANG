import TeamList from "@/components/data team";
import { IMenu } from "@/app/types";
import { getCookies } from "@/lib/server-cookies";
import { BASE_API_URL, BASE_IMAGE_MENU } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "../../../../../NEXT_JS-button--Project-XI-RPL-6-SMK-TELKOM-MALANG/my-app/components/alert";
import Image from "next/image";
import Search from "./search";
import React from "react";

const getMenu = async (search: string): Promise<IMenu[]> => {
  try {
    const TOKEN = await getCookies("token");
    const url = `${BASE_API_URL}/menu?search=${search}`;
    const { data } = await get(url, TOKEN);
    let result: IMenu[] = [];
    if (data?.status) result = [...data.data];
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const MenuPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search = searchParams.search ? searchParams.search.toString() : ``;
  const menu: IMenu[] = await getMenu(search);
  const category = (cat: string): React.ReactNode => {
    if (cat === "FOOD") {
      return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
          Snack
        </span>
      );
    }
    return;
    <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
      Drink
    </span>;
  };
  return (
    <div className="m-2 bg-white rounded-lg p-3 border-t-4 border-t-primary shadow-md">
      <h1 className="text-2xl text-[#F45846] font-semibold p-2">
        Manage team data
      </h1>
      <p className="text-sm text-secondary mb-4">
        This page displays menu data, allowing menus to view details, search,
        and manage menu items by adding, editing, or deleting them.
      </p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center w-full max-w-md flex-grow">
          <Search url={`/manager/menu`} search={search} />
        </div>
      </div>
      
    </div>

    //   <div className="justify-center bg-white mx-6">
    //   <div className="px-5 bg-[#F6F6F6] w-auto rounded-xl mb-12">
    //     <h1 className="text-2xl text-[#F45846] font-semibold p-2">Manage team data</h1>
    //     <hr className="border=1 border-[#A8A8A8] w-full" />
    //     <TeamList />
    //   </div>

    // </div>
  );
};

export default MenuPage;
