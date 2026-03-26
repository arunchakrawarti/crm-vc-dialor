"use client";
import React, { useState } from 'react';
import { Plus, Eye, Edit, Trash2 } from 'lucide-react';
import Button from '@/components/common/Button';
import BasicTable from '@/components/common/BasicTable';
import AddgoogleinfoModal from './AddgoogleinfoModal';

const GoogleIntegration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const columns = [
    { label: "Email", key: "email" },
    { label: "Google Key", key: "googleKey" },
    { label: "Assigned User", key: "assignedUser" },
    { label: "Source", key: "source" },
    { label: "Branch", key: "branch" },
    { label: "Date Added", key: "dateAdded" },
  ];

  const data = [
    {
      email: "test@example.com",
      googleKey: "AIzaSyB...",
      assignedUser: "Abhishek Jaiswal",
      source: "Facebook",
      branch: "Main Branch",
      dateAdded: "26 Mar 2026",
    },
  ];

  const ActionButtons = ({ row }) => (
    <div className="flex gap-2">
      <button className="p-1 text-blue-500 hover:bg-blue-50 rounded" title="View"><Eye size={18} /></button>
      <button className="p-1 text-green-500 hover:bg-green-50 rounded" title="Edit"><Edit size={18} /></button>
      <button className="p-1 text-red-500 hover:bg-red-50 rounded" title="Delete"><Trash2 size={18} /></button>
    </div>
  );

  return (
    <div className="p-4 bg-white rounded-md shadow-sm">
      <div className="flex justify-end items-center mb-4">
        <Button variant='success' onClick={() => setIsModalOpen(true)}>
          <Plus size={24} strokeWidth={3} />
        </Button>
      </div>

      <BasicTable 
        columns={columns} 
        data={data} 
        actions={[ActionButtons]} 
        pagination={true}
        pageSize={10}
        total={data.length}
        wrapperClassName="rounded-md border-gray-100"
      />
      <AddgoogleinfoModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};

export default GoogleIntegration;