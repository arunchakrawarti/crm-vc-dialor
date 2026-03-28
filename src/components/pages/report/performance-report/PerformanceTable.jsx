"use client";
import React from "react";
import BasicTable from "@/components/common/BasicTable";

const PerformanceTable = () => {
  const columns = [
    { label: "User Name", key: "userName" },
    { label: "Total Calls", key: "totalCalls" },
    { label: "Connected Calls", key: "connectedCalls" },
    { label: "Not Connected Calls", key: "notConnectedCalls" },
    { label: "Total TalkTime", key: "totalTalkTime" },
    { label: "First Call", key: "firstCall" },
    { label: "Last Call", key: "lastCall" },
  ];
  const data = [];

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm overflow-hidden mt-6">
      <BasicTable
        columns={columns}
        data={data}
        pagination={true}
        tableClassName="border-collapse"
        headerClassName="bg-white text-gray-800 font-bold border-b"
      />
    </div>
  );
};

export default PerformanceTable;
