"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";
import { Send } from "lucide-react";

const AddAdminPopup = ({ isOpen, onClose }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="">
      <div className="bg-[#F3F3F3] rounded-md w-full">
        <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200">
          <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 uppercase tracking-tight">
            Add Admin
          </h2>
        </div>
        <div className="p-3 sm:p-5 md:p-6 bg-white m-2 sm:m-3 md:m-4 rounded shadow-sm border border-gray-200 overflow-y-auto max-h-[80vh]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <Input
                label={
                  <span>
                    First Name <span className="text-red-500">*</span>
                  </span>
                }
              />
              <Input label="Last Name" />
              <Input
                label={
                  <span>
                    Mobile No <span className="text-red-500">*</span>
                  </span>
                }
              />

              <Input
                label={
                  <span>
                    Email <span className="text-red-500">*</span>
                  </span>
                }
                type="email"
              />
              <Input
                label={
                  <span>
                    Branch Id <span className="text-red-500">*</span>
                  </span>
                }
                type="select"
                placeholder="-Select Branch-"
                options={[
                  { label: "Branch 1", value: "branch1" },
                  { label: "Branch 2", value: "branch2" },
                ]}
              />

              <div className="hidden lg:block"></div>

              <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                <hr className="border-gray-200" />
              </div>

              <Input label="Father's Full Name" />
              <Input label="Date Of Birth" type="date" />

              <div className="flex flex-col">
                <label className="font-semibold mb-2 text-[11px] sm:text-[12px] text-gray-500 uppercase tracking-wider">
                  Select Gender
                </label>

                <div className="flex flex-row sm:flex-col gap-4 sm:gap-3">
                  <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                    <input type="radio" className="hidden" />
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-[#1B3A61] flex items-center justify-center">
                      <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1B3A61] rounded-full" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      Male
                    </span>
                  </label>

                  <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                    <input type="radio" className="hidden" />
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 border-gray-300 flex items-center justify-center" />
                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      Female
                    </span>
                  </label>
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2 lg:col-span-3">
                <Input label="Address" />
              </div>
            </div>

            <div className="flex justify-center sm:justify-end pt-2 sm:pt-4">
              <Button variant="success" className="w-full sm:w-auto">
                SUBMIT
                <Send size={16} className="ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </OverlayModal>
  );
};

export default AddAdminPopup;
