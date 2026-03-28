"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import RecordStatus from "@/components/common/RecordStatus";
import React, { useState } from "react";
import NewContactModal from "./NewContactModal";
import AssignContactModal from "./AssignContactModal";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const columns = [
    {
      label: <input type="checkbox" className="w-4 h-4" />,
      key: "checkbox",
      render: () => <input type="checkbox" className="w-4 h-4" />,
    },
    { label: "S.No.", key: "srNo" },
    { label: "Name", key: "name" },
    { label: "Mobile", key: "mobile" },
    { label: "Email", key: "email" },
    { label: "Added by", key: "addedBy" },
    { label: "Assigned To", key: "assignedTo" },
    { label: "Comment", key: "comment" },
    { label: "Date", key: "date" },
  ];

  const data = [];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 font-inter">
      <div className="flex justify-between items-center mb-6">
        <Button
          variant="outline"
          className="border-gray-200 px-6 py-2 shadow-sm text-red-600 font-bold uppercase tracking-wider text-xs bg-white"
        >
          Watch Video
          <i className="ri-youtube-fill text-red-600 text-lg ml-1"></i>
        </Button>

        <div className="flex gap-1">
          <Button onClick={() => setIsOpen(true)} variant="success">
            New Contact
          </Button>
          <Button onClick={() => setIsModal(true)} variant="success">
            Assign
          </Button>
        </div>
      </div>
      <BasicTable
        columns={columns}
        data={data}
        wrapperClassName="rounded-sm border-gray-200"
      />
      <div className="mt-2">
        <RecordStatus
          totalItems={0}
          currentPage={1}
          itemsPerPage={30}
          label="Contacts"
          onPageChange={(page) => console.log(page)}
        />
      </div>
      <NewContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <AssignContactModal isOpen={isModal} onClose={() => setIsModal(false)} />
    </div>
  );
};

export default Contact;
