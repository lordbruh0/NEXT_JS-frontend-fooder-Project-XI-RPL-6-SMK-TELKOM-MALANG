"use client"

import { useRouter } from "next/navigation"
import { KeyboardEvent, useState } from "react"

type Props = {
    url: string,
    search: string
}

const Search = ({ url, search }: Props) => {
    const [keyword, setKeyword] = useState<string>(search)
    const router = useRouter()

    
}