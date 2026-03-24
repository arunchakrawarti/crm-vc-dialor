"use client";
import React from 'react';
import OverlayModal from '@/components/common/OverlayModal';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';

const AddCategoryModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
        <div className=" flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-2-xl overflow-hidden font-inter">
        
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Add Category</h2>
        </div>

        <div className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-x-8 gap-y-6">
            
            <Input label="Category Name" placeholder="Enter category name" />
            <Input label="Category Code" placeholder="Enter category code" />

          </div>

          <div className="mt-8 flex justify-end">
            <Button variant='success'>
              CREATE CATEGORY
              <i className="ri-send-plane-fill ri-lg"></i>
            </Button>
          </div>
        </div>

      </div>
    </div>
    </OverlayModal>
  );
};

export default AddCategoryModal;