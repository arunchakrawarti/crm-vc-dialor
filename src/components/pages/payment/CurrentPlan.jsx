"use client";
import React from 'react';

const CurrentPlan = () => {
  return (
    <div className="w-full  bg-white rounded-md shadow-sm border border-gray-100 overflow-hidden font-inter">
      <div className="flex flex-col">
    
        <div className="flex bg-[#f8f9fa] border-b border-gray-100">
          <div className="w-1/3 p-4 text-gray-700 font-medium">User Name</div>
          <div className="w-2/3 p-4 text-black font-bold tracking-tight">abhishek jaiswal</div>
        </div>
        <div className="flex bg-white border-b border-gray-100">
          <div className="w-1/3 p-4 text-gray-700 font-medium">Company Name</div>
          <div className="w-2/3 p-4 text-black font-bold">sg bugrang private limited</div>
        </div>
        <div className="flex bg-[#f8f9fa] border-b border-gray-100">
          <div className="w-1/3 p-4 text-gray-700 font-medium">Plan Type</div>
          <div className="w-2/3 p-4 text-black font-bold">Monthly</div>
        </div>
        <div className="flex bg-white border-b border-gray-100">
          <div className="w-1/3 p-4 text-gray-700 font-medium">Plan Expire On</div>
          <div className="w-2/3 p-4 text-black font-bold">31 Mar 2026</div>
        </div>
        <div className="flex bg-[#f8f9fa]">
          <div className="w-1/3 p-4 text-gray-700 font-medium">Plan Amount</div>
          <div className="w-2/3 p-4 text-black font-bold flex items-center gap-1">
            <span>₹</span> 1000
          </div>
        </div>

      </div>
    </div>
  );
};

export default CurrentPlan;