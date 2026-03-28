"use client";
import BasicTable from "@/components/common/BasicTable";
import Button from "@/components/common/Button";
import React from "react";

const ProductItemTable = () => {
  const items = [{}];

  const columns = [
    {
      label: "Product Name",
      key: "productName",
      render: () => (
        <div className="flex flex-col gap-1 min-w-[200px] py-2">
          <select className="w-full border border-gray-300 rounded px-2 py-2 text-sm outline-none">
            <option>Choose Product..</option>
          </select>
          <textarea
            placeholder="Description.."
            className="w-full border border-gray-300 rounded px-2 py-1 text-sm outline-none resize-none h-16"
          />
        </div>
      ),
    },
    {
      label: "HSN/SAC",
      key: "hsn",
      render: () => (
        <input
          type="text"
          placeholder="Code"
          className="w-20 border border-gray-300 rounded px-2 py-2 text-sm outline-none"
        />
      ),
    },
    {
      label: "Quantity",
      key: "qty",
      render: () => (
        <input
          type="number"
          placeholder="Qty"
          className="w-16 border border-gray-300 rounded px-2 py-2 text-sm outline-none"
        />
      ),
    },
    {
      label: "Unit Price",
      key: "unitPrice",
      render: () => (
        <input
          type="number"
          placeholder="Unit Price"
          className="w-24 border border-gray-300 rounded px-2 py-2 text-sm outline-none"
        />
      ),
    },
    {
      label: "Taxable Value",
      key: "taxable",
      render: () => (
        <input
          type="number"
          placeholder="Taxable"
          className="w-24 border border-gray-300 rounded px-2 py-2 text-sm outline-none bg-gray-50"
        />
      ),
    },
    {
      label: "CGST (%)",
      key: "cgst",
      render: () => (
        <input
          type="number"
          placeholder="CGST"
          className="w-16 border border-gray-300 rounded px-2 py-2 text-sm outline-none"
        />
      ),
    },
    {
      label: "SGST (%)",
      key: "sgst",
      render: () => (
        <input
          type="number"
          placeholder="SGST"
          className="w-16 border border-gray-300 rounded px-2 py-2 text-sm outline-none"
        />
      ),
    },
    {
      label: "IGST (%)",
      key: "igst",
      render: () => (
        <input
          type="number"
          placeholder="IGST"
          className="w-16 border border-gray-300 rounded px-2 py-2 text-sm outline-none"
        />
      ),
    },
    {
      label: "Discount (%)",
      key: "discount",
      render: () => (
        <input
          type="number"
          placeholder="Discount"
          className="w-16 border border-gray-300 rounded px-2 py-2 text-sm outline-none"
        />
      ),
    },
    {
      label: "Amount",
      key: "amount",
      render: () => (
        <input
          type="number"
          placeholder="Amount"
          className="w-24 border border-gray-300 rounded px-2 py-2 text-sm outline-none bg-gray-50"
        />
      ),
    },
  ];

  return (
    <div className="w-full mt-6 font-inter">
      <div className="overflow-hidden border border-gray-200 rounded-lg shadow-sm">
        <div>
          <BasicTable
            columns={columns}
            data={items}
            wrapperClassName="border-none shadow-none rounded-none"
          />
        </div>
      </div>

      <div className="mt-4">
        <Button
          variant="greenbtn"
          className="font-bold flex items-center gap-1 px-6"
        >
          <span className="text-xl">+</span> ADD MORE
        </Button>
      </div>
    </div>
  );
};

export default ProductItemTable;
