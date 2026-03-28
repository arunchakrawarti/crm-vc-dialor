"use client";
import React from "react";
import { Monitor } from "lucide-react";
import RecordStatus from "@/components/common/RecordStatus";

const IvrLeads = () => {
  return (
    <div className="bg-white  rounded-md shadow-sm min-h-[450px] flex flex-col">
      <div className="border-b border-blue-800 py-3 px-4">
        <h1 className="text-center text-blue-600 font-medium text-lg">
          IVR Leads
        </h1>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <div className="mb-6 text-blue-600">
          <Monitor size={100} strokeWidth={1} />
        </div>

        <p className="text-gray-500 text-xl">You have no records found.</p>
      </div>
      <div className="p-2">
        <RecordStatus totalItems={0} label="Leads" showNumbers={false} />
      </div>
    </div>
  );
};

export default IvrLeads;
