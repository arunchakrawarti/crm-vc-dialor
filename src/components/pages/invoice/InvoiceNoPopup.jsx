"use client";
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import OverlayModal from '@/components/common/OverlayModal';
import React from 'react'


const InvoiceNoPopup = ({ isOpen, onClose }) => {
  return (
    <OverlayModal 
      isOpen={isOpen} 
      onClose={onClose}
      modalClass="bg-white rounded-lg shadow-xl p-6"
    >
      <div className="flex flex-col gap-4">
        {/* Title */}
        <h2 className="text-lg font-medium text-gray-800 tracking-tight">
          Invoice No Code
        </h2>

        {/* Input and Submit Row */}
        <div className="flex items-end gap-3">
          <div className="flex-1">
            <Input 
              placeholder="Enter Invoice No Code"
              className="w-full"
            />
          </div>
          
          <Button 
            className="bg-[#00a8e8] hover:bg-[#0096d1] text-white px-8 py-2.5 rounded shadow-sm font-semibold uppercase text-sm"
          >
            Submit
          </Button>
        </div>
      </div>
    </OverlayModal>
  )
}

export default InvoiceNoPopup