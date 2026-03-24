"use client";
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import RecordStatus from '@/components/common/RecordStatus';
import React, { useState } from 'react';import BranchesModal from './BranchesModal';
;

const Branches = () => {
  const [isOpen, setIsOpen] = useState(false);
  const columns = [
    { label: "Sr No.", key: "srNo" },
    { label: "Name", key: "name" },
    { label: "City", key: "city" },
    { label: "State", key: "state" },
    { label: "Address", key: "address" },
    { 
      label: "Create Date", 
      key: "date",
      render: (value) => (
        <div className="leading-tight text-sm text-gray-600">
          {value.day}<br/>{value.year}
        </div>
      )
    },
    { label: "GST Number", key: "gst" },
  ];

  const data = [
    {
      srNo: 1,
      name: "Default",
      city: "Jaipur",
      state: "Rajasthan",
      address: "moti nagar delhi",
      date: { day: "20 Mar", year: "2026" },
      gst: "",
    }
  ];

  const actions = [
    ({ row }) => (
      <Button 
        variant="secondary" 
        className="!w-8 !h-8 !p-0 rounded-full shadow-md bg-[#1e88e5] border-none"
        onClick={() => console.log("Edit", row)}
      >
        <i className="ri-pencil-fill text-xs text-white"></i>
      </Button>
    ),
    ({ row }) => (
      <Button 
        variant="redbtn" 
        className="!w-8 !h-8 !p-0 rounded-full shadow-md bg-[#ef5350] border-none"
        onClick={() => console.log("Delete", row)}
      >
        <i className="ri-delete-bin-fill text-xs text-white"></i>
      </Button>
    ),
    ({ row }) => (
      <Button 
        variant="secondary" 
        className="!w-8 !h-8 !p-0 rounded-full shadow-md bg-[#1e88e5] border-none"
        onClick={() => console.log("Bank", row)}
      >
        <i className="ri-bank-fill text-xs text-white"></i>
      </Button>
    ),
  ];

  return (
    <div className="p-4 bg-white rounded-lg shadow-sm border border-gray-100 font-inter">
      
      <div className="flex justify-between items-center mb-6">
        <Button 
          variant="outline" 
          className="border-gray-200 px-6 py-2 shadow-sm text-red-600 font-bold uppercase tracking-wider text-xs bg-white"
        >
          Watch Video
          <i className="ri-youtube-fill text-red-600 text-lg ml-1"></i>
        </Button>

        <Button 
  variant="success"
  onClick={() => setIsOpen(true)}
>
  <i className="ri-add-line"></i>
</Button>
      </div>

      <BasicTable 
        columns={columns} 
        data={data} 
        actions={actions}
        wrapperClassName="rounded-sm border-gray-200"
      />

      <div className="mt-2">
        <RecordStatus 
          totalItems={data.length} 
          currentPage={1} 
          itemsPerPage={10} 
          label="Branch"
          onPageChange={(page) => console.log(page)}
        />
      </div>
<BranchesModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
/>
    </div>
  );
};

export default Branches;