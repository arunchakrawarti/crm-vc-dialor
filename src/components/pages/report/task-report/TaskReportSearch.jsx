"use client";
import React from "react";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const TaskReportSearch = () => (
  <div className="flex flex-wrap items-end gap-4">
    <div className="w-full md:w-64">
      <Input 
        label="Users" 
        type="select" 
        placeholder="-Select Users-" 
        options={[{id: 1, name: 'Admin'}]} 
        labelKey="name" 
        valueKey="id"
      />
    </div>
    <div className="w-full md:w-64">
      <Input 
        label="Search By Date" 
        type="select" 
        placeholder="-Select Date-" 
        options={[{v: 'today', l: 'Today'}]} 
        labelKey="l" 
        valueKey="v"
      />
    </div>
    <Button variant="success">
      <i className="ri-search-line text-lg font-bold"></i>
    </Button>
  </div>
);

export default TaskReportSearch;