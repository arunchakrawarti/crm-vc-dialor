"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const ErrorLogSearch = () => {
  return (
    <div className="w-full bg-gray-100 p-4 rounded-md">
      <div className="flex flex-wrap items-end gap-4">
        <div className="w-full sm:w-[200px]">
          <Input
            label="Page Name"
            type="text"
            placeholder="Search By PageName"
          />
        </div>
        <div className="w-full sm:w-[200px]">
          <Input
            label="Date from"
            type="date"
            placeholder="From"
          />
        </div>
        <div className="w-full sm:w-[200px]">
          <Input
            label="Date to"
            type="date"
            placeholder="To"
          />
        </div>
        <div className="flex items-end">
          <Button className="h-[45px] px-4 bg-blue-600 text-white rounded-md shadow">
            <i className="ri-search-line text-lg"></i>
          </Button>
        </div>

      </div>
    </div>
  );
};

export default ErrorLogSearch;