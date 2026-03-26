"use client";
import React, { useState } from 'react';
import Button from '@/components/common/Button';
import { Plus, Eye, Edit, Trash2, Settings } from 'lucide-react';
import BasicTable from '@/components/common/BasicTable';

const FacebookIntegration = () => {
  const columns = [
    { label: "PageName", key: "pageName" },
    { label: "Assigned User", key: "assignedUser" },
    { label: "Source", key: "source" },
    { label: "Branch", key: "branch" },
    { label: "Date Added", key: "dateAdded" },
    { label: "Date Modified", key: "dateModified" },
  ];

  const data = [
    {
      pageName: "My Business Page",
      assignedUser: "Abhishek Jaiswal",
      source: "Facebook Ads",
      branch: "Main Branch",
      dateAdded: "25 Mar 2026",
      dateModified: "26 Mar 2026",
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
    <div className="p-4 bg-white rounded-md shadow-sm space-y-6">
    
      <div className="flex flex-wrap gap-3 items-start">
        <Button href="/automation/pull-apis/error-log" variant='success'>
          Error Logs
        </Button>
        <Button href="/automation/pull-apis/facebookform-details" variant='success'>
          Facebook Form Detail
        </Button>
        <Button href="/automation/pull-apis/facebook-fixel-integration"
        variant='success'>
          Facebook Pixel Integration
        </Button>
    
        <div className="ml-auto">
          <Button variant='success'>
            Add Facebook Integration
          </Button>
        </div>
      </div>
      <div className="border border-gray-100 rounded-md overflow-hidden">
        <BasicTable 
          columns={columns} 
          data={data} 
          actions={[ActionButtons]} 
          pagination={true}
          pageSize={10}
          total={data.length}
          wrapperClassName="rounded-none border-none shadow-none"
        />
      </div>

    </div>
  );
};

export default FacebookIntegration;