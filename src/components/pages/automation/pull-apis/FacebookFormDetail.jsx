"use client";
import React, { useState } from 'react';
import { Plus, Eye, Trash2 } from 'lucide-react';
import Button from '@/components/common/Button';
import BasicTable from '@/components/common/BasicTable';
import RecordStatus from '@/components/common/RecordStatus'; 
import AddFacebookModal from './AddFacebookModal';

const FacebookFormDetail = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const columns = [
    { label: "Facebook Page Name", key: "pageName" },
    { label: "Facebook Form Name", key: "formName" },
    { label: "DateAdded", key: "dateAdded" },
  ];
  const data = [];
  const ActionButtons = ({ row }) => (
    <div className="flex gap-2">
      <button className="p-1 text-blue-500 hover:bg-blue-50 rounded" title="View">
        <Eye size={18} />
      </button>
      <button className="p-1 text-red-500 hover:bg-red-50 rounded" title="Delete">
        <Trash2 size={18} />
      </button>
    </div>
  );

  return (
    <div className="p-4 bg-white rounded-md shadow-sm space-y-4">
    
      <div className="flex justify-end mb-2">
        <Button 
          variant='success' 
          onClick={() => setIsModalOpen(true)}
        >
          <Plus size={24} strokeWidth={3} />
        </Button>
      </div>
      <div className="border border-gray-200 rounded-sm overflow-hidden">
        <BasicTable 
          columns={columns} 
          data={data} 
          actions={[ActionButtons]} 
          pagination={false} 
          wrapperClassName="rounded-none border-none shadow-none"
        />
      </div>
      <RecordStatus 
        currentPage={1}
        totalItems={0}
        itemsPerPage={10}
        label="Records"
        showDropdown={false}
        showStatus={true}   
        showNumbers={true}  
      />
      <AddFacebookModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default FacebookFormDetail;