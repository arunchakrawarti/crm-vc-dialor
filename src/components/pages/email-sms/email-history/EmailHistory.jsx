"use client";
import Input from "@/components/common/Input";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";

const EmailHistory = () => {
  const tableData = [];

  const columns = [
    { label: "Sender", key: "sender" },
    { label: "Receiver", key: "receiver" },
    { label: "CC", key: "cc" },
    { label: "Subject", key: "subject" },
  ];

  return (
    <div className="bg-gray-100 space-y-4">
      <div className="bg-white p-4 shadow-sm rounded-sm flex items-center gap-2">
        <div className="w-64">
          <Input placeholder="Enter Email ID" className="!h-[38px]" />
        </div>

        <Button variant="success">
          <i className="ri-search-line font-bold"></i>
        </Button>
      </div>
      <BasicTable
        columns={columns}
        data={tableData}
        actions={[]}
        pagination={true}
        total={0}
        pageSize={10}
        wrapperClassName="rounded-sm shadow-sm border border-gray-200"
      />
      <div className="bg-white p-4 shadow-sm rounded-sm">
        <div className="w-20">
          <Input
            type="select"
            options={["10", "25", "50", "100"]}
            defaultValue="10"
            className="!h-[35px] !py-0"
          />
        </div>
      </div>
    </div>
  );
};

export default EmailHistory;
