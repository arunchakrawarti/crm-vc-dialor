import React from "react";
import { X, Send } from "lucide-react";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

const AddLeadModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <OverlayModal isOpen={isOpen} onClose={onClose} modalClass="">
      <div className="fixed inset-0  flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl overflow-hidden">
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl text-gray-800 font-semibold">Add Lead</h2>
            <button
              onClick={onClose}
              className="bg-[#f34336] hover:bg-red-600 text-white rounded-full p-1 transition-all"
            >
              <X size={20} />
            </button>
          </div>
          <form className="p-6 space-y-4  overflow-y-auto h-110">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Contact Name" placeholder="" />
              <Input
                label="Owner"
                type="select"
                options={[{ label: "Abhishek jaiswal", value: "abhishek" }]}
                defaultValue="abhishek"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Select Branch"
                type="select"
                placeholder="-Select Bra"
                options={[]}
              />
              <Input
                label="Select Source"
                type="select"
                placeholder="-Select Sou"
                options={[]}
              />
              <Input
                label="Lead Priority"
                type="select"
                options={[{ label: "Lower", value: "lower" }]}
                defaultValue="lower"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Input
                label="Select Status"
                type="select"
                placeholder="-Select Status-"
                options={[]}
              />
            </div>
            <Input label="Reference" placeholder="" />
            <Input label="Description" placeholder="" />
            <div className="flex justify-end pt-4">
              <Button variant="success" type="submit">
                SUBMIT <Send size={18} fill="currentColor" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </OverlayModal>
  );
};

export default AddLeadModal;
