"use client";
import Input from "@/components/common/Input";
import React from "react";

const AddressDetails = () => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-5">
      <div className="flex flex-col gap-4 border border-gray-200 shadow-sm rounded-lg p-4 md:p-5 bg-white">
        
        <h2 className="text-lg md:text-xl font-semibold text-gray-800">
          Billing Address
        </h2>

        <Input label="Billing Street *" placeholder="Billing Street" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <Input
            label="Billing Country *"
            type="select"
            options={["India", "USA", "UK"]}
          />
          <Input
            label="Billing State *"
            type="select"
            options={["Delhi", "UP", "Haryana"]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <Input
            label="Billing City *"
            type="select"
            options={["New Delhi", "Noida", "Gurgaon"]}
          />
          <Input
            label="Billing Pincode *"
            placeholder="Billing Pincode"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 border border-gray-200 shadow-sm rounded-lg p-4 md:p-5 bg-white">
        
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <h2 className="text-lg md:text-xl font-semibold text-gray-800">
            Shipping Address
          </h2>

          <Input
            type="checkbox"
            label="Same as billing"
          />
        </div>

        <Input label="Shipping Street *" placeholder="Shipping Street" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <Input
            label="Shipping Country *"
            type="select"
            options={["India", "USA", "UK"]}
          />
          <Input
            label="Shipping State *"
            type="select"
            options={["Delhi", "UP", "Haryana"]}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          <Input
            label="Shipping City *"
            type="select"
            options={["New Delhi", "Noida", "Gurgaon"]}
          />
          <Input
            label="Shipping Pincode *"
            placeholder="Shipping Pincode"
          />
        </div>
      </div>

    </div>
  );
};

export default AddressDetails;