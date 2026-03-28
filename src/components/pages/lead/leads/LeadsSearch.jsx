"use client";
import Input from "@/components/common/Input";
import React from "react";

const LeadsSearch = () => {
  // Dummy data for dropdowns
  const userOptions = [{ id: 1, name: "Admin" }];
  const leadOptions = [{ id: 1, name: "Modified Lead" }];
  const statusOptions = [{ id: 1, name: "Select Status" }];
  const priorityOptions = [{ id: 1, name: "Select Priority" }];
  const countryOptions = [{ id: 1, name: "Select Country" }];
  const stateOptions = [{ id: 1, name: "Select State" }];
  const cityOptions = [{ id: 1, name: "Select City" }];
  const conversionOptions = [{ id: 1, name: "-Conversion Status-" }];

  return (
    <div className="w-full bg-white p-6 rounded-sm shadow-sm border border-gray-100 overflow-y-auto h-120">
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input label="Name/Phone/Email" type="text" placeholder="" />
          <Input label="Description" type="text" placeholder="" />
          <Input
            label="Select User"
            type="select"
            placeholder="Select Users"
            options={userOptions}
            labelKey="name"
            valueKey="id"
          />
          <Input
            label="Select Branch"
            type="select"
            placeholder="-Select Branch-"
            options={[]}
          />
          <Input
            label="Select Source"
            type="select"
            placeholder="-Select Source-"
            options={[]}
          />
          <Input label="Reference" type="text" placeholder="Reference" />
        </div>

        {/* ROW 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <Input
            label="Users"
            type="select"
            options={leadOptions}
            labelKey="name"
            valueKey="id"
          />
          <Input type="select" placeholder="-Select Date-" options={[]} />
          <Input
            type="select"
            placeholder="-Select Country-"
            options={countryOptions}
            labelKey="name"
            valueKey="id"
          />
          <Input
            type="select"
            placeholder="-Select State-"
            options={stateOptions}
            labelKey="name"
            valueKey="id"
          />
          <Input
            type="select"
            placeholder="-Select City-"
            options={cityOptions}
            labelKey="name"
            valueKey="id"
          />
          <Input type="text" placeholder="Enter Serial Number" />
        </div>

        {/* ROW 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="hidden lg:block"></div> {/* Space maintainer */}
          <Input
            type="select"
            placeholder="-select priority-"
            options={priorityOptions}
            labelKey="name"
            valueKey="id"
          />
          <Input type="text" placeholder="Select Status" />
          <Input type="text" placeholder="Estimate Budget" />
          <Input type="text" placeholder="Facebook Ad Name" />
          <Input
            type="select"
            options={conversionOptions}
            labelKey="name"
            valueKey="id"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
          <Input type="text" placeholder="Select Question" />
          <div className="lg:col-span-2 flex items-center gap-2">
            <Input type="checkbox" label="My Lead" id="leads_mylead" />
          </div>
          <div className="lg:col-start-4">
            <button
              type="button"
              className="bg-[#2196f3] hover:bg-[#1976d2] text-white h-[45px] w-full lg:w-[150px] rounded-md flex items-center justify-center gap-2 shadow-md uppercase font-bold text-sm transition-all"
            >
              <i className="ri-search-line"></i>
              SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeadsSearch;
