"use client";
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import React, { useState } from 'react';
import ApiIntegrationModal from './ApiIntegrationModal';

const BulkSMS = () => {
  const [isOpen, setIsOpen] = useState(false);
  const columns = [
    { label: "Template Name", key: "template_name" },
    { label: "Subject", key: "subject" },
    { label: "Template Body", key: "template_body" },
  ];

  const tableData = [];
  return (
    <div className="">
      <div className="bg-white rounded shadow-sm border border-gray-200">
        
        <div className="flex justify-end items-center gap-3 p-4">
        
          <Button href="/email-sms/bulk-template/api-integration" variant='bluebtn'>
            SMS API Integration
          </Button>
          <Button 
  variant='success'
  onClick={() => setIsOpen(true)}  
>
  New Template
</Button>
        </div>

        <div className="border-t border-gray-200"></div>
        <div className="p-4">
          <BasicTable 
            columns={columns} 
            data={tableData} 
            pagination={true}     
            total={20}
            pageSize={10}
            wrapperClassName="rounded-none border-gray-100" 
          />
        </div>

      </div>
      <ApiIntegrationModal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
/>
    </div>
  );
}

export default BulkSMS;