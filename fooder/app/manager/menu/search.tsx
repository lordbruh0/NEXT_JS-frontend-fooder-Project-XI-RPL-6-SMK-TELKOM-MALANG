"use client";

import { useRouter } from "next/navigation";
import { KeyboardEvent, useState } from "react";

type Props = {
  url: string;
  search: string;
};

const Search = ({ url, search }: Props) => {
  const [keyword, setKeyword] = useState<string>(search);
  const router = useRouter();

  const handleSearch = (e: KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    router.push(`${url}?search=${keyword}`);
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full px-6 py-1  rounded-md focus:outline-none focus:ring-2 focus:ring-[#F45846] text-black placeholder:text-black placeholder:text-start bg-[#F6F6F6] "
        onKeyUp={handleSearch}
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
