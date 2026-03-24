"use client";
import React from 'react';
import OverlayModal from '@/components/common/OverlayModal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const BranchesModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
        <div className="flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-2xl overflow-hidden font-inter">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Add Branch</h2>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            
            <Input 
              label="Branch Name" 
              placeholder="Enter branch name" 
            />
            
            <Input 
              label="GST Number" 
              placeholder="Enter GST number" 
            />

            <div className="md:col-span-2">
              <Input 
                label="Address" 
                placeholder="Enter Address" 
                className="h-[50px]"
              />
            </div>

            <Input 
              label="Select Country" 
              type="select" 
              placeholder="-Select Country-" 
              options={['India', 'USA', 'UK']} 
            />

            <Input 
              label="Select State" 
              type="select" 
              placeholder="-Select State-" 
              options={['Rajasthan', 'Delhi', 'Maharashtra']} 
            />

            <Input 
              label="Select City" 
              type="select" 
              placeholder="-Select City-" 
              options={['Jaipur', 'Mumbai', 'New Delhi']}
            />

          </div>

          <div className="mt-8 flex justify-end">
            <Button variant="success" >
              <span className="font-bold tracking-widest text-sm">SUBMIT</span>
              <i className="ri-send-plane-fill ri-lg ml-1"></i>
            </Button>
          </div>
        </div>

      </div>
    </div>
    </OverlayModal>
  );
};

export default BranchesModal;