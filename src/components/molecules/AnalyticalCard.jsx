"use client";
import React from 'react';

const AnalyticalCard = ({ 
  title, 
  value = 0, 
  Icon, 
  FooterIcon, 
  cardColor, 
  textColor 
}) => {
  return (
    <div className="relative bg-white rounded-xl shadow-lg p-6 pt-12 flex flex-col justify-between transition-all hover:shadow-2xl hover:scale-[1.03] duration-300 ease-in-out">
      {/* Overlapping Floating Icon */}
      <div className={`absolute -top-5 left-6 w-14 h-14 rounded-xl flex items-center justify-center shadow-md text-white text-2xl ${cardColor}`}>
        {Icon && <Icon />}
      </div>

      {/* Primary Value */}
      <div className="flex justify-end items-end mb-4">
        <span className="text-5xl font-bold text-slate-900 tracking-tighter">
          {value}
        </span>
      </div>

      {/* Footer Section */}
      <div className={`flex items-center gap-2 mt-auto pt-4 border-t border-gray-100 font-bold text-sm uppercase tracking-wider ${textColor}`}>
        <span>{title}</span>
        {FooterIcon && <FooterIcon className="text-sm" />}
      </div>
    </div>
  );
};

export default AnalyticalCard;