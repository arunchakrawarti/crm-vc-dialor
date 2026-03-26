"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import { Plus, Database } from "lucide-react";
import AddnewAccountModal from "./AddnewAccountModal";

const FacebookPixelIntegration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm min-h-[400px]">

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        <div>
          <h2 className="text-lg sm:text-xl font-bold text-gray-900">
            Meta Conversion Account Configuration (OAuth Flow)
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Login with Facebook to automatically fetch your assets
          </p>
        </div>
        <Button
          variant="success"
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center"
        >
          <Plus size={18} /> Add New Account
        </Button>
      </div>
      <div className="mb-8 flex justify-start">
        <Button
          variant="success"
          className="w-full sm:w-auto"
        >
          Conversion Stages Mapping
        </Button>
      </div>
      <div className="flex flex-col items-center justify-center py-10 text-center">

        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <Database className="text-gray-400" size={28} />
        </div>

        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
          No Meta Account Configured
        </h3>

        <p className="text-gray-500 text-sm sm:text-lg mb-6 max-w-md">
          Get started by adding your first Meta conversion account to enable pixel tracking.
        </p>
        <Button
          variant="success"
          onClick={() => setIsModalOpen(true)}
          className="w-full sm:w-auto flex items-center justify-center gap-2"
        >
          <Plus size={20} strokeWidth={3} />
          Add Your First Account
        </Button>
      </div>
      <AddnewAccountModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default FacebookPixelIntegration;