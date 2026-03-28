"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const FacebookFormSearch = () => {
  return (
    <div className="w-full bg-[#f5f5f5] 
     rounded-md">
    
      <div className="flex items-end gap-4">
        <div className="">
          <Input
            label="Form Name"
            type="text"
            placeholder="Search By Form Name"
          />
        </div>
        <Button className="h-[45px] px-5 bg-blue-600 text-white rounded-md shadow">
          <i className="ri-search-line text-lg"></i>
        </Button>

      </div>
    </div>
  );
};

export default FacebookFormSearch;