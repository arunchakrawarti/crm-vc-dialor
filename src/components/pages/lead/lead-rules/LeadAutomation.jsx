"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";
import RecordStatus from "@/components/common/RecordStatus";

const LeadAutomation = () => {
  const columns = [
    {
      label: "Rule Name",
      key: "ruleName",
    },
    {
      label: "Source",
      key: "source",
    },
    {
      label: "State",
      key: "state",
    },
    {
      label: "City",
      key: "city",
    },
    {
      label: "Facebook Form Name",
      key: "formName",
    },
    {
      label: "Custom Question",
      key: "question",
    },
  ];
  const data = [];

  return (
    <div className="p-6 bg-white min-h-screen space-y-4">
      
      <BasicTable
        columns={columns}
        data={data}
        pagination={false}
        wrapperClassName="rounded-sm shadow-sm"
      />

      <div className="mt-6">
        <RecordStatus
          currentPage={1}
          totalItems={0}
          itemsPerPage={10}
          label="Records"
          showDropdown={false}
          showStatus={true}
          showNumbers={false}
        />
      </div>
    </div>
  );
};

export default LeadAutomation;