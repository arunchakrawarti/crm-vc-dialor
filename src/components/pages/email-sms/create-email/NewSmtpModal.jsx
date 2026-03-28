"use client";
import React from "react";
import OverlayModal from "@/components/common/OverlayModal";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

const NewSmtpModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal onClose={onClose} isOpen={isOpen} showCloseIcon={false}>
      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-sm border border-gray-200 mt-10">
        <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-4">
          <h2 className="text-xl font-semibold text-gray-800">Add SMTP</h2>
          <button
            onClick={onClose}
            className="text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center hover:bg-red-600"
          >
            ✕
          </button>
        </div>

        <form className="space-y-6 overflow-y-auto h-120">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="SMTP Type"
              type="select"
              options={["Other", "Gmail", "Outlook"]}
              defaultValue="Other"
            />
            <Input label="Host" placeholder="Enter Host" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Port" placeholder="Enter Port" />
            <Input
              label="Security"
              type="select"
              options={["SSL", "TLS", "None"]}
              defaultValue="SSL"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input label="Full Name" placeholder="Enter Full Name" />
            <Input label="Email" type="email" placeholder="Enter Email" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Password"
              type="password"
              placeholder="Enter Password"
            />
            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>
          <div className="space-y-3 pt-2">
            <Input
              type="checkbox"
              id="tls-ssl"
              label="If you are selected TLS / STARTTLS, Do you want to use SSL."
            />

            <Input
              type="checkbox"
              id="username-auth"
              label="Allow To Use UserName for Authenticate"
            />

            <Input
              type="checkbox"
              id="allow-others"
              label="Allow Others To Use"
            />
          </div>
          <div className="flex justify-between items-center pt-6">
            <Button type="button" variant="success">
              <i className="ri-send-plane-fill"></i> Test SMTP
            </Button>

            <Button variant="success" type="submit">
              Add SMTP <i className="ri-send-plane-fill"></i>
            </Button>
          </div>
        </form>
      </div>
    </OverlayModal>
  );
};

export default NewSmtpModal;
