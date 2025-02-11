import React, { Children, ReactNode } from "react";

type Props = {
    children: ReactNode
    type: "button" | "submit" | "reset",
    onClick?: () => void
    className?: string
}

export const ButtonPrimary = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-[#F45846] text-white rounded-md py-2 px-4 hover:bg-red-50 hover:text-[#F45846] font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
}

export const ButtonSuccess = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-[#F45846] text-white rounded-md py-2 px-5 hover:bg-white hover:text-[#F45846] font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 
 
 export const ButtonWarning = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-yellow-500 text-white rounded-md py-2 px-4 hover:bg-yellow-600 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 
 
 export const ButtonDanger = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-red-600 text-white rounded-md py-2 px-4 hover:bg-red-700 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
 }
 
 
export const ButtonOutlineSucces = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-green-200 rounded-md text-green-800 py-2 px-4 shadow-md border-2 border-green-800 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
}

export const ButtonOutlineWarning = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm bg-yellow-200 rounded-md text-yellow-800 py-2 px-4 shadow-md border-2 border-yellow-800 font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
}

export const ButtonOutlineDanger = ({ children, type, onClick, className }: Props) => {
    return (
        <button className={`text-sm rounded-md text-[#F45846] py-2 px-5 shadow-md border-2 border-[#F45846] font-bold ${className}`}
            type={type} onClick={() => { if (onClick) onClick() }}>
            {children}
        </button>
    )
}