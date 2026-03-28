"use client";
import React from "react";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";
import { X } from "lucide-react";

const CheckLeadPopup = ({ isOpen, onClose }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} showCloseIcon={false}>
      <div className="relative bg-white rounded-lg shadow-lg w-[400px] max-w-[90%] p-8 text-center">
        <Button
          onClick={onClose}
          className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 rounded-full p-3"
        >
          <X size={16} />
        </Button>
        <h2 className="text-xl font-medium text-gray-700 mb-6">
          Please select at least one lead
        </h2>
        <Button onClick={onClose} variant="success">
          OK
        </Button>
      </div>
    </OverlayModal>
  );
};

export default CheckLeadPopup;
