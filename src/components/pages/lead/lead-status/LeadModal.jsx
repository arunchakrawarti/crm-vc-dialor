"use client";
import React from "react";
import { Send } from "lucide-react";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const LeadModal = ({ isOpen, onClose }) => {
  const CheckboxField = ({ label }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
      <input
        type="checkbox"
        className="w-4 h-4 rounded border-gray-300 text-[#00adef] focus:ring-[#00adef]"
      />
      <span className="text-sm text-gray-700 font-medium group-hover:text-black transition-colors">
        {label}
      </span>
    </label>
  );

  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      modalClass="max-w-4xl bg-white rounded-lg shadow-2xl"
    >
      <div className="px-6 py-4 border-b border-gray-100">
        <h2 className="text-2xl text-gray-800 font-semibold tracking-tight">
          Add Status
        </h2>
      </div>
      <div className="p-6 space-y-8 overflow-y-auto h-120">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
            <Input label="Status" placeholder="" />
            <Input label="Percentage" placeholder="" />
            <div className="flex items-center gap-3 pb-2">
              <div className="p-2 border border-gray-300 rounded cursor-pointer hover:bg-gray-50">
                <i className="ri-paint-fill text-xl text-gray-600"></i>
              </div>
              <div className="flex-1 h-8 bg-black rounded border border-gray-300"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-y-5 gap-x-10">
            <div className="space-y-5">
              <CheckboxField label="Ask Next Meeting" />
              <CheckboxField label="Ask Estimation" />
              <CheckboxField label="Is Default Status" />
              <CheckboxField label="Is Priority" />
              <CheckboxField label="Save Location" />
            </div>

            <div className="space-y-5">
              <div className="h-[44px] hidden md:block"></div>
              <div className="h-[44px] hidden md:block"></div>
              <CheckboxField label="Description Show or Not" />
              <CheckboxField label="Hide This Status From ABM" />
            </div>

            <div className="space-y-5">
              <div className="h-[44px] hidden md:block"></div>
              <div className="h-[44px] hidden md:block"></div>
              <Input label="Customize Label Description" placeholder="" />
              <CheckboxField label="Hide This Status From ABE" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <Input
              label="Select Lead Conversion Status"
              type="select"
              placeholder="-Select Status-"
              options={[]}
            />
          </div>
          <div className="flex justify-end pt-4">
            <Button variant="success" type="submit">
              ADD STATUS <Send size={18} fill="currentColor" />
            </Button>
          </div>
        </form>
      </div>
    </OverlayModal>
  );
};

export default LeadModal;
