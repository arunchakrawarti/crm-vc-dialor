"use client";
import React from "react";
import { Send } from "lucide-react";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddgoogleinfoModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
      <div className="bg-white rounded-lg shadow-xl w-full">
        <div className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b">
          <h2 className="text-lg sm:text-xl md:text-2xl font-medium text-gray-800">
            Add Google Ads Info
          </h2>
        </div>
        <div className="p-4 sm:p-5 md:p-6 space-y-6 overflow-y-auto max-h-[80vh]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input label="Email" type="email" placeholder="Email" />
            <Input label="Google Key" placeholder="Enter Google Key" />
            <div className="hidden lg:block"></div>
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
          <div className="flex justify-center sm:justify-end pt-2 sm:pt-4">
            <Button variant="success" className="w-full sm:w-auto">
              SUBMIT
              <Send size={18} className="ml-2 -rotate-45" />
            </Button>
          </div>
        </div>
      </div>
    </OverlayModal>
  );
};

export default AddgoogleinfoModal;
