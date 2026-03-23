"use client";
import React from 'react';
import OverlayModal from '@/components/common/OverlayModal';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';

const ApiIntegrationModal = ({isOpen, onClose }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4 border-b border-gray-100">
        <h2 className="text-2xl font-medium text-gray-800">Add Template</h2>
      </div>
      <div className="p-8 space-y-6">
        <div className="max-w-md">
          <Input
            label="Select Template Type"
            type="select"
            placeholder="-Select Template Type-"
            options={["Email", "SMS", "WhatsApp"]}
            className="!rounded-md"
          />
        </div>
        <div className="max-w-md">
          <Input
            label="Template Name"
            placeholder="Enter template name"
            className="!rounded-md"
          />
        </div>
        <div className="flex justify-end pt-4">
          <Button variant='success'
          >
            Add Template 
            <i className="ri-send-plane-fill text-lg rotate-45"></i>
          </Button>
        </div>

      </div>
    </div>
    </OverlayModal>
  );
}

export default ApiIntegrationModal;