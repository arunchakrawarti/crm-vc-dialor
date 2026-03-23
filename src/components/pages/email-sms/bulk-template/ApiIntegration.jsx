"use client";
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import React from 'react';

const ApiIntegration = () => {
  const columns = [
    { label: "Url", key: "url" },
    { label: "SenderId", key: "senderid" },
    { label: "APIKey", key: "api_key" },
    { label: "APIType", key: "api_type" },
  ];

  const tableData = [];
  return (
    <div className="">
      <div className="bg-white rounded shadow-sm border border-gray-200">
        
        <div className="flex justify-end items-center gap-3 p-4">
        
          <Button href="/email-sms/bulk-template/api-integration/add-new-sms" variant='bluebtn'>
            ADD NEW SMS API
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
    </div>
  );
}

export default ApiIntegration;