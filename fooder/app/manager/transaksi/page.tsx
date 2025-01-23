"use client"
import { useState } from "react";
import { ChartLineIcon, LayoutGrid, LayoutGridIcon, LockKeyholeIcon, SchoolIcon } from "lucide-react";
import InfoCard from "@/components/ data transaksi/cardAndIcon";
import FinancialCard from "@/components/ data transaksi/FinaCialCard";
// import GridIcon from "../../../components/ data transaksi/icon";

const TransaksiPage = () => {
  const [progress, setProgress] = useState(100);
  return (
    <div className="justify-center bg-white mx-6">
      <div className="px-5  w-auto rounded-xl mb-12 flex">

        <div className="h-screen w-screen bg-gray-50 p-5 rounded-xl">
          <div className="flex gap-10 justify-between pb-5">

            <InfoCard
              Icon={LayoutGridIcon}
              title="1,000,000"
              subtitle="Current income"
              iconClassName="text-gray-500"
            />

            <InfoCard
              Icon={ChartLineIcon}
              title="$1,700,000"
              subtitle="Total cash raised"
              iconClassName="text-gray-500"
            />

            <InfoCard
              Icon={SchoolIcon}
              title="2400"
              subtitle="Number of schools"
              iconClassName="text-gray-500"
            />

            <InfoCard
              Icon={LockKeyholeIcon}
              title="$12,000"
              subtitle="In draft"
              iconClassName="text-gray-500"
            />

            <div className="flex items-center w-72 justify-center">
              {/* Icon Section */}
              <div className="w-full">
                <div className="flex-shrink-0 w-full h-auto flex items-center">
                  <div className="w-full bg-gray-200 rounded- h-6">
                    <div
                      className="bg-[#F45846] h-6 rounded transition-all duration-300"
                      style={{ width: 30 }} // Progress diatur dengan nilai dinamis
                    ></div>
                  </div>
                  <div className="ml-3">
                    <h1 className="text-lg font-black text-gray-700">$21,1K</h1>
                  </div>
                </div>
                <p className="text-xs text-gray-400">Outstanding revenue</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5  ">
            <div className="w-full">
            <FinancialCard />
            </div>
            <div className="bg-red-50 w-full">
              asdasd
            </div>
          </div>

        </div>

        <div className="h-screen w-2/5 bg-blue-100">
        </div>
      </div>
    </div>
  );
};

export default TransaksiPage;
