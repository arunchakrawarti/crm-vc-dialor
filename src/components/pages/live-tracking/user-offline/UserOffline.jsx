"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import RecordStatus from "@/components/common/RecordStatus";
import React from "react";


const UserOffline = () => {
  const columns = [
    { label: "Sr No.", key: "sr" },
    { label: "User Name", key: "name" },
    { label: "Last DateTime", key: "last datetime" },
    { label: "ReStart DateTime", key: "restart-datetime" },
    { label: "Last Address", key: "last-address" },
    { label: "Restart Address", key: "restart-address" },
    { label: "Device Info", key: "divice-info" },
    { label: "Offline Time", key: "offline-time" },
  ];
  const data = [];

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end mb-6">
        
        <Input
          type="select"
          label="Users"
          placeholder="-Select Users-"
          options={["User 1", "User 2"]}
        />

        <Input
          type="select"
          label="Search By Date"
          placeholder="-Select Date-"
          options={["Today", "Yesterday"]}
        />
        <Button className="h-12" variant="success">
          <i className="ri-search-line text-xl"></i>
        </Button>
      </div>
      <div className="relative">

        <BasicTable
          columns={columns}
          data={data}
          pagination={true}
        />
      </div>
      <RecordStatus
        currentPage={1}
        totalItems={0}
        itemsPerPage={10}
        label="TrackingDetails"
      />

    </div>
  );
};

export default UserOffline;