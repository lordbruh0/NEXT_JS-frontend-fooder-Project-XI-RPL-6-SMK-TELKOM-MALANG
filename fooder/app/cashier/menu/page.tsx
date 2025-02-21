import { IMenu } from "@/app/types";
import { getCookies } from "@/lib/server-cookies";
import { BASE_API_URL, BASE_IMAGE_MENU } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "@/components/alert";
import Image from "next/image";
import Search from "./search";
import React from "react";
import StudentList from "@/components/data student";
import AddMenu from "./addMenu";
import EditMenu from "./editMenu";
import DeleteMenu from "./deleteMenu";

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
    <div className="justify-center bg-white mx-6">
      <div className="px-5  w-auto rounded-xl mb-12">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl text-[#F45846] font-semibold px-2 pb-2">
              Selamat Datang User Cashier
            </h1>
            <p className="text-sm text-secondary px-2 pb-2">
              Di page ini, user dengan role cashier hanya bisa melihat data user dengan role cashier saja.
            </p>
          </div>
        </div>
        <hr className="border=1 border-[#A8A8A8] w-full" />

        <div className="pt-10 ">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            {menu.length == 0 ? (
              <AlertInfo title="informasi">No data Available</AlertInfo>
            ) : (
              <>
                <thead>
                  <tr className="text-left bg-[#F6F6F6]">
                    <th className="p-3">Picture</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Description</th>
                    <th className="p-3">Category</th>
                  </tr>
                </thead>
                <tbody>
                  {menu.map((data, index) => (
                    <tr
                      className="border-b hover:bg-gray-100"
                      key={`keyPresrasi${index}`}
                    >
                      <td className="p-3">
                        <Image
                          width={40}
                          height={40}
                          src={`${BASE_IMAGE_MENU}/${data.picture}`}
                          className="rounded-full overflow-hidden"
                          alt="preview"
                          unoptimized
                        />
                      </td>
                      <td className="p-3 text-left">{data.name}</td>
                      <td className="p-3 text-left">Rp{data.price}</td>
                      <td className="p-3 text-left">{data.description}</td>
                      <td className="p-3 text-left">{data.category}</td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        </div>
        {/* {
          menu.length == 0 ?
            <AlertInfo title="informasi">
              No data Available
            </AlertInfo>
            :
            <>
              <div className="p-6"> */}
        {/* Data Siswa */}
        {/* <div>
                  {menu.map((data, index) => (
                    <div key={`keyPresrasi${index}`} className="h-16 w-full flex items-center justify-between mb-2">
                      
                      <div className="w-2/4 h-full flex flex-col justify-center items-center">
                        <small className="text-sm font-bold text-primary">Picture</small><br />
                        <Image width={40} height={40} src={`${BASE_IMAGE_MENU}/${data.picture}`} className="rounded-sm overflow-hidden" alt="preview" unoptimized />
                      </div>

                      
                      <div className="w-2/4 h-full flex flex-col justify-center items-center">
                        <small className="text-sm font-bold text-primary">Name</small><br />
                        <h1 className="text-center my-auto mx-auto text-sm">{data.name}</h1>
                      </div> */}

        {/* Kelas */}
        {/* <div className="w-2/4 h-full flex flex-col justify-center items-center">
                        <small className="text-sm font-bold text-primary">Price</small><br />
                        <h1 className="text-sm">Rp.{data.price}</h1>
                      </div>
                      <div className="w-full h-full flex flex-col justify-center items-center">
                        <small className="text-sm font-bold text-primary">Description</small><br />
                        <h1 className="text-sm">{data.description}</h1>
                      </div>
                      <div className="w-3/4 h-full flex flex-col justify-center items-center">
                        <small className="text-sm font-bold text-primary">Category</small><br />
                        <h1 className="text-sm">{data.category}</h1>
                      </div>

                      <div className="w-3/4 h-full flex flex-col justify-center items-center">
                        <small className="text-sm font-bold text-primary">Action</small><br />
                        <div className="flex gap-10">
                          <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                            View
                          </button>
                          <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                            Edit
                          </button>
                          <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                            Delete
                          </button>

                        </div>
                      </div> */}
        {/* <div className="w-2/5 h-full flex flex-col justify-center items-center">
                  <h1
                    className={`text-sm ${team.status === "open" ? "text-green-500" : "text-red-500"} text-lg font-semibold`}
                  >
                    {team.status}
                  </h1>
                </div> */}
        {/* <div className="w-full h-full flex justify-end items-center gap-7">
                  <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                    View
                  </button>
                  <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                    Edit
                  </button>
                  <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                    Delete
                  </button>
                </div> */}
        {/* </div>
                  ))}
                </div> */}

        {/* <div className="flex justify-between items-center mt-10">
            <div>
              <p>
                Showing {startEntry} to {endEntry} of {arrayTeam.length} Entries
              </p>
            </div>
            <div className="justify-end items-center space-x-2">
              
              <button
                className={`px-4 py-2 rounded ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Previous
              </button>
    
           
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 rounded ${currentPage === index + 1 ? "bg-[#F45846] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                  onClick={() => goToPage(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
    
            
              <button
                className={`px-4 py-2 rounded ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div> */}
        {/* </div>
            </>
        } */}
      </div>
    </div>
  );
};

export default MenuPage;
