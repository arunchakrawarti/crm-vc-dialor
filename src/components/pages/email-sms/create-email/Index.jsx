"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { TextEditor } from "./TextEditor";


const MainCreateEmail = () => {
  return (
    <div className="bg-white p-6 rounded shadow-sm border border-gray-200 w-full">
      <div className="flex justify-end mb-4">
        <Button href="/email-sms/create-email/add-newsmpt" variant="success">
          ADD NEW SMTP
        </Button>
      </div>
      <Input
        type="select"
        placeholder="-Select From Email-"
        options={[]}
      />
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Receiver"
          icon="ri-mail-line"
        />
      </div>
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Cc"
          icon="ri-user-line"
        />
      </div>
      <div className="mt-4">
        <Input
          type="text"
          placeholder="Subject"
          icon="ri-text"
        />
      </div>
      <div className="mt-4 flex items-center gap-3 border-b border-gray-300 pb-3">
        
        <i className="ri-attachment-2 text-gray-400 text-lg"></i>

        <span className="text-gray-400 text-sm flex-1">
          Upload one or more files
        </span>

        <label>
          <input type="file" className="hidden" multiple />
          <div className="bg-[#00AEEF] hover:bg-[#0092c8] text-white px-4 py-2 rounded cursor-pointer shadow">
            FILE
          </div>
        </label>
      </div>
      <p className="text-sm text-gray-600 mt-2">
        File size can't be greater than 5Mb.
      </p>
      <TextEditor/>
    </div>
  );
};

export default MainCreateEmail;