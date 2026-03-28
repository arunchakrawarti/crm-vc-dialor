"use client";
import React, { useState } from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import BasicTable from "@/components/common/BasicTable";
import AddCategoryModal from "./AddCategoryModal";

const Category = () => {
  const [isOpen, setIsOpen] = useState(false);

  const columns = [
    { label: "Category Name", key: "category-name" },
    { label: "Category Code", key: "category-code" },
    { label: "Date", key: "date" },
    { label: "Action", key: "action" },
  ];

  const data = [];

  return (
    <div className="space-y-4">
      <div className="bg-white rounded-xl p-3 sm:p-4 flex flex-col lg:flex-row gap-3 lg:items-center justify-between shadow-sm border border-gray-300">
        <div className="flex flex-col sm:flex-row gap-3 w-full">
          <Input placeholder="Search by Name" className="w-full" />

          <Button
            className="h-[45px] sm:h-[52px] px-4 w-full sm:w-auto"
            variant="success"
          >
            <i className="ri-search-line text-lg"></i>
          </Button>
        </div>
        <Button
          className="h-[45px] sm:h-[52px] px-4 w-full sm:w-auto"
          variant="success"
          onClick={() => setIsOpen(true)}
        >
          <i className="ri-add-line text-lg"></i>
        </Button>
      </div>
      <div className="bg-white rounded-xl shadow-sm border overflow-hidden border-gray-300">
        <BasicTable
          columns={columns}
          data={data}
          pagination={true}
          wrapperClassName="rounded-xl"
        />
      </div>
      <AddCategoryModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </div>
  );
};

export default Category;
