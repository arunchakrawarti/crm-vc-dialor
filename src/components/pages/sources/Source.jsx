"use client";
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import RecordStatus from '@/components/common/RecordStatus';
import React, { useState } from 'react';
import AddSourceModal from './AddSourceModal';

const Source = () => {
    const [isOpen, setIsOpen] = useState(false);
  const columns = [
    { label: "Sr No.", key: "srNo" },
    { label: "Source Name", key: "sourceName" },
    { label: "Date", key: "date" },
  ];

  const data = [
    { srNo: 1, sourceName: "Reference", date: "20 Mar 2026" },
    { srNo: 2, sourceName: "Website", date: "20 Mar 2026" },
    { srNo: 3, sourceName: "Newspaper", date: "20 Mar 2026" },
    { srNo: 4, sourceName: "Internet", date: "20 Mar 2026" },
  ];

  const actions = [
    ({ row }) => (
      <Button 
        variant="success" 
      >
        <i className="ri-pencil-fill text-xs text-white"></i>
      </Button>
    ),
    ({ row }) => (
      <Button 
        variant="redbtn" 
      >
        <i className="ri-delete-bin-fill text-xs text-white"></i>
      </Button>
    ),
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 font-inter">
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-0 w-full max-w-md">
          <div className="flex-1">
            <Input 
              placeholder="Enter Source Name" 
              className="rounded-r-none border-r-0 h-10"
            />
          </div>
          <Button variant='success'>
            <i className="ri-search-line text-white text-lg"></i>
          </Button>
        </div>

        <div className="flex items-center gap-4">
         <Button 
  variant="success"
  onClick={() => setIsOpen(true)}
>
  <i className="ri-add-line"></i>
</Button>

          <Button 
            variant="redbtn" 
            className="border-gray-200 px-4 py-2 shadow-md text-red-600 font-bold uppercase tracking-wider text-xs bg-white"
          >
            Watch Video
            <i className="ri-youtube-fill text-red-600 text-lg ml-1"></i>
          </Button>
        </div>
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
          label="Source"
          onPageChange={(page) => console.log(page)}
        />
      </div>
<AddSourceModal 
  isOpen={isOpen} 
  onClose={() => setIsOpen(false)} 
/>
    </div>
  );
};

export default Source;