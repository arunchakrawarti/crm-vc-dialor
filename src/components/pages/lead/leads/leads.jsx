"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import { Plus, Upload } from "lucide-react";
import RecordStatus from "@/components/common/RecordStatus";
import AddLeadModal from "./AddLeadModal";
import AssignLeadModal from "./AssignLeadModal";
import TransferLeadModal from "./TransferLeadModal";
import DeletecheckedModal from "./DeletecheckedModal";

const Leads = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAssignOpen, setIsAssignOpen] = useState(false); 
  const [transfer, setTransfer] = useState(false)

  const [deletechecked,setDeletechecked] = useState(false)
  return (
    <div className="p-6 bg-white">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        
        <button className="bg-white border border-gray-200 px-4 py-2 rounded shadow-sm flex items-center gap-2 text-red-600 font-medium">
          WATCH VIDEO
          <span className="text-red-600 text-lg">▶</span>
        </button>
        <Button
          onClick={() => setIsModalOpen(true)}
          variant="success"
        >
          <Plus size={18} />
        </Button>

        <Button onClick={()=>setTransfer(true)} variant="success">
          TRANSFER LEAD STATUS
        </Button>
        <Button
          onClick={() => setIsAssignOpen(true)}
          variant="success"
        >
          ASSIGN
        </Button>

        <Button onClick={()=>setDeletechecked(true)} variant="success">
          DELETE CHECKED LEADS
        </Button>

        <Button variant="success">
          DELETE ALL 0 LEADS
        </Button>

        <Button variant="success">
          <Upload size={18} />
        </Button>
      </div>

      <hr className="mb-6 border-gray-300" />

      <div className="flex flex-col items-center justify-center py-16">
        <div className="text-blue-500 text-6xl mb-4">🔍</div>
        <p className="text-gray-600 text-lg">
          You have no records found.
        </p>
      </div>
      <RecordStatus 
        currentPage={1} 
        showNumbers={true} 
        showDropdown={true}
        label="Users"
      />
      <AddLeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
      <AssignLeadModal
        isOpen={isAssignOpen}
        onClose={() => setIsAssignOpen(false)}
      />
      <TransferLeadModal
      isOpen={transfer}
      onClose={()=>setTransfer(false)}
      />
      <DeletecheckedModal
      isOpen={deletechecked}
      onClose={()=>setDeletechecked(false)}
      />

    </div>
  );
};

export default Leads;