"use client";
import React from 'react';
import OverlayModal from '@/components/common/OverlayModal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const AssignContactModal = ({ isOpen, onClose }) => {

  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
        <div className="flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-2xl overflow-hidden font-inter">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Assign Contact</h2>
        </div>
        <div className="p-8">
          <div className="flex flex-col md:flex-row items-end gap-6">
        
            <div className="flex-1 w-full">
              <Input 
                label="Name" 
                type="select"
                placeholder="-Select Users-" 
                options={['User 1', 'User 2', 'User 3']}
              />
            </div>
            <div className="pb-1">
              <Button 
                variant="success">
                <span className="font-bold tracking-widest text-sm uppercase">Submit</span>
                <i className="ri-send-plane-fill ri-lg ml-2"></i>
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
    </OverlayModal>
  );
};

export default AssignContactModal;