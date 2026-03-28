"use client";
import React, { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import RecordStatus from "@/components/common/RecordStatus";
import NewSmtpModal from "./NewSmtpModal";

const AddnewSmtp = () => {
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { label: "Full Name", key: "fullName" },
    { label: "SMTP Email", key: "smtpEmail" },
    { label: "Date Added", key: "dateAdded" },
    { label: "Allow to use others", key: "allowOthers" },
    { label: "Date Modified", key: "dateModified" },
  ];

  const data = [];

  return (
    <div className="p-6 bg-white min-h-screen">
      <div className="flex justify-end mb-4">
        <Button variant="success" onClick={() => setIsOpen(true)}>
          New SMTP
        </Button>
      </div>
      <NewSmtpModal isOpen={isOpen} onClose={() => setIsOpen(false)} />

      <div className="border border-gray-200 rounded-sm">
        <BasicTable
          columns={columns}
          data={data}
          actions={[]}
          wrapperClassName="border-none shadow-none rounded-none"
          pagination={true}
        />

        <div className="bg-white border-t border-gray-200">
          <RecordStatus
            currentPage={1}
            totalItems={0}
            itemsPerPage={10}
            label="Records"
            showDropdown={false}
          />
        </div>
      </div>
    </div>
  );
};

export default AddnewSmtp;
