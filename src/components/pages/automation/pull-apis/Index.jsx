"use client";
import React from "react";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { Plus } from "lucide-react";
import Acres from "./Acres";
import Housing from "./Housing";
import Indiamart from "./Indiamart";
import TradeIndia from "./TradeIndia";

const PullMain = () => {
  return (
    <div className="p-3 sm:p-6 bg-[#F3F3F3] min-h-screen">

      {/* --- TOP HEADER BUTTONS --- */}
      <div className="flex flex-col sm:flex-row justify-end gap-2 mb-4 sm:mb-6">
        <Button variant="success" className="w-full sm:w-auto text-xs sm:text-sm">
          Go to Google Ads Integration
        </Button>
        <Button variant="success" className="w-full sm:w-auto text-xs sm:text-sm">
          Go to Facebook Integration
        </Button>
      </div>

      <div className="bg-white border border-gray-200 rounded-sm shadow-sm p-4 sm:p-6 lg:p-8">

        {/* --- HEADER --- */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8">

          {/* Logo */}
          <div className="bg-[#B22222] p-2 rounded-sm w-fit">
            <h1 className="text-white text-lg sm:text-2xl font-bold italic tracking-tight px-2">
              magicbricks
            </h1>
          </div>

          {/* Toggle */}
          <div className="flex items-center gap-2">
            <div className="bg-[#5BC0DE] text-white px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold flex items-center gap-2 relative w-14 sm:w-16 h-6 sm:h-7 cursor-pointer">
              <span className="ml-1">ON</span>
              <div className="absolute right-1 w-4 h-4 sm:w-5 sm:h-5 bg-white rounded-full shadow-sm"></div>
            </div>
          </div>
        </div>

        {/* --- FORM FIELDS --- */}
        <div className="space-y-4 sm:space-y-6">

          <div>
            <Input
              label="Assign"
              placeholder="Assignee"
              className="w-full"
            />
          </div>

          <div>
            <Input
              label="Source"
              placeholder="Lead source"
              className="w-full"
            />
          </div>

          <div>
            <Input
              label="Branch"
              placeholder="Branch Name"
              className="w-full"
            />
          </div>

          <div>
            <Input
              label="API Key"
              placeholder="API Key"
              className="w-full"
            />
          </div>

        </div>

        {/* --- BUTTONS --- */}
        <div className="flex flex-wrap justify-center sm:justify-end items-center gap-2 sm:gap-4 mt-6 sm:mt-10">

          <Button variant="success" className="w-full sm:w-auto text-xs sm:text-sm">
            Save
          </Button>

          <Button variant="success" className="w-full sm:w-auto text-xs sm:text-sm">
            Cancel
          </Button>

          <Button variant="success" className="w-full sm:w-auto text-xs sm:text-sm">
            Test
          </Button>

          <Button
            variant="success"
            className="w-full sm:w-auto flex justify-center"
          >
            <Plus size={20} className="sm:w-[24px] sm:h-[24px]" strokeWidth={3} />
          </Button>

        </div>

      </div>
      <Acres/>
      <Housing/>
      <Indiamart/>
      <TradeIndia/>
    </div>
  );
};

export default PullMain;