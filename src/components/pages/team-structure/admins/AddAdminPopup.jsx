"use client";
import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";
import { X, Send } from "lucide-react";

const AddAdminPopup = ({ isOpen, onClose }) => {
  const [gender, setGender] = useState("Male");

  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      showCloseIcon={false}
      modalClass="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] max-w-4xl"
    >
      <div className="bg-[#F3F3F3] rounded-sm overflow-hidden border border-gray-300 shadow-2xl">
        <div className="bg-white px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center border-b border-gray-200">
          <h2 className="text-lg sm:text-xl font-semibold text-gray-800 uppercase tracking-tight">
            Add Admin
          </h2>

          <Button variant="success"
            onClick={onClose}
          >
            <X size={20} className="sm:w-[22px] sm:h-[22px]" strokeWidth={3} />
          </Button>
        </div>

       
        <div className="p-3 sm:p-6 bg-white m-2 sm:m-4 rounded shadow-sm border border-gray-200 max-h-[80vh] overflow-y-auto">
          <form className="space-y-5 sm:space-y-6" onSubmit={(e) => e.preventDefault()}>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <Input
                label={<span>First Name <span className="text-red-500">*</span></span>}
              />
              <Input label="Last Name" />
              <Input
                label={<span>Mobile No <span className="text-red-500">*</span></span>}
              />
            </div>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              <Input
                label={<span>Email <span className="text-red-500">*</span></span>}
                type="email"
              />
              <Input
                label={<span>Branch Id <span className="text-red-500">*</span></span>}
                type="select"
                placeholder="-Select Branch-"
                options={[
                  { label: "Branch 1", value: "branch1" },
                  { label: "Branch 2", value: "branch2" },
                ]}
              />
            </div>

            <hr className="border-gray-200" />

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              <Input label="Father's Full Name" />
              <Input label="Date Of Birth" type="date" />

             
              <div className="flex flex-col">
                <label className="font-semibold mb-2 text-[11px] sm:text-[12px] text-gray-500 uppercase tracking-wider">
                  Select Gender
                </label>

                <div className="flex flex-row sm:flex-col gap-4 sm:gap-3 mt-1">
                  <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      checked={gender === "Male"}
                      onChange={(e) => setGender(e.target.value)}
                      className="hidden"
                    />

                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center 
                      ${gender === "Male" ? "border-[#1B3A61]" : "border-gray-300"}`}>

                      {gender === "Male" && (
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1B3A61] rounded-full" />
                      )}
                    </div>

                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      Male
                    </span>
                  </label>
                  <label className="flex items-center gap-2 sm:gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      checked={gender === "Female"}
                      onChange={(e) => setGender(e.target.value)}
                      className="hidden"
                    />

                    <div className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full border-2 flex items-center justify-center 
                      ${gender === "Female" ? "border-[#1B3A61]" : "border-gray-300"}`}>

                      {gender === "Female" && (
                        <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-[#1B3A61] rounded-full" />
                      )}
                    </div>

                    <span className="text-xs sm:text-sm font-medium text-gray-700">
                      Female
                    </span>
                  </label>

                </div>
              </div>
            </div>
            <div className="w-full">
              <Input label="Address" />
            </div>
            <div className="flex justify-center sm:justify-end pt-3 sm:pt-4">
              <Button variant="success">
                SUBMIT <Send size={16} className="sm:w-[18px] sm:h-[18px]" fill="white" />
              </Button>
            </div>

          </form>
        </div>
      </div>
    </OverlayModal>
  );
};

export default AddAdminPopup;