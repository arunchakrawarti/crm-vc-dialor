"use client";
import React from "react";
import { Send } from "lucide-react";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddgoogleinfoModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      modalClass="max-w-2xl bg-white rounded-lg shadow-xl"
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-2xl font-normal text-gray-800">
          Add Google Ads Info
        </h2>
      </div>
      <div className="p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <Input
            label="Email"
            type="email"
            placeholder="Email"
          />

          <Input
            label="Google Key"
            placeholder="Enter Google Key"
          />

        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          <Input
            label="Select Assign User"
            type="select"
            options={["User 1", "User 2", "User 3"]}
          />

          <Input
            label="Select Branch"
            type="select"
            options={["Branch 1", "Branch 2"]}
          />

          <Input
            label="Select Source"
            type="select"
            options={["Google Ads", "Facebook", "Website"]}
          />

        </div>
        <div className="flex justify-end pt-4">
          <Button variant="success">
            SUBMIT <Send size={20} className="-rotate-45" />
          </Button>
        </div>

      </div>
    </OverlayModal>
  );
};

export default AddgoogleinfoModal;