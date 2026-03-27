"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const SchedulesSearch = () => {
  const userOptions = [{ id: 1, name: "Admin" }];
  const followUpOptions = [{ id: 1, name: "Today Follow Up" }];
  const sourceOptions = [{ id: 1, name: "Select Source" }];
  const branchOptions = [{ id: 1, name: "Select Branch" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-6">
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
          <Input 
            label="Select Source" 
            type="select" 
            placeholder="-Select Source-" 
            options={sourceOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            label="Select Branch" 
            type="select" 
            placeholder="-Select Branch-" 
            options={branchOptions} 
            labelKey="name" 
            valueKey="id" 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          <Input type="text" placeholder="" /> 
          <Input 
            type="select" 
            placeholder="Today Follow Up" 
            options={followUpOptions} 
            labelKey="name" 
            valueKey="id" 
            defaultValue="1"
          />

          <Input type="text" placeholder="" /> 

          <div className="pb-3">
            <Input 
              type="checkbox" 
              label="My Lead" 
              id="myLead"
              className="font-medium text-gray-700"
            />
          </div>
          <div className="pb-[2px]">
            <Button variant="success"
              type="button"
            >
              <i className="ri-search-line text-xl font-bold"></i>
            </Button>
          </div>
          <div className="hidden lg:block"></div>
        </div>

      </div>
    </div>
  );
};

export default SchedulesSearch;