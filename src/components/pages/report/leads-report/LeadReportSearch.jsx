"use client";
import Input from '@/components/common/Input';
import React from 'react';

const LeadReportSearch = () => {
  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">

          <Input 
            label="Users" 
            type="select" 
            placeholder="-Select Users-" 
            options={[{ id: 1, name: "Option 1" }]}
            labelKey="name"
            valueKey="id"
          />

          <Input 
            label="Select Status" 
            type="select" 
            placeholder="-Select Status-" 
            options={[{ id: 1, name: "Option 1" }]}
            labelKey="name"
            valueKey="id"
          />

          <Input 
            label="Select Branch" 
            type="select" 
            placeholder="-Select Branch-" 
            options={[{ id: 1, name: "Option 1" }]}
            labelKey="name"
            valueKey="id"
          />

          <Input 
            label="Select Source" 
            type="select" 
            placeholder="-Select Source-" 
            options={[{ id: 1, name: "Option 1" }]}
            labelKey="name"
            valueKey="id"
          />

          <Input 
            label="Search By Date" 
            type="select" 
            placeholder="-Select Date-" 
            options={[{ id: 1, name: "Option 1" }]}
            labelKey="name"
            valueKey="id"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 items-end">
          
          <Input placeholder="-Search by city-" />
          <Input placeholder="-Search by state-" />
          <Input placeholder="-Search by country-" />

          <div className="hidden lg:block"></div>
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