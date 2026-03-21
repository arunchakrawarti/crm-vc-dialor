"use client";
import React from "react";
import { CloudDownload, Send } from "lucide-react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const Importantlead = () => {
  return (
    <div className="p-6 bg-white space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end border-b border-gray-100 pb-8">
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">
            Download Sample Format
          </label>
          <Button variant="success">
            <CloudDownload size={24} />
          </Button>
        </div>
        <div>
          <Input
            label="Select CSV File"
            type="file"
          />
        </div>
        <div>
          <Input
            label="Select From Previously Template"
            type="select"
            placeholder="--Select--"
            options={[]}
          />
        </div>
        <div>
          <Button variant="success">
            IMPORT <Send size={18} fill="currentColor" />
          </Button>
        </div>

      </div>

    </div>
  );
};

export default Importantlead;