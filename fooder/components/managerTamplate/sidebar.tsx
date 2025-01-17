"use client";

import { ReactNode, useState } from "react";
import Image from "next/image";
import MenuItem from "./manultem";
import LogoPic from '../../public/image/logo.png';
import ProfilePic from '../../public/image/profile.jpg';

type MenuType = {
    id: string,
    icon: ReactNode,
    path: string,
    label: string
}

type ManagerProp = {
    children: ReactNode,
    id: string,
    title: string,
    menuList: MenuType[]
}

const Sidebar = ({ children, id, title, menuList }: ManagerProp) => {
    const [isShow, setIsShow] = useState<boolean>(false)
    const [isDropdownOpen, setIsDropdonwOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdonwOpen(!isDropdownOpen);
    };
    return (
        <div className="w-full min-h-dvh bg-slate-50">
            {/* header  */}
            <header className="flex justify-between items-center p-4 mb-0 bg-primary shadow-md">
                <div className="flex gap-2">
                    <button onClick={() => setIsShow(true)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                    <h1 className="font-bold text-xl text-white">
                        {title}
                    </h1>
                </div>

                <div className="relative">
                    <button onClick={toggleDropdown} className="flex items-center space-x-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
                        </svg>
                        <span className="font-bold">Logout</span>
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 top-full">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700"></a>
                        </div>
                    )}
                </div>
            </header>
        </div>
    )
}