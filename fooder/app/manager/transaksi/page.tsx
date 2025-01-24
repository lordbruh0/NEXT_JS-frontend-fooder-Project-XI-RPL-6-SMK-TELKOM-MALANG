"use client"
import { useState } from "react";
import { ChartLineIcon, LayoutGrid, LayoutGridIcon, LockKeyholeIcon, PiggyBankIcon, SchoolIcon } from "lucide-react";
import InfoCard from "@/components/ data transaksi/cardAndIcon";
import FinancialCard from "@/components/ data transaksi/FinaCialCard";
import SchoolList from "@/components/ data transaksi/topUser";
import CandlestickChart from "@/components/ data transaksi/CandleStickChart";
import MoneyGo from "@/components/ data transaksi/MoneyGo";
// import GridIcon from "../../../components/ data transaksi/icon";

const TransaksiPage = () => {
  const [progress, setProgress] = useState(100);
  return (
    <div className="justify-center bg-white mx-6">
      <div className="px-5  w-auto rounded-xl mb-12 flex">

        <div className="h-screen w-screen p-5 rounded-xl">
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

          <div>
            <div className="flex gap-5 pb-5 w-full">
              <div className="w-full">
                <FinancialCard />
              </div>
              <div className="w-full items-center justify-center flex pt-10">
                <CandlestickChart />
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-between items-center">
              <h1 className="text-lg font-black text-gray-700">Top User</h1>
              <button className="rounded-full  border-2 p-2 border-gray-500 text-xs">Full Result</button>
            </div>
            <div className="pt-2">
              <SchoolList />
            </div>
          </div>


        </div>

        <div className=" w-2/5 bg-gray-50 h-screen pt-5 px-14 itemd-center rounded-xl justify-evenly flex-col">
          <div>
          <div>
            <h1 className="text-2xl font-medium">Where the money go?</h1>
          </div>
          <div>
            <MoneyGo
              title="Transaction"
              cost="872.400"
              persen={15}
            />
            <MoneyGo
              title="Teams"
              cost="1.378.200"
              persen={43}
            />
            <MoneyGo
              title="Conversation"
              cost="928.500"
              persen={30}
            />
            <MoneyGo
              title="Transportation"
              cost="420.700"
              persen={20}
            />
            <MoneyGo
              title="Vehcile"
              cost="520.000"
              persen={5}
            />
          </div>
          </div>
          <div className="bg-blue-50 h-auto w-full flex justify-center items-center p-5 rounded-3xl mt-64">
            <div className="flex flex-col justify-center items-center text-center">
              <PiggyBankIcon className="text-blue-500 w-20 h-20" />
              <h1 className="text-2xl font-medium text-black pb-1">Save More Money</h1>
              <p className="w-full max-w-72 text-gray-500 text-xs">
              Discover practical tips and strategies to effectively manage your finances, and save more money to achieve your financial goals.
              </p>
              <button className="text-sm py-3 px-16 rounded-md bg-blue-500 mt-5 text-white">VIEW TIPS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransaksiPage;
