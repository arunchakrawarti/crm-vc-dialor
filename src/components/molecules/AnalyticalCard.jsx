"use client";
import React from "react";

const AnalyticalCard = ({
  title,
  value = 0,
  Icon,
  FooterIcon,
  cardColor,
  textColor,
}) => {
  return (
    <div className="relative bg-[#f4f6f8] rounded-lg p-5 shadow-sm border border-gray-200 hover:shadow-md transition-all">
      
      <div className="flex justify-between">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center text-white ${cardColor}`}
        >
          {Icon && <Icon size={22} />}
        </div>
        <h2 className="text-5xl font-semibold text-gray-700">{value}</h2>
      </div>
      <div
        className={`flex items-center gap-2 mt-6 text-sm font-semibold ${textColor}`}
      >
        <span>{title}</span>
        {FooterIcon && <FooterIcon size={16} />}
      </div>
    </div>
  );
};

export default AnalyticalCard;