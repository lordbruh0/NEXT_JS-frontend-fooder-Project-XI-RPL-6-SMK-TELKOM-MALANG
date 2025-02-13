import { IUser } from "@/app/types";
import { getCookies } from "@/lib/server-cookies";
import { BASE_API_URL, BASE_IMAGE_PROFILE } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "@/components/alert";
import Image from "next/image";
import Search from "./search";
import React from "react";
import AddUser from "./addUser";
import { Edit } from "lucide-react";
import EditUser from "./editUser";

const getUser = async (search: string): Promise<IUser[]> => {
  try {
    const TOKEN = await getCookies("token");
    const url = `${BASE_API_URL}/user?search=${search}`;
    const { data } = await get(url, TOKEN);
    let result: IUser[] = [];
    if (data?.status) result = [...data.data];
    return result;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const UserPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const search = Array.isArray(searchParams.search)
    ? searchParams.search[0] || ""
    : searchParams.search || "";

  const user: IUser[] = await getUser(search);
  const category = (cat: string): React.ReactNode => {
    if (cat === "FOOD") {
      return (
        <span className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
          Snack
        </span>
      );
    }
    return (
      <span className="bg-purple-100 text-purple-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-purple-900 dark:text-purple-300">
        Drink
      </span>
    );
  };

  return (
    <div className="justify-center bg-white mx-6">
      <div className="px-5 w-auto rounded-xl mb-12">
        <h1 className="text-2xl text-[#F45846] font-semibold px-2 pb-2">
          Manage user data
        </h1>
        <p className="text-sm text-secondary px-2 pb-2">
          This page displays user data, allowing users to view details, search,
          and manage user information by adding, editing, or deleting them.
        </p>

        <hr className="border=1 border-[#A8A8A8] w-full" />
        <div className="flex justify-end items-center mb-4">
          <div className="pt-9">
            <AddUser />
          </div>
          {/* <div className="flex items-center w-full max-w-md flex-grow pt-6 pb-2">
            <Search url={`/manager/user`} search={search} />
          </div> */}
        </div>

        <div className="pt-6">
          <table className="w-full border-collapse rounded-lg overflow-hidden">
            {user.length == 0 ? (
              <AlertInfo title="informasi">No data Available</AlertInfo>
            ) : (
              <>
                <thead>
                  <tr className="text-left bg-[#F6F6F6]">
                    <th className="p-3">Picture</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Role</th>
                    <th className="p-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {user.map((data, index) => (
                    <tr
                      className="border-b hover:bg-gray-100"
                      key={`keyPresrasi${index}`}
                    >
                      <td className="p-3">
                        <Image
                          width={40}
                          height={40}
                          src={`${BASE_IMAGE_PROFILE}/${data.profile_picture}`}
                          className="rounded-full overflow-hidden "
                          alt="preview"
                          unoptimized
                        />
                      </td>
                      <td className="p-3 text-left">{data.name}</td>
                      <td className="p-3 text-left">{data.email}</td>
                      <td className="p-3 text-left">{data.role}</td>
                      <td className="p-3 text-left w-60">
                        <div className="flex gap-5">
                          <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                            View
                          </button>
                          <EditUser selectedUser={data} />
                          <button className="bg-[#F45846] text-white text-base font-semibold py-2 px-6 rounded">
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        </div>
        {/* {user.length === 0 ? (
          <AlertInfo title="Informasi">No data available</AlertInfo>
        ) : (
          <div className="p-6">
            <div>
              {user.map((data, index) => (
                <div
                  key={`keyUser${index}`}
                  className="h-16 w-full flex items-center justify-between mb-10">
                  <div className="w-2/4 h-full flex flex-col justify-center items-center">
                    <small className="text-sm font-bold text-primary">
                      Picture
                    </small>
                    <br />
                    <Image
                      width={40}
                      height={40}
                      src={data.profile_picture ? `${BASE_IMAGE_PROFILE}/${data.profile_picture}` : "/default-profile.png"}
                      className="rounded-full overflow-hidden object-cover"
                      alt="preview"
                      unoptimized
                    />

                  </div>

                  <div className="w-2/4 h-full flex flex-col justify-center items-center">
                    <small className="text-sm font-bold text-primary">
                      Name
                    </small>
                    <br />
                    <h1 className="text-center my-auto mx-auto text-sm">
                      {data.name}
                    </h1>
                  </div>

                  <div className="w-2/4 h-full flex flex-col justify-center items-center">
                    <small className="text-sm font-bold text-primary">
                      Email
                    </small>
                    <br />
                    <h1 className="text-sm">{data.email}</h1>
                  </div>
                  <div className="w-full h-full flex flex-col justify-center items-center">
                    <small className="text-sm font-bold text-primary">
                      Role
                    </small>
                    <br />
                    <h1 className="text-sm">{data.role}</h1>
                  </div>

                  <div className="w-3/4 h-full flex flex-col justify-center items-center">
                    <small className="text-sm font-bold text-primary">
                      Action
                    </small>
                    <br />
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default UserPage;
