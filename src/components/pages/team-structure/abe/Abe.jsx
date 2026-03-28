"use client";
import React, { useState } from "react";
import BasicTable from "@/components/common/BasicTable";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import {
  Search,
  Plus,
  ChevronsLeft,
  ChevronsRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import AddAdminPopup from "../admins/AddAdminPopup";
import RecordStatus from "@/components/common/RecordStatus";
const Abe = () => {
  const [openModal, setOpenModal] = useState(false);

  const columns = [
    { label: "Name", key: "name" },
    { label: "Email", key: "email" },
    { label: "Phone", key: "phone" },
    { label: "ABM", key: "abm" },
    { label: "Assign", key: "assign" },
    { label: "Date", key: "date" },
    { label: "Actions", key: "actions" },
  ];

  const data = [];

  return (
    <div className="p-4 sm:p-6 bg-white border border-gray-200 rounded shadow-sm mt-6 sm:mt-10 font-sans text-gray-800">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5 border-b pb-4">
        {/* Search */}
        <div className="flex w-full sm:w-auto">
          <div className="w-full sm:w-48">
            <Input
              type="text"
              placeholder="Search..."
              className="rounded-r-none border-r-0 focus:ring-0 h-10 border-gray-300 w-full"
            />
          </div>
          <Button variant="success" className="h-10">
            <Search size={16} strokeWidth={3} />
          </Button>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 sm:gap-3 w-full sm:w-auto justify-end">
          <Button
            variant="outline"
            className="w-full sm:w-auto text-xs sm:text-sm"
          >
            WATCH VIDEO
          </Button>
          <Button
            variant="success"
            onClick={() => setOpenModal(true)}
            className="flex items-center justify-center"
          >
            <Plus size={20} strokeWidth={3} />
          </Button>
        </div>
      </div>

      {/* Table */}
      <div className="border border-gray-200 rounded-sm overflow-x-auto">
        <BasicTable columns={columns} data={data} />
      </div>

      <RecordStatus
        currentPage={1}
        showNumbers={true}
        showDropdown={true}
        label="Users"
      />
      <AddAdminPopup isOpen={openModal} onClose={() => setOpenModal(false)} />
    </div>
  );
};

export default Abe;
