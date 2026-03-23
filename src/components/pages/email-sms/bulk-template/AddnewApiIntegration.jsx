"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";


const AddnewApiIntegration = () => {
  return (
    <div className="w-full bg-white p-6 rounded shadow-sm border border-gray-100">
      <form className="space-y-6">
    
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/4">
            <Input
              label="API Type"
              type="select"
              placeholder="--Select SMS Type--"
              options={["Transactional", "Promotional", "OTP"]}
            />
          </div>
          <div className="w-full md:w-3/4">
            <Input
              label="URL"
              placeholder="Enter API URL"
              defaultValue="http://api.textlocal.in/send/"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="APIKey"
            placeholder="Enter API Key"
          />
          <Input
            label="SenderId"
            placeholder="Enter Sender ID"
          />
        </div>
        <div className="flex justify-end pt-2">
          <Button variant="success"
            type="submit"
          >
            Save
          </Button>
        </div>

      </form>
    </div>
  );
};

export default AddnewApiIntegration;