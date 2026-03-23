"use client";
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import OverlayModal from '@/components/common/OverlayModal';
import React from 'react';

const SendBulkSMSModal = ({ isOpen, onClose }) => {
  return (
   <OverlayModal isOpen={isOpen} onClose={onClose}>
     <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      
      <div className="flex justify-between items-center px-6 py-3 border-b border-gray-100">
        <h2 className="text-xl font-medium text-gray-800">
          Send Bulk SMS And Email
        </h2>
      </div>

      <div className="p-6 space-y-5 overflow-y-auto h-120">

        {/* Select User */}
        <div className="w-full md:w-1/2">
          <Input
            label="Select User"
            type="select"
            placeholder="-Select User-"
            options={[]} 
          />
        </div>

        {/* Filters */}
        <div className="grid grid-cols-1  md:grid-cols-2  gap-4">
          <Input label="Select Branch" type="select" placeholder="-Select Branch-" />
          <Input label="Select Status" type="select" placeholder="-Select Status-" />
          <Input label="Select Source" type="select" placeholder="-Select Source-" />
          <Input label="Lead Priority" type="select" placeholder="-Select Priority-" />
        </div>

        {/* Name & Selected Lead */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Name *"
            placeholder=""
          />
          <Input
            label="Selected Lead"
            defaultValue="0"
          />
        </div>

        {/* Type */}
        <div className="md:w-3/5">
          <Input
            label="Select Type"
            type="select"
            options={["SMS", "Email"]}
          />
        </div>

        {/* Template */}
        <div className="md:w-3/5">
          <Input
            label="Select Template"
            type="select"
          />
        </div>

        {/* Button */}
        <div className="flex justify-end pt-4">
          <Button variant='success'>
            SEND 
            <i className="ri-send-plane-fill text-lg"></i>
          </Button>
        </div>

      </div>
    </div>
   </OverlayModal>
  );
}

export default SendBulkSMSModal;