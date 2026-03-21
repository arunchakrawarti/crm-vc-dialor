"use client";
import React from "react";
import { Menu, ArrowRight } from "lucide-react";

const FollowChart = () => {
  return (
    <div className="mt-5 bg-[#f4f6f9]">
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md border border-gray-200 p-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Pending FollowUps, Leads, FollowUps Delay Days and Average Of Delay Details
            </h2>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-green-500 text-white rounded-full flex items-center justify-center shadow">
                <ArrowRight size={18} />
              </div>

              <Menu size={20} className="text-gray-600 cursor-pointer" />
            </div>
          </div>
          <div className="h-[250px] flex flex-col justify-end">
            <div className="h-[1px] bg-gray-400 relative">
              <div className="absolute w-full flex justify-between text-xs text-gray-600 mt-2">
                <span>0</span>
                <span>1</span>
                <span>2</span>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-700">
              
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                <span>Pending FollowUps</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                <span>Pending Late FollowUps Delay Days</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                <span>Pending Late FollowUps Leads</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="w-3 h-3 border-2 border-orange-500 rounded-full"></span>
                <span>Pending FollowUps Delay Average</span>
              </div>

            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-4 relative">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-sm font-semibold text-gray-700">
              Top 3 Users (Pending Late FollowUps)
            </h2>

            <Menu size={20} className="text-gray-600 cursor-pointer" />
          </div>
          <div className="flex items-center justify-center h-[300px]">
            
            <div className="relative w-[220px] h-[220px] rounded-full border border-gray-300 flex items-center justify-center">
              <div className="w-[140px] h-[140px] rounded-full border border-gray-300 flex items-center justify-center text-center">
                <div>
                  <p className="text-sm text-gray-600">Total Delay Days</p>
                  <p className="text-lg font-semibold">0</p>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FollowChart;