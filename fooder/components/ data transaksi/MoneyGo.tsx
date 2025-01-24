import React from "react";

type MoneyType = {
  title: string;
  cost: string;
  persen: number;
};

const MoneyGo: React.FC<MoneyType> = ({ title, cost, persen }) => {
  return (
    <div className="pt-8">
      <div>
        <div className="flex justify-between w-full">
          <p className="text-xs font-medium">{title}</p>
          <p className="text-xs font-medium">{cost}</p>
        </div>
        <div className="pt-3">
          <div className="w-full bg-gray-200 rounded h-2">
            <div
              className="bg-gray-800 h-2 rounded transition-all duration-300"
              style={{ width: `${persen}%` }} // Progress diatur dengan nilai dinamis
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoneyGo;
