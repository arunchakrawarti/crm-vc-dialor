"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";
import RecordStatus from "@/components/common/RecordStatus";

const UserExpenses = () => {
  const columns = [
    { label: "Status", key: "status" },
    { label: "User", key: "user" },
    { label: "Amount", key: "amount" },
    { label: "Description", key: "desc" },
    { label: "Submission Date", key: "submitDate" },
    { label: "Response Date", key: "responseDate" },
    { label: "Document", key: "doc" },
    { label: "Update Status", key: "update" },
    { label: "Action", key: "action" },
  ];

  const data = [];

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-300 rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <i className="ri-filter-3-line text-blue-600 text-xl"></i>
          <h2 className="text-lg font-semibold">Filters & Controls</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input
            type="select"
            placeholder="-Select Users-"
            options={["User 1", "User 2"]}
          />

          <Input
            type="select"
            placeholder="Select Status"
            options={["Approved", "Rejected"]}
          />

          <Input type="date" placeholder="Date From" />
          <Input type="date" placeholder="Date To" />
        </div>
        <div className="flex flex-wrap gap-3 mt-4">
          <Button variant="success" className="flex items-center gap-2">
            <i className="ri-check-line"></i> Apply Filters
          </Button>

          <Button variant="success">ADD +</Button>
        </div>
      </div>
      <div className="bg-white rounded-xl">
        <div className="bg-white rounded-xl p-4 space-y-2">
          <p>Total Expenses - 0</p>
          <p>Approved Expenses - 0</p>
          <p>Reject Expenses - 0</p>
          <p>In Process Expenses - 0</p>
        </div>
        <div className="bg-white border border-gray-300 rounded-xl relative">
          <div className="absolute right-0 top-0">
            <Button className="bg-blue-600 text-white p-3 rounded">
              <i className="ri-download-cloud-2-line"></i>
            </Button>
          </div>

          <div className="mt-10">
            <BasicTable columns={columns} data={data} pagination={false} />
          </div>
        </div>
        <RecordStatus
          currentPage={1}
          totalItems={0}
          itemsPerPage={10}
          label="Expenses"
        />
      </div>
    </div>
  );
};

export default UserExpenses;
