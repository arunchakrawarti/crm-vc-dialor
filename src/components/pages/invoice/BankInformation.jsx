"use client";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import React from "react";

const BankInformation = () => {
  return (
    <div className="w-full mt-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
        <div className="lg:col-span-2 w-full flex flex-col gap-6 bg-white p-6 border border-gray-100 rounded-lg shadow-sm">
          <div className="w-full md:w-1/2">
            <Input
              label="Bank Detail *"
              type="select"
              options={["SBI Bank", "HDFC Bank", "ICICI Bank"]}
            />
          </div>

          <Input label="Description (Optional)" type="textarea" rows={4} />

          <Input
            label="Terms & Condition (Optional)"
            type="textarea"
            rows={4}
          />

          <Input type="checkbox" label="Is Send Invoice on Email" />

          <Button variant="success" className="w-fit">
            Save Invoice
          </Button>
        </div>

        <div className="w-full bg-white p-6 border border-gray-100 rounded-lg shadow-sm flex flex-col gap-4">
          <Input
            label="Total Amount Before Tax"
            type="number"
            className="bg-gray-50 text-right"
          />
          <Input label="CGST" type="number" className="bg-gray-50 text-right" />
          <Input label="SGST" type="number" className="bg-gray-50 text-right" />
          <Input label="IGST" type="number" className="bg-gray-50 text-right" />
          <Input
            label="Total Amount"
            type="number"
            className="bg-gray-50 text-right font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default BankInformation;
