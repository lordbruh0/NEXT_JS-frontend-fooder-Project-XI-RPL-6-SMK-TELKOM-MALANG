import React from "react";
import { arrayAdmin } from "../data/admin";

interface StatistikCardProps {
    title: string;
    data: number;
    footer: string;
    footer2: string;
}

const StatistikCard: React.FC<StatistikCardProps> = ({ title, data, footer, footer2 }) => {
    return (
        
        <div className="bg-gray-200 p-4 w-60 rounded-xl">
        <h1 className="text-base text-black pb-5">{title}</h1>
        <h1 className="text-6xl font-semibold text-[#F45846] pb-2">{data}</h1>
        <p className="text-xs">{footer}</p>
        <p className="text-xs">{footer2}</p>
      </div>
    )
}

export default StatistikCard;