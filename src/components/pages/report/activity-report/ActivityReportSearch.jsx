"use client";
import Input from '@/components/common/Input';
import React from 'react';


const ActivityReportSearch = () => {
  
  const userOptions = [{ id: 1, name: "Admin" }];
  const typeOptions = [{ id: 1, name: "Call" }, { id: 2, name: "Meeting" }];
  const branchOptions = [{ id: 1, name: "Main Branch" }];
  const sourceOptions = [{ id: 1, name: "Google" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input label="Contact Name" type="text" placeholder="Contact Name" />
          <Input label="Mobile/Phone" type="text" placeholder="Mobile/Phone" />
          <Input label="Email" type="text" placeholder="Email" />
          <Input 
            label="Assign To(User)" 
            type="select" 
            placeholder="-Select Users-" 
            options={userOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input label="Date from" type="text" placeholder="Date From" />
          <Input label="Date to" type="text" placeholder="Date To" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          <Input 
            type="select" 
            placeholder="-Select Type-" 
            options={typeOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input type="text" placeholder="" />
          <Input 
            type="select" 
            placeholder="-Select Branch-" 
            options={branchOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            type="select" 
            placeholder="-Select Source-" 
            options={sourceOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input type="text" placeholder="" /> 
        
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

export default ActivityReportSearch;