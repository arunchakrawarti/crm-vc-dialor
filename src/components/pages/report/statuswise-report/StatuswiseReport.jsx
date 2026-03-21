"use client";
import React from "react";
import Input from "@/components/common/Input";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import { Search } from "lucide-react";
import Statuschart from "./Statuschart";

const StatuswiseReport = () => {

  // ✅ Columns
  const columns = [
    { label: "UserName", key: "user" },
    { label: "TotalLeads", key: "total" },
    { label: "Interested", key: "interested" },
    { label: "Call Back", key: "callback" },
    { label: "No Requirement", key: "noReq" },
    { label: "Follow Up", key: "followUp" },
  ];
  const data = [
    {
      user: "Abhishek Jaiswal",
      total: 0,
      interested: 0,
      callback: 0,
      noReq: 0,
      followUp: 0,
    },
  ];

  return (
    <div className=" bg-[#f4f6f9]">
      <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm mb-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          
          <Input
            type="select"
            label="Users"
            placeholder="--Select Users--"
            options={["Arun chakrawarti", "User 2"]}
          />

          <Input
            type="select"
            label="Check Multiple Status Wise"
            options={["No", "Yes"]}
          />

          <Input
            type="select"
            label="Select Lead Type"
            options={["Show all Leads", "Fresh", "Interested"]}
          />

          <Input
            type="select"
            label="Search By Date"
            placeholder="--Select Date--"
            options={["Today", "Yesterday", "Last 7 Days"]}
          />
        </div>
        <div className="mt-6">
          <Button className="bg-[#1e88e5] hover:bg-[#1565c0] text-white p-3 rounded shadow-md">
            <Search size={20} />
          </Button>
        </div>
      </div>
      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="rounded-lg overflow-hidden"
      />
      <Statuschart/>
    </div>
  );
};

export default StatuswiseReport;