"use client";
import RecordStatus from '@/components/common/RecordStatus';
import React from 'react';


const SendRules = () => {
  return (
    <div className=" bg-white  space-y-4 font-sans">
      <div className="w-full border border-gray-200 rounded-sm">
        <div className="flex items-center">
          <div className="bg-[#fcfcfc] px-4 py-2.5 border-r border-gray-200 min-w-[120px]">
            <span className="font-bold text-gray-800 text-base">Rule Name</span>
          </div>
          <div className="flex-1">
            <input 
              type="text" 
              className="w-full px-4 py-2.5 outline-none focus:bg-blue-50/10 transition-colors"
              placeholder=""
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <RecordStatus 
          currentPage={1} 
          totalItems={0} 
          itemsPerPage={10} 
          label="Records"
          showDropdown={false} 
          showStatus={true}
          showNumbers={true} 
        />
      </div>

    </div>
  );
};

export default SendRules;