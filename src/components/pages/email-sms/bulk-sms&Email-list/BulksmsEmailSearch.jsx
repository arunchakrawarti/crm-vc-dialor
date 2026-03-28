"use client";
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import React from 'react';

const BulksmsEmailSearch = () => {
  const templateOptions = [{ id: 1, name: "Template 1" }];
  const smsTypeOptions = [{ id: 1, name: "Transactional" }, { id: 2, name: "Promotional" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          <Input 
            label="Select Template" 
            type="select" 
            placeholder="-Select Template-" 
            options={templateOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            label="Select SMS Type" 
            type="select" 
            placeholder="-Select SMS Type-" 
            options={smsTypeOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <Input 
            label="Name" 
            type="text" 
            placeholder="Search By Name" 
          />
          <Input 
            label="Date from" 
            type="text" 
            placeholder="" 
          />
          <Input 
            label="Date to" 
            type="text" 
            placeholder="" 
          />
          <div className="pb-[2px]">
            <Button variant='success'
            type="button">
              <i className="ri-search-line text-xl font-bold"></i>
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BulksmsEmailSearch;