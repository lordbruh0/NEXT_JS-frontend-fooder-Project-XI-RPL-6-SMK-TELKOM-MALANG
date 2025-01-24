import { LucideIcon } from "lucide-react";
import React from "react";

type InfoType = {
  Icon: LucideIcon;
  title: string;
  subtitle: string;
  iconClassName?: string;
}

// Komponen InfoCard
const InfoCard: React.FC<InfoType> = ({ Icon, title, subtitle, iconClassName = "text-gray-500" }) => {
  return (
    <div className="flex items-center">
      {/* Icon Section */}
      <div className="flex-shrink-0 w-10 h-10  flex items-center justify-center">
        {Icon && <Icon className={`w-6 h-6 ${iconClassName}`} />}
      </div>

      {/* Text Section */}
      <div className="ml-3">
        <h1 className="text-lg font-black text-gray-700">{title}</h1>
        <p className="text-xs text-gray-400">{subtitle}</p>
      </div>
    </div>
  );
};

export default InfoCard;
