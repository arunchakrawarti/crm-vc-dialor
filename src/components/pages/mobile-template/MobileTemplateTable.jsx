"use client";
import React, { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import NewTemplatePopup from "./NewTemplatePopup";

const MobileTemplateTable = () => {
  const [isopen, setIsOpen] = useState(false);
  const data = [
    {
      id: 1,
      document: "Invoice",
      name: "Standard Template",
      body: "Dear Customer, your invoice is...",
      addedDate: "2024-03-26 10:30 AM",
    },
  ];

  const columns = [
    {
      label: "Template Document",
      key: "document",
    },
    {
      label: "Template Name",
      key: "name",
    },
    {
      label: "Template Body",
      key: "body",
      render: (value) => (
        <div className="max-w-[300px] truncate" title={value}>
          {value}
        </div>
      ),
    },
    {
      label: "AddedDateTime",
      key: "addedDate",
    },
  ];

  const actions = [
    ({ row }) => (
      <div className="flex gap-2">
        <button className="text-blue-500 hover:text-blue-700">
          <i className="ri-pencil-line text-lg"></i>
        </button>
        <button className="text-red-500 hover:text-red-700">
          <i className="ri-delete-bin-line text-lg"></i>
        </button>
      </div>
    ),
  ];

  return (
    <div className="w-full bg-white">
      <div className="flex justify-end p-3">
        <Button onClick={() => setIsOpen(true)} variant="success">
          NEW TEMPLATE
        </Button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <BasicTable
          columns={columns}
          data={data}
          actions={actions}
          pagination={true}
          total={data.length}
          pageSize={10}
          wrapperClassName="border-none"
        />
      </div>
      <NewTemplatePopup isOpen={isopen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default MobileTemplateTable;
