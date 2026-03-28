"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const ContactSearch = () => {
  // Dropdown options
  const userOptions = [{ id: 1, name: "Admin" }];
  const dateOptions = [{ id: 1, name: "Today" }];
  const sourceOptions = [{ id: 1, name: "Google" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100">
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input label="Contact Name" type="text" placeholder="" />
          <Input label="Mobile/Phone" type="text" placeholder="" />
          <Input label="Email" type="text" placeholder="" />
          <Input
            label="Assign To"
            type="select"
            placeholder="-Select Users-"
            options={userOptions}
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
          <Input label="Created By" type="text" placeholder="" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <Input
            label="Select Source"
            type="select"
            placeholder="-Select Source-"
            options={sourceOptions}
            labelKey="name"
            valueKey="id"
          />
          <div className="lg:col-span-2 flex flex-col sm:flex-row gap-6 mt-4 lg:mt-6">
            <Input
              type="checkbox"
              label="Show Contact WithOut lead"
              id="withoutLead"
            />
            <Input
              type="checkbox"
              label="Show Contact which May have duplicate lead"
              id="duplicateLead"
            />
          </div>
        </div>
        <div className="mt-2">
          <Button variant="success" type="button">
            <i className="ri-search-line text-xl font-bold"></i>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ContactSearch;
