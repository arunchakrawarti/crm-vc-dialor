"use client";
import Button from '@/components/common/Button';
import OverlayModal from '@/components/common/OverlayModal';
import React from 'react';

const RestoreAllLogsModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      modalClass="max-w-[400px] bg-white rounded-lg shadow-2xl p-8"
    >
      <div className="flex flex-col items-center text-center">
        <div className="w-24 h-24 border-4 border-orange-200 rounded-full flex items-center justify-center mb-6">
          <span className="text-5xl font-light text-orange-400">!</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Are you sure?</h2>
        <p className="text-gray-500 text-lg mb-8">You want restore all lead!</p>
        <div className="flex gap-4 w-full">
          <Button variant='success'
          >
            No, cancel it!
          </Button>
          <Button variant='outline' 
          >
            Yes, restore it!
          </Button>
        </div>
      </div>
    </OverlayModal>
  );
};

export default RestoreAllLogsModal;