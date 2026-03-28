import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import React from 'react';


const BulksmsListSearch = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-wrap items-end gap-4">
        <div className="w-full md:w-[200px]">
          <Input 
            label="Select API Type"
            type="select"
            placeholder="-Select-"
            options={["Transactional", "Promotional", "OTP"]} 
          />
        </div>
        <div className="w-full md:w-[200px]">
          <Input 
            label="Name"
            type="text"
            placeholder="Search By"
          />
        </div>
        <div className="w-full md:w-[150px]">
          <Input 
            label="Date from"
            type="date"
          />
        </div>
        <div className="w-full md:w-[150px]">
          <Input 
            label="Date to"
            type="date"
          />
        </div>
        <div className="w-full md:w-[200px]">
          <Input 
            label="SendMessage"
            type="select"
            placeholder="--Select Type--"
            options={["Type A", "Type B"]}
          />
        </div>
        <div className="mb-1">
          <Button variant='success'>
            <i className="ri-search-line text-xl font-bold"></i>
          </Button>
        </div>

      </div>
    </div>
  )
}

export default BulksmsListSearch;