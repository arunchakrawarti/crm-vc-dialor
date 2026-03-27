"use client";
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import React from 'react';

const LeadRecycleSearch = () => {
  const userOptions = [{ id: 1, name: "Admin" }];
  const restoreOptions = [{ id: 'all', name: "Show All" }];
  const branchOptions = [{ id: 1, name: "Main Branch" }];
  const sourceOptions = [{ id: 1, name: "Google" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input label="Contact Name" type="text" placeholder="" />
          <Input label="Mobile/Phone" type="text" placeholder="" />
          <Input label="Email" type="text" placeholder="" />
          <Input 
            label="Assign To(User)" 
            type="select" 
            placeholder="-Select Users-" 
            options={userOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input label="Date from" type="text" placeholder="" />
          <Input label="Date to" type="text" placeholder="" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          <Input label="Status" type="text" placeholder="" />
          <Input 
            label="Restore Type" 
            type="select" 
            placeholder="Show All" 
            options={restoreOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            label="Branch" 
            type="select" 
            placeholder="-Select Branch-" 
            options={branchOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            label="Source" 
            type="select" 
            placeholder="-Select Source-" 
            options={sourceOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input label="Custom Question" type="text" placeholder="" />
          <div className="pb-[2px]">
            <Button variant='success'
              type="button"
            >
              <i className="ri-search-line text-xl font-bold"></i>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LeadRecycleSearch;