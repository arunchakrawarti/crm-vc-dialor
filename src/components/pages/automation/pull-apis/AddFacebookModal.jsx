"use client";
import React from "react";
import { Send } from "lucide-react";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";

const AddFacebookModal = ({ isOpen, onClose, onAdd }) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      modalClass="max-w-[650px] bg-white rounded-lg shadow-2xl p-0"
    >
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-gray-100">
        <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
          Add Facebook Form Name
        </h2>
      </div>

      {/* Body */}
      <div className="p-6 md:p-8 space-y-6">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Page Name */}
          <Input
            label="Page Name"
            type="select"
            options={["Page 1", "Page 2", "Page 3"]}
          />

          {/* Form Name */}
          <Input
            label="Form Name"
            placeholder="Enter form name"
          />

        </div>

        {/* Button */}
        <div className="flex justify-end pt-4">
          <Button onClick={onAdd} variant="success">
            ADD FORM <Send size={20} className="-rotate-45" />
          </Button>
        </div>

      </div>
    </OverlayModal>
  );
};

export default AddFacebookModal;