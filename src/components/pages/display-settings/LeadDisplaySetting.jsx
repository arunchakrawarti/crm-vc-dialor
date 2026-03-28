"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const LeadDisplaySetting = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm border border-gray-100 font-inter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
        <div className="flex flex-col gap-4">
          <Input type="checkbox" id="serialNo" label="Show Serial No" />
          <Input type="checkbox" id="name" label="Show Name" />
          <Input type="checkbox" id="assignedTo" label="Show Assigned To" />
          <Input type="checkbox" id="mobile" label="Show Mobile" />
          <Input type="checkbox" id="status" label="Show Status" />
          <Input type="checkbox" id="reference" label="Show Reference" />
          <Input type="checkbox" id="comment" label="Show Comment" />
          <Input type="checkbox" id="date" label="Show Date" />
          <Input type="checkbox" id="branch" label="Show Branch" />
          <Input
            type="checkbox"
            id="customQuestion"
            label="Show Custom Question"
          />
          <Input
            type="checkbox"
            id="mobileAppCustom"
            label="Show Mobile App Custom Question"
          />
        </div>
        <div className="flex flex-col mt-4 gap-4">
          <Input type="checkbox" id="source" label="Show Source" />
          <Input type="checkbox" id="priority" label="Show Priority" />
          <Input type="checkbox" id="description" label="Show Description" />
          <Input type="checkbox" id="budget" label="Show Estimated Budget" />
          <Input type="checkbox" id="state" label="Show State" />
          <Input type="checkbox" id="city" label="Show City" />
          <Input type="checkbox" id="address" label="Show Address" />
          <Input type="checkbox" id="fbAdName" label="Show Facebook AdName" />
        </div>
      </div>
      <div className="mt-10 flex justify-end">
        <Button variant="success">
          SAVE
          <i className="ri-send-plane-fill text-lg"></i>
        </Button>
      </div>
    </div>
  );
};

export default LeadDisplaySetting;
