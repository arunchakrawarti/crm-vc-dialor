"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import RecordStatus from "@/components/common/RecordStatus";
import React, { useState } from "react";
import SendBulkSMSModal from "./SendBulkSMSModal";

const BulkSMSEmail = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const columns = [
    { label: "Name", key: "name" },
    { label: "Send Type", key: "send_type" },
    { label: "Template Send Type", key: "template_send_type" },
    { label: "TemplateName", key: "template_name" },
    { label: "Total Message", key: "total_message" },
    { label: "Total Send", key: "total_send" },
    { label: "Total Pending", key: "total_pending" },
    { label: "SendStatus", key: "send_status" },
    { label: "Added By", key: "added_by" },
    { label: "Send By", key: "send_by" },
  ];

  const tableData = [];

  return (
    <div className="bg-gray-50">
      <div className="bg-white rounded shadow-sm border border-gray-200">
        <div className="flex justify-end items-center gap-2 p-4 flex-wrap">
          <Button onClick={() => setIsOpen(true)} variant="success">
            Send Bulk SMS/Email
          </Button>
          <Button
            href="/email-sms/bulk-sms&email-list/bulk-sms-list"
            variant="greenbtn"
          >
            Bulk SMS List
          </Button>
          <Button
            href="/email-sms/bulk-sms&email-list/bulk-email-lists"
            variant="greenbtn"
          >
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
        <SendBulkSMSModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </div>
  );
};

export default BulkSMSEmail;
