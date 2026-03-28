"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const IvrSearch = () => {
  const userOptions = [{ id: 1, name: "Admin" }];
  const branchOptions = [{ id: 1, name: "Main Branch" }];
  const campaignOptions = [{ id: 1, name: "General Campaign" }];
  const sourceOptions = [{ id: 1, name: "Google" }];
  const dateOptions = [{ id: 1, name: "Today" }];
  const callStatusOptions = [
    { id: 1, name: "Answered" },
    { id: 2, name: "Missed" },
  ];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input label="Name/Phone/Email" type="text" placeholder="" />
          <Input label="Description" type="text" placeholder="" />

          <Input
            label="Users"
            type="select"
            placeholder="-Select Users-"
            options={userOptions}
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

          <Input
            label="Select Campaign"
            type="select"
            placeholder="-Select Campaign-"
            options={campaignOptions}
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
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-end">
          <Input
            type="select"
            placeholder="-Select Date-"
            options={dateOptions}
            labelKey="name"
            valueKey="id"
          />

          <Input type="text" placeholder="" />

          <Input
            type="select"
            placeholder="-Select CallStatus-"
            options={callStatusOptions}
            labelKey="name"
            valueKey="id"
          />

          <Input type="text" placeholder="" />

          <div className="hidden lg:block"></div>
          <div className="pb-[2px]">
            <Button variant="success" type="button">
              <i className="ri-search-line text-xl font-bold"></i>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IvrSearch;
