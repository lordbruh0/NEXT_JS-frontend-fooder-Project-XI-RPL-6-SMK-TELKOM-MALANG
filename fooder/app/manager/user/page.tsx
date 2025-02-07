import { IUser } from "@/app/types";
import { getCookies } from "@/lib/server-cookies";
import { BASE_API_URL, BASE_IMAGE_PROFILE } from "@/global";
import { get } from "@/lib/api-bridge";
import { AlertInfo } from "@/components/alert";
import Image from "next/image";
import Search from "./search";
import React from "react";

const getUser = async (search: string): Promise<IUser[]> => {
  try {
    const TOKEN = await getCookies("token");
    const url = ${BASE_API_URL}/user?search=${search};
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
  const search = searchParams.search ? searchParams.search.toString() : "";
  const user: IUser[] = await getUser(search);

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
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center w-full max-w-md flex-grow pt-6 pb-2">
            <Search url={/manager/user} search={search} />
          </div>
        </div>
        {user.length === 0 ? (
          <AlertInfo title="Informasi">No data available</AlertInfo>
        ) : (
          <div className="p-6">
            <div>
              {user.map((data, index) => (
                <div
                  key={keyUser${index}}
                  className="h-16 w-full flex items-center justify-between mb-10">
                  <div className="w-2/4 h-full flex flex-col justify-center items-center">
                    <small className="text-sm font-bold text-primary">
                      Picture
                    </small>
                    <br />
                    <Image
                      width={40}
                      height={40}
                      src={${BASE_IMAGE_PROFILE}/${data.profile_picture}}
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
        )}
      </div>
    </div>
  );
};

export default UserPage;