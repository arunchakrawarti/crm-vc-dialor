"use client";
import Input from "@/components/common/Input";
import React from "react";
import AddressDetails from "./AddressDetails";
import ProductItemTable from "./ProductItemTable";
import BankInformation from "./BankInformation";

const CreateInvoice = () => {
  return (
    <div className="w-full p-6 bg-white rounded-lg shadow-sm font-inter">
      <div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Input
            label="Lead Name/Mobile No./Email*"
            placeholder="Lead Name/Mobile No./Email"
          />

          <Input
            label="Invoice No. *"
            placeholder="25-26/1"
            defaultValue="25-26/1"
          />

          <Input label="Date Issued *" type="date" placeholder="dd-mm-yyyy" />

          <Input
            label="Branch Detail *"
            type="select"
            placeholder="-Select Branch-"
            options={["Main Branch", "Branch 01", "Branch 02"]}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-1/2">
          <Input
            label="Receiver Company Name *"
            placeholder="Receiver Company Name"
          />

          <Input label="Receiver GSTIN/UIN No" placeholder="GST Number" />
        </div>
      </div>
      <AddressDetails />
      <ProductItemTable />
      <BankInformation />
    </div>
  );
};

export default CreateInvoice;
