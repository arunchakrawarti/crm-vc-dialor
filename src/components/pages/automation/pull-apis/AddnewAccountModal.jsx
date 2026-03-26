"use client";
import React from "react";
import { Plus, Facebook } from "lucide-react";
import Button from "@/components/common/Button";
import OverlayModal from "@/components/common/OverlayModal";

const AddnewAccountModal = ({ isOpen, onClose }) => {
  return (
    <OverlayModal
      isOpen={isOpen}
      onClose={onClose}
      modalClass="max-w-[700px] bg-white rounded-xl shadow-2xl overflow-hidden"
    >
      <div className="bg-blue-600 px-6 py-4 flex items-center gap-3 text-white">
        <div className="bg-white/20 p-2 rounded-full">
          <Plus size={18} strokeWidth={3} />
        </div>
        <h2 className="text-xl font-semibold">Add New Account</h2>
      </div>
      <div className="p-6 sm:p-8">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 flex flex-col sm:flex-row gap-5 items-start">
          <div className="bg-[#1877f2] p-3 rounded-full text-white flex-shrink-0">
            <Facebook size={26} fill="currentColor" />
          </div>
          <div className="flex flex-col gap-4 w-full">

            <div>
              <h3 className="text-blue-700 text-lg sm:text-xl font-semibold">
                Connect with Facebook
              </h3>
              <p className="text-gray-600 text-sm sm:text-base mt-1 leading-relaxed">
                Login with your Facebook account to automatically fetch your Pages,
                Pixels, and WhatsApp Business Accounts.
              </p>
            </div>
            <div>
              <Button variant="success"
>
                <Facebook size={18} fill="currentColor" />
                Login with Facebook
              </Button>
            </div>

          </div>
        </div>
      </div>
    </OverlayModal>
  );
};

export default AddnewAccountModal;