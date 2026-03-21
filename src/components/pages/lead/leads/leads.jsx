"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import { Plus, Upload } from "lucide-react";
import RecordStatus from "@/components/common/RecordStatus";
import AddLeadModal from "./AddLeadModal";
import AssignLeadModal from "./AssignLeadModal";

const Leads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false); // ✅ NEW

  return (
    <div className="p-6 bg-white">

      {/* 🔹 TOP ACTION BAR */}
      <div className="flex flex-wrap items-center gap-3 mb-4">
        
        <button className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm flex items-center gap-2 text-red-600 font-medium">
          WATCH VIDEO
          <span className="text-red-600 text-lg">▶</span>
        </button>

        {/* ➕ ADD LEAD */}
        <Button
          onClick={() => setIsModalOpen(true)}
          className="bg-[#1e88e5] text-white px-4 py-2 rounded shadow"
        >
          <Plus size={18} />
        </Button>

        <Button className="bg-[#1e88e5] text-white px-4 py-2 rounded shadow">
          TRANSFER LEAD STATUS
        </Button>

        {/* ✅ ASSIGN BUTTON (OPEN ASSIGN MODAL) */}
        <Button
          onClick={() => setIsAssignOpen(true)}
          className="bg-[#1e88e5] text-white px-4 py-2 rounded shadow"
        >
          ASSIGN
        </Button>

        <Button className="bg-[#1e88e5] text-white px-4 py-2 rounded shadow">
          DELETE CHECKED LEADS
        </Button>

        <Button className="bg-[#1e88e5] text-white px-4 py-2 rounded shadow">
          DELETE ALL 0 LEADS
        </Button>

        <Button className="bg-[#1e88e5] text-white px-4 py-2 rounded shadow">
          <Upload size={18} />
        </Button>
      </div>

      <hr className="mb-6 border-gray-300" />

      {/* 🔹 EMPTY STATE */}
      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-blue-500 text-6xl mb-4">🔍</div>
        <p className="text-gray-600 text-lg">
          You have no records found.
        </p>
      </div>

      {/* 🔹 RECORD STATUS */}
      <RecordStatus 
        currentPage={1} 
        showNumbers={true} 
        showDropdown={true}
        label="Users"
      />

      {/* ✅ ADD LEAD MODAL */}
      <AddLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />

      {/* ✅ ASSIGN LEAD MODAL */}
      <AssignLeadModal
        isOpen={isAssignOpen}
        onClose={() => setIsAssignOpen(false)}
      />

    </div>
  );
};

export default Leads;