"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { KeyboardEvent, useState, useEffect } from "react";
import { AlertDanger } from "../alert";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Ambil keyword dari URL jika ada
  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    const search = searchParams.get("search") || "";
    setKeyword(search);
  }, [searchParams]); // Update keyword ketika URL berubah

  // Tentukan URL berdasarkan halaman aktif
  const getSearchUrl = () => {
    if (pathname.includes("/menu")) return "/manager/menu";
    if (pathname.includes("/user")) return "/manager/user";
    return alert(
        
    );
  };

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      router.push(`${getSearchUrl()}?search=${keyword}`);
    }
  };

  return (
    <div className="relative w-72">
      <input
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        onKeyUp={handleSearch}
        className="w-full px-6 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F45846] text-black placeholder:text-black bg-[#F6F6F6]"
      />
      <div className="absolute inset-y-0 right-0 flex items-center px-5 bg-[#F45846] justify-center rounded-r-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-10.607-10.607 7.5 7.5 0 0 0 10.607 10.607z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Search;
