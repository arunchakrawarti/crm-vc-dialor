"use client";
import React from 'react';


const LeadsRulesSearch = () => {
  // Dummy options dropdown ke liye
  const userOptions = [
    { id: 1, name: "Admin" },
    { id: 2, name: "User" }
  ];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-end">
        
          <Input 
            label="Users" 
            type="select" 
            placeholder="-Select Users-" 
            options={userOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            label="Date from" 
            type="text" 
            placeholder="" 
          />

          {/* Date To Input */}
          <Input 
            label="Date to" 
            type="text" 
            placeholder="" 
          />

          {/* Blue Search Button */}
          <div className="pb-[2px]">
            <button 
              type="button"
              className="bg-[#2196f3] hover:bg-[#1976d2] text-white h-[45px] w-[55px] rounded-md flex items-center justify-center shadow-md transition-all active:scale-95"
            >
              <i className="ri-search-line text-xl font-bold"></i>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LeadsRulesSearch;