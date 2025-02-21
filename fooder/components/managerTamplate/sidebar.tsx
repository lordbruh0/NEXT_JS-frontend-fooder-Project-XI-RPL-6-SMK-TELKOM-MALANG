// Suggested code may be subject to a license. Learn more: ~LicenseLog:40546983.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:769441986.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1841958020.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1977839723.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:837800531.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2013104231.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:903752423.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1927805537.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3040110564.
"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import MenuItem from "./manultem";
import LogoPic from "../../public/image/Telkom Society 1.png";
import ProfilePic from "../../public/image/profile.jpg";
import path from "path";
import { removeCookie } from "../../lib/client-cookies";
import { useRouter } from "next/navigation";
import SearchGlobal from "./searchGlobal";
import { ChevronDown, ChevronUp } from "lucide-react";

type MenuType = {
  id: string;
  icon: ReactNode;
  path: string;
  label: string;
};

type ManagerProp = {
  children: ReactNode;
  id: string;
  title: string;
  menuList: MenuType[];
};

const Sidebar = ({ children, id, title, menuList }: ManagerProp) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdonwOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdonwOpen(!isDropdownOpen);
  };

  const router = useRouter(); // Call useRouter inside the component

  const handleLogout = () => {
    removeCookie("token");
    removeCookie("id");
    removeCookie("name");
    removeCookie("role");
    router.replace("/login"); // Use router.replace correctly
  };

  return (
    <div className="w-full min-h-dvh bg-white ">
      {/* header  */}
      <header className="flex justify-between items-center p-4   mb-0 bg-primary">
        <div className="flex gap-2">

          <button onClick={() => setIsShow(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-[#F45846]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
          <h1 className="font-bold text-3xl text-black">{title}</h1>
        </div>

        <div className="relative flex items-center justify-center">
          <div className="relative w-full">
            <SearchGlobal />
          </div>

          <div className="pl-10">
            <div className="flex items-center bg-[#F45846] gap-5 w-56 justify-center px-3 py-2 rounded-md"  onClick={toggleDropdown}>
            <Image
                src= "/image/profile.jpg"
                alt="profile"
                width={30}
                height={5}
                className="rounded-full overflow-hidden object-cover"
              />
              <button className="text-base text-white font-bold">
                Ryo Hariyono
              </button>
              {isDropdownOpen ? <ChevronUp width={16} height={16} className="text-white" /> : <ChevronDown width={16} height={16} className="text-white"/>}
            </div>
          </div>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#F45846] hover:bg-gray-100"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#F45846]  hover:bg-gray-100"
              >
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-[#F45846] hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </header>
      <div className="p-4">{children}</div>
      {/* sidebar section */}
      <div
        className={`flex flex-col w-2/3 md:w-1/2 lg:w-1/4 h-full fixed top-0 right-full transition-transform z-50 bg-white border-r border-primary ${isShow ? `translate-x-full` : ``
          }`}
      >
        <div className="ml-auto p-2">
          <button onClick={() => setIsShow(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 22  22"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-slate-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </button>
        </div>
        {/* end close botton */}

        {/* logo section */}
        <div className="mb-3 w-full flex justify-center">
          <div className="flex items-center space-x-2">
            <Image src={LogoPic} alt="Logo" width={200} height={200} />
            {/* <h1 className="text-2xl font-bold text-[#F45846]">
              Telkom Society
            </h1> */}
          </div>
        </div>
        {/* end menu section */}

        {/* menu section */}

        <div className="w-full p-2 overflow-y-auto">
          <div className="px-5">
            {menuList.map((menu, index) => (
              <MenuItem
                icon={menu.icon}
                label={menu.label}
                path={menu.path}
                active={menu.id === id}
                key={`keyMenu${index}`}
              />
            ))}
          </div>
        </div>
        {/* menu section */}
      </div>
      {/* end sidebar section */}
    </div>
  );
};

export default Sidebar;
