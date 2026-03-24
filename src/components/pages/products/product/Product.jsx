"use client";
import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";
import AddProductModal from "./AddProductModal";

const Product = () => {
    const [isOpen, setIsOpen] = useState(false);
  const columns = [
    {
      label: "Image",
      key: "image",
      render: () => (
        <img
          src="https://via.placeholder.com/40"
          className="w-10 h-10 rounded"
        />
      ),
    },
    { label: "Product", key: "product" },
  ];

  const data = [];

  return (
    <div className=" space-y-4">
      <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <div className="flex flex-col sm:flex-row gap-3 w-full">

          <Input
            placeholder="Search by Name"
            className="w-full"
          />

          <Input
            placeholder="Search by SKU"
            className="w-full"
          />
           <Button className="h-[52px] px-4" variant="success">
            <i className="ri-search-line text-lg"></i>
          </Button>

        </div>
        <Button
          className="h-[52px] px-4"
          variant="success"
          onClick={() => setIsOpen(true)}
        >
          <i className="ri-add-line text-lg"></i>
        </Button>
      </div>
      <div className="bg-white rounded-xl">
        <BasicTable
          columns={columns}
          data={data}
          pagination={true}
        />
      </div>

<AddProductModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default Product;