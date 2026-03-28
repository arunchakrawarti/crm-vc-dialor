"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import OverlayModal from "@/components/common/OverlayModal";
import React from "react";

const NewTemplatePopup = ({ isOpen, onClose }) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      modalClass="bg-white rounded-lg shadow-2xl overflow-hidden"
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-100">
        <h2 className="text-2xl font-semibold text-gray-800">Add Template</h2>
      </div>
      <div className="p-6 flex flex-col gap-6">
        <div className="w-full md:w-3/4">
          <Input
            type="select"
            placeholder="Select Template"
            options={["Email Template", "SMS Template", "WhatsApp Template"]}
            className="border-b-2 border-gray-300 focus:border-blue-500 rounded-none px-0"
          />
        </div>

        <div className="w-full md:w-1/2">
          <Input
            label="Template Name"
            placeholder="Enter template name"
            className="border border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="p-4 bg-gray-50 flex justify-end gap-3">
        <Button onClick={onClose} variant="primary">
          Cancel
        </Button>
        <Button variant="success">Save Template</Button>
      </div>
    </OverlayModal>
  );
};

export default NewTemplatePopup;
