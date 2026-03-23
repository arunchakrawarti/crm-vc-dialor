"use client";
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import RecordStatus from '@/components/common/RecordStatus'; 
import React, { useState } from 'react';

const BulkSMSList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  
  const columns = [
    { label: "Lead UserName", key: "lead-username" },
    { label: "Lead MobileNo", key: "lead-mobileno" },
    { label: "DateAdded", key: "date-added" },
    { label: "SMSAPIType", key: "smsapitype" },
    { label: "Branch", key: "branch" },
    { label: "Source", key: "source" },
    { label: "Status", key: "status" },
    { label: "IsSendMessage", key: "is-send-message" }
  ];

  const tableData = []; 
  

  return (
    <div className="bg-gray-50">
      <div className="bg-white rounded shadow-sm border border-gray-200">
        <div className="flex justify-end items-center gap-2 p-4 flex-wrap">
          <Button variant='success'>
            Send Bulk SMS/Email
          </Button>
          <Button variant='greenbtn'>
            Bulk SMS List
          </Button>
          <Button  variant='greenbtn'>
            Bulk Email List
          </Button>
        </div>

        <div className="border-t border-gray-200"></div>
        <div className="p-4">
          <BasicTable 
            columns={columns} 
            data={tableData} 
            pagination={true}
            wrapperClassName="rounded-none border-gray-100" 
          />
        </div>
        <div className="p-4 bg-white border-t border-gray-100">
          <RecordStatus 
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            label="Records"
            showDropdown={true}
            showStatus={true}
            showNumbers={true}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>

      </div>
    </div>
  );
}

export default BulkSMSList;