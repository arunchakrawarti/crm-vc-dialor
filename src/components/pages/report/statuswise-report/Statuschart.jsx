"use client";
import React from "react";
import { Menu } from "lucide-react";

const Statuschart = () => {
  return (
    <div className="bg-[#f4f6f9] mt-5 min-h-screen">
      <div className="bg-white rounded-lg shadow-md p-6 relative">
        <div className="text-center relative">
          <h2 className="text-lg font-semibold text-gray-800">
            Lead Working Detail Status Wise
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            <span className="font-semibold">User:</span> Abhishek Jaiswal{" "}
            <span className="font-semibold">& Total Leads:</span> 0
          </p>
          <div className="absolute right-0 top-0 cursor-pointer">
            <Menu size={20} />
          </div>
        </div>
        <div className="mt-10">
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500 rotate-[-90deg]">Leads</span>
            <div className="w-full">
              <div className="h-[1px] bg-gray-300 mt-10"></div>
              <div className="border-t border-gray-400 mt-20 relative">
                <p className="text-center text-sm text-gray-600 mt-2">
                  Total Lead
                </p>
              </div>
              <div className="flex justify-center items-center gap-2 mt-6">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span className="text-sm text-gray-600">Leads</span>
              </div>
              <p className="text-right text-xs text-gray-400 mt-4">
                Highcharts.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statuschart;
