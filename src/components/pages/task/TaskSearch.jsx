"use client";
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import React from 'react';

const TaskSearch = () => {
  const userOptions = [{ id: 1, name: "Admin" }];
  const priorityOptions = [{ id: 1, name: "High" }, { id: 2, name: "Medium" }, { id: 3, name: "Low" }];
  const dateOptions = [{ id: 1, name: "Today" }];
  const statusOptions = [{ id: 1, name: "Pending" }, { id: 2, name: "Completed" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input label="Title" type="text" placeholder="" />
          
          <Input 
            label="Tasks Assigned" 
            type="select" 
            placeholder="-Select Users-" 
            options={userOptions} 
            labelKey="name" 
            valueKey="id" 
          />

          <Input label="Description" type="text" placeholder="" />
          <Input label="Lead Name" type="text" placeholder="" />

          <Input 
            label="Search By Priority" 
            type="select" 
            placeholder="Select Priority" 
            options={priorityOptions} 
            labelKey="name" 
            valueKey="id" 
          />

          <Input 
            label="Search By Date" 
            type="select" 
            placeholder="-Select Date-" 
            options={dateOptions} 
            labelKey="name" 
            valueKey="id" 
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          <Input 
            label="Search By Status" 
            type="select" 
            placeholder="Select Status" 
            options={statusOptions} 
            labelKey="name" 
            valueKey="id" 
          />
          <div className="pb-[2px]">
            <Button variant='success'
              type="button"
            >
              <i className="ri-search-line text-xl font-bold"></i>
            </Button>
          </div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
          <div className="hidden lg:block"></div>
        </div>

      </div>
    </div>
  );
};

export default TaskSearch;