"use client"

import { useRouter } from "next/router";
import { useState } from "react";

type Props = {
    url: string;
    search: string;
}

const Search = ({ url, search }: Props) => {
    const [keyword, setKeyword] = useState<string>(search);
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
        e.preventDefault();
        router.push(`${url}?search=${keyword}`);
    }

    return (
        <input type="text" id="keyword" value={keyword} onChange={(e) => setKeyword(e.target.value)} 
        className={`text-sm w-full rounded-md p-2 bg-slate-50 border border-secondary focus:border-primary focus:outline-none`}
        placeholder="Search" onKeyUp={handleSearch}/>
    )
}
export default Search;