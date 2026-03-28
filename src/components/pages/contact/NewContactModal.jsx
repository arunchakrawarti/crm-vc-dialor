"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import OverlayModal from "@/components/common/OverlayModal";
import React from "react";

const NewContactModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-5xl bg-white rounded-lg shadow-2xl my-8 font-inter">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add New Contact
            </h2>
          </div>

          <div className="p-8 overflow-y-auto h-120">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
              <div className="flex gap-4 items-end">
                <div className="w-1/3">
                  <Input
                    label="Title"
                    type="select"
                    options={["Mr", "Ms", "Mrs", "Dr"]}
                    placeholder="Mr"
                  />
                </div>
                <div className="flex-1 relative">
                  <Input label="Name" placeholder="Enter name" />
                  <Button
                    variant="success"
                    className="absolute right-[35px] bottom-2 text-white rounded-full w-2 h-6"
                  >
                    <i className="ri-add-line"></i>
                  </Button>
                </div>
              </div>

              <div className="flex gap-4 mt-2 items-end">
                <div className="w-1/3">
                  <Input
                    label="Country Code"
                    type="select"
                    options={["India (+91)", "USA (+1)"]}
                    placeholder="India (+91)"
                  />
                </div>
                <div className="flex-1 relative">
                  <Input label="Mobile No" placeholder="Enter mobile no" />
                  <Button
                    variant="success"
                    className="absolute right-[-35px] bottom-2 text-white rounded-full w-2 h-6"
                  >
                    <i className="ri-add-line"></i>
                  </Button>
                </div>
              </div>

              <div className="relative mr-8">
                <Input
                  label="Source"
                  type="select"
                  placeholder="-Select Source-"
                  options={[]}
                />
              </div>
              <div className="relative mr-8">
                <Input label="Email" placeholder="Enter email" />
                <Button
                  variant="success"
                  className="absolute right-[-35px] bottom-2 text-white rounded-full w-2  h-6"
                >
                  <i className="ri-add-line"></i>
                </Button>
              </div>

              <Input label="Website" placeholder="Enter website" />
              <Input
                label="Owner"
                type="select"
                placeholder="Abhishek Jaiswal"
                options={["Abhishek Jaiswal"]}
              />

              <Input
                label="Position"
                type="select"
                placeholder="Unknown"
                options={["Unknown"]}
              />
              <Input
                label="Industry"
                type="select"
                placeholder="Unknown"
                options={["Unknown"]}
              />

              <Input
                label="facebook Profile"
                placeholder="Enter facebook profile"
              />
              <Input
                label="Twitter Profile"
                placeholder="Enter twitter profile"
              />

              <div className="grid grid-cols-3 gap-4 md:col-span-2">
                <Input
                  label="Select Country"
                  type="select"
                  placeholder="India"
                  options={["India"]}
                />
                <Input
                  label="Select State"
                  type="select"
                  placeholder="-Select State-"
                  options={[]}
                />
                <Input
                  label="Select City"
                  type="select"
                  placeholder="-Select City-"
                  options={[]}
                />
              </div>

              <div className="md:col-span-2">
                <Input
                  label="Comment"
                  placeholder="Enter comment"
                  className="h-20"
                />
              </div>
              <div className="md:col-span-2">
                <Input
                  label="Full Address"
                  placeholder="Enter full address"
                  className="h-20"
                />
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <Button variant="success">
                <span className="font-bold tracking-widest text-sm uppercase">
                  Add Contact
                </span>
                <i className="ri-send-plane-fill ri-lg ml-2"></i>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </OverlayModal>
  );
};

export default NewContactModal;
