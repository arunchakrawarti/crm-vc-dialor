"use client";
import Input from '@/components/common/Input';
import React from 'react';

const ActivityReportSearch = () => {
  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      
      <div className="flex flex-col gap-5">

        {/* 🔹 TOP ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          
          <Input label="Contact Name" type="text" placeholder="Contact Name" />
          
          <Input label="Mobile/Phone" type="text" placeholder="Mobile/Phone" />
          
          <Input label="Email" type="text" placeholder="Email" />

          <Input 
            label="Assign To(User)" 
            type="select" 
            placeholder="-Select Users-" 
            options={[{ id: 1, name: "Admin" }]}
            labelKey="name"
            valueKey="id"
          />

          <Input label="Date From" type="date" />
          
          <Input label="Date To" type="date" />
        </div>

        {/* 🔹 BOTTOM ROW */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          
          <Input 
            label="Type"
            type="select" 
            placeholder="-Select Type-" 
            options={[
              { id: 1, name: "Call" },
              { id: 2, name: "Meeting" }
            ]}
            labelKey="name"
            valueKey="id"
          />

          <Input 
            label="City"
            type="text" 
            placeholder="Search by city" 
          />

          <Input 
            label="Branch"
            type="select" 
            placeholder="-Select Branch-" 
            options={[{ id: 1, name: "Main Branch" }]}
            labelKey="name"
            valueKey="id"
          />

          <Input 
            label="Source"
            type="select" 
            placeholder="-Select Source-" 
            options={[{ id: 1, name: "Google" }]}
            labelKey="name"
            valueKey="id"
          />

          <Input 
            label="Remarks"
            type="text" 
            placeholder="Remarks" 
          />

          {/* 🔹 Search Button */}
          <div className="flex items-end">
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