"use client";
import React, { useState } from "react"; // useState add kiya
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import InvoiceNoPopup from "./InvoiceNoPopup";

const Invoice = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const data = [];
  const columns = [
    { label: "InvoiceNo", key: "invoiceNo" },
    {
      label: "LeadName Mobile",
      key: "leadName",
      render: (_, row) => (
        <div className="flex flex-col">
          <span className="font-bold">{row.leadName}</span>
          <span className="text-xs text-gray-500">{row.mobile}</span>
        </div>
      ),
    },
    { label: "IssuedDate", key: "issuedDate" },
    { label: "Billing Address", key: "billingAddress" },
    { label: "Shipping Address", key: "shippingAddress" },
    {
      label: "BankName AccountNo",
      key: "bankName",
      render: (_, row) => (
        <div className="flex flex-col">
          <span>{row.bankName}</span>
          <span className="text-xs text-gray-400">{row.accountNo}</span>
        </div>
      ),
    },
    { label: "Date", key: "date" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen p-3 sm:p-4 md:p-6">
      <div className="bg-white p-3 sm:p-4 rounded-xl border border-gray-200 shadow-sm">
        <div className="flex flex-col sm:flex-row justify-between sm:justify-end gap-2 mb-4">
          <Button
            href="/invoice/create-invoice"
            variant="success"
            className="w-full sm:w-auto"
          >
            + Invoice
          </Button>
          <Button
            variant="success"
            className="w-full sm:w-auto"
            onClick={() => setIsPopupOpen(true)}
          >
            + Invoice No Code
          </Button>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          <div className="w-full sm:flex-1 min-w-[180px]">
            <Input placeholder="Lead Name, Mobile, Quote No" />
          </div>

          <div className="w-full sm:w-[150px]">
            <Input type="date" />
          </div>

          <div className="w-full sm:w-[150px]">
            <Input type="date" />
          </div>

          <div className="w-full sm:w-[180px]">
            <Input
              type="select"
              options={["Active Invoice", "Pending", "Cancelled"]}
            />
          </div>

          <div className="w-full sm:w-auto">
            <Button variant="success" className="w-full sm:w-auto h-10 px-4">
              <i className="ri-search-line"></i>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-2 overflow-x-auto">
        <BasicTable
          columns={columns}
          data={data}
          wrapperClassName="rounded-b-xl border-t-0 min-w-[800px]"
          pagination={true}
          total={1}
          pageSize={10}
        />
      </div>
      <InvoiceNoPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </div>
  );
};

export default Invoice;
