"use client";
import React from "react";
import { Search, Menu } from "lucide-react";
import Input from "@/components/common/Input";
import PerformanceTable from "./PerformanceTable";

const PerformanceReport = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
        <div className="flex flex-wrap items-end gap-4">
          <div className="w-full md:w-64">
            <Input
              label="Users"
              type="select"
              placeholder="-Select Users-"
              options={[]}
            />
          </div>
          <div className="w-full md:w-64">
            <Input
              label="Search By Date"
              type="select"
              placeholder="-Select Date-"
              options={[]}
            />
          </div>
          <button className="bg-[#00adef] text-white p-3 rounded-lg shadow-md hover:bg-[#0096d1] transition-all h-[53px] w-[53px] flex items-center justify-center mb-[2px]">
            <Search size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChartCard title="User First & Last Calling Time" yLabel="Time">
          <div className="absolute right-2 top-10 bg-white border rounded shadow-sm p-2 text-[10px] space-y-1 z-10">
            <div className="flex items-center gap-1">
              <span className="text-red-500">●-●</span> Last Call
            </div>
            <div className="flex items-center gap-1">
              <span className="text-blue-500">●-●</span> First Call
            </div>
          </div>
        </ChartCard>
        <ChartCard
          title="Total Talk Time Detail (In Minutes)"
          yLabel="TalkTime (In Minute)"
        >
          <div className="absolute right-2 top-10 bg-white border rounded shadow-sm p-2 text-[10px] z-10">
            <div className="flex items-center gap-1">
              <span className="text-[#00adef] text-lg">■</span> Total TalkTime
              (In Minute)
            </div>
          </div>
        </ChartCard>
        <ChartCard title="User Calls History Detail" yLabel="Values">
          <div className="absolute right-2 top-10 bg-white border rounded shadow-sm p-2 text-[10px] space-y-1 z-10">
            <div className="flex items-center gap-1">
              <span className="text-blue-500 text-xs">●</span> Total Calls
            </div>
            <div className="flex items-center gap-1">
              <span className="text-red-500 text-xs">●</span> Connected Calls
            </div>
            <div className="flex items-center gap-1">
              <span className="text-yellow-500 text-xs">●</span> NotConnected
              Call
            </div>
          </div>
        </ChartCard>
      </div>
      <PerformanceTable />
    </div>
  );
};
const ChartCard = ({ title, yLabel, children }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 relative min-h-[450px] flex flex-col">
    <div className="flex justify-center items-center mb-10 relative">
      <h3 className="font-bold text-gray-800 text-sm md:text-base text-center px-6">
        {title}
      </h3>
      <Menu
        className="absolute right-0 text-gray-400 cursor-pointer"
        size={20}
      />
    </div>
    <div className="flex-1 relative border-l border-b border-gray-400 mb-10 ml-10">
      <div className="absolute -left-12 top-1/2 -translate-y-1/2 -rotate-90 text-[11px] text-gray-500 font-medium whitespace-nowrap">
        {yLabel}
      </div>
      {children}
    </div>
  </div>
);

export default PerformanceReport;
