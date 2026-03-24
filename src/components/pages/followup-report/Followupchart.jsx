"use client";
import React from 'react';
import { Menu } from 'lucide-react';

const Followupchart = () => {
  const chartTitles = [
    "Today Followups",
    "Tomorrow Followups",
    "Pending Followups",
    "FreshLead Details"
  ];

  return (
    <div className="mt-5 p-4 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {chartTitles.map((title, index) => (
          <ChartCard key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

const ChartCard = ({ title }) => (
  <div className="bg-white rounded shadow-md border p-4 border-gray-100 relative flex flex-col min-h-[450px]">
    <div className="flex justify-between items-center mb-6">
      <div className="flex-1 text-center">
        <h3 className="font-bold text-gray-800 text-base md:text-lg uppercase tracking-tight">
          {title}
        </h3>
      </div>
      <Menu className="text-gray-400 cursor-pointer hover:text-gray-600" size={22} />
    </div>
    <div className="flex-1 relative border-l-2 border-b-2 border-gray-300 mb-10 ml-12 mt-4">
      <div className="absolute right-3 top-2 bg-white border border-gray-200 rounded shadow-lg p-3 text-[11px] space-y-2 z-10">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#00adef]"></span> 
          <span className="text-gray-600 font-semibold">Total</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-[#5c59c2]"></span> 
          <span className="text-gray-600 font-semibold">Complete</span>
        </div>
      </div>
      <div className="absolute -left-10 top-1/2 -translate-y-1/2 -rotate-90 text-xs text-gray-400 font-bold tracking-widest uppercase">
        Values
      </div>
      <div className="w-full h-full">
      </div>
      <div className="absolute -bottom-8 right-3 text-xs text-gray-400 font-bold italic">
        Values
      </div>
    </div>
  </div>
);

export default Followupchart;