"use client";
import React from "react";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";

const AddProductModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <OverlayModal isOpen={isOpen} onClose={onClose}>
      <div className=" flex items-center justify-center">
        <div className="w-full max-w-6xl bg-white rounded-lg shadow-2-xl overflow-hidden font-inter">
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800">
              Add Product
            </h2>
          </div>

          <div className="p-8 overflow-y-auto h-120">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
              <Input label="Product Name" placeholder="Enter product name" />
              <Input label="SKU" placeholder="Enter SKU" />

              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-center mb-1">
                  <label className="font-semibold text-[12px] text-gray-500 uppercase tracking-wider">
                    HSN Code
                  </label>
                  <button className="text-[10px] bg-[#6c87e0] text-white px-2 py-0.5 rounded shadow-sm">
                    Find HSN Code
                  </button>
                </div>
                <Input placeholder="Enter HSN Code" />
              </div>

              <Input
                label="Select Category"
                type="select"
                placeholder="-Select Category-"
                options={[]}
              />
              <Input
                label="Unit of Measurement"
                type="select"
                placeholder="KG"
                options={["KG", "PCS", "LTR"]}
              />
              <Input label="Weight" placeholder="Enter weight" />

              <Input label="UnitPrice" placeholder="0.00" type="number" />
              <Input
                label="Discount (In Percent)"
                placeholder="0"
                type="number"
              />
              <Input label="CGST (In Percent)" placeholder="0" type="number" />

              <Input label="SGST (In Percent)" placeholder="0" type="number" />
              <Input label="IGST (In Percent)" placeholder="0" type="number" />

              <div className="flex flex-col gap-1">
                <label className="font-semibold mb-1 text-[12px] text-gray-500 uppercase tracking-wider">
                  Product Image
                </label>
                <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden h-[47px] bg-white">
                  <input
                    type="file"
                    className="text-sm w-full text-gray-500 file:mr-4 file:py-3 file:px-4 file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 border border-gray-300 w-28 h-28 rounded bg-gray-50 flex items-center justify-center">
              <i className="ri-image-line text-gray-300 text-3xl"></i>
            </div>

            <div className="mt-8 flex justify-end">
              <button className="bg-[#00adef] hover:bg-[#0096d1] text-white font-bold py-3 px-10 rounded-md flex items-center gap-3 transition-all uppercase text-[13px] tracking-widest shadow-lg">
                Add Product
                <i className="ri-send-plane-fill ri-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </OverlayModal>
  );
};

export default AddProductModal;
