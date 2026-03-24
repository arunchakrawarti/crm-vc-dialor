"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import RecordStatus from "@/components/common/RecordStatus";
import React from "react";


const UserAttendence = () => {
  const columns = [
    { label: "Sr No.", key: "sr" },
    { label: "User Name", key: "name" },
    { label: "Date/Time", key: "date" },
    { label: "Location", key: "location" },
    { label: "Battery %", key: "battery" },
    { label: "Status", key: "status" },
    {
      label: "Image",
      key: "image",
      render: () => (
        <img
          src="https://via.placeholder.com/40"
          className="w-10 h-10 rounded"
        />
      ),
    },
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

        <Input
          type="select"
          label="Select Status"
          placeholder="-Select Status-"
          options={["Online", "Offline"]}
        />
        <Button className="h-12" variant="success">
          <i className="ri-search-line text-xl"></i>
        </Button>
      </div>
      <div className="relative">
        <div className="flex justify-end mb-2">
          <Button variant="success">
            DOWNLOAD
          </Button>
        </div>

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

export default UserAttendence;