import React from "react";
import { arrayStatistik } from "../../components/data/statistik";

export default function StatistikList() {
    return (
        <div className="flex justify-between gap-4">
            {arrayStatistik.map((statistik) => (
                <div
                    key={statistik.id}
                    className="bg-gray-200 p-4 w-60 rounded-xl shadow-md"
                >
                    <h1 className="text-base text-black pb-5">{statistik.title}</h1>
                    <h1 className="text-6xl font-semibold text-[#F45846] pb-2">
                        {statistik.data}
                    </h1>
                    <p className="text-xs max-w-full w-36">{statistik.footer}</p>
                </div>
            ))}
        </div>
    );
}
