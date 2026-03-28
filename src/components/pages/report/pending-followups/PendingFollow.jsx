"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { Search } from "lucide-react";
import FollowChart from "./FollowChart";

const PendingFollow = () => {
  return (
    <div className="bg-[#f4f6f9] min-h-screen">
      {/* 🔹 FILTER BAR */}
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm mb-6 flex flex-wrap items-center gap-4">
        <div className="w-[250px]">
          <Input
            type="select"
            placeholder="--Select Users--"
            options={["User 1", "User 2"]}
          />
        </div>

        <div className="w-[250px]">
          <Input
            type="select"
            placeholder="--Select Date--"
            options={["Today", "Yesterday", "Last 7 Days"]}
          />
        </div>

        {/* 🔍 Search Button */}
        <Button className="bg-[#1e88e5] hover:bg-[#1565c0] text-white p-3 rounded shadow-md">
          <Search size={20} />
        </Button>
      </div>

      {/* 🔹 CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">
              ⏱
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-gray-600">
              Pending Late FollowUps Leads
            </p>
            <p className="text-lg font-semibold text-gray-900">0</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white border border-gray-200 rounded-xl p-5 flex items-center gap-4 shadow-sm">
          {/* Icon */}
          <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-green-600 flex items-center justify-center text-white text-lg">
              📈
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-sm text-gray-600">
              Average Pending Late FollowUps
            </p>
            <p className="text-lg font-semibold text-gray-900">0</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white border-l-4 border-blue-500 rounded-xl p-5 shadow-sm">
          <p className="text-sm font-semibold text-gray-800 mb-2">
            Top Pending Late FollowUp User
          </p>

          <p className="text-sm text-gray-600">
            <span className="font-medium">User Name :</span> Unknown
          </p>

          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Total Delay Days :</span> 0
          </p>
        </div>
      </div>
      <FollowChart />
    </div>
  );
};

export default PendingFollow;
