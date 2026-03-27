"use client";
import React from 'react';
import Input from "../common/Input"; // Aapka custom component path

const LeadReportSearch = () => {
  // Dummy options for UI look
  const dummyOptions = [{ id: 1, name: "Option 1" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <Input 
            label="Users" 
            type="select" 
            placeholder="-Select Users-" 
            options={dummyOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            label="Select Status" 
            type="select" 
            placeholder="-Select Status-" 
            options={dummyOptions} 
          />
          <Input 
            label="Select Branch" 
            type="select" 
            placeholder="-Select Branch-" 
            options={dummyOptions} 
          />
          <Input 
            label="Select Source" 
            type="select" 
            placeholder="-Select Source-" 
            options={dummyOptions} 
          />
          <Input 
            label="Search By Date" 
            type="select" 
            placeholder="-Select Date-" 
            options={dummyOptions} 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-end">
          <Input 
            type="text" 
            placeholder="-Search by city-" 
          />
          <Input 
            type="text" 
            placeholder="-Search by state-" 
          />
          <Input 
            type="text" 
            placeholder="-Search by country-" 
          />
        
          <div className="hidden lg:block"></div>

          {/* Search Button */}
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

export default LeadReportSearch;