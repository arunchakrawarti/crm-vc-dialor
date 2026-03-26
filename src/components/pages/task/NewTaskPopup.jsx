"use client";
import React from "react";
import OverlayModal from "@/components/common/OverlayModal";
import Input from "@/components/common/Input";
import { Texteditor } from "@/components/utils/Texteditor";
import Button from "@/components/common/Button";

const NewTaskPopup = ({ onClose, isOpen }) => {

  return (
    <OverlayModal onClose={onClose} isOpen={isOpen}>
      <div className="flex items-center justify-center">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
          <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
            <h2 className="text-2xl font-bold text-gray-800">Add Task</h2>
          </div>
          <div className="p-6 overflow-y-auto h-120">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              <Input label="Task Title" />

              <Input
                label="Choose Lead"
                type="select"
                options={["Lead 1", "Lead 2", "Lead 3"]}
              />

              <Input label="Task Start Date" />
              <Input label="Task End Date" />
              <Input label="Task Assign To" />
              <Input label="Task Observer" />

              <Input
                label="Task Priority"
                type="select"
                options={["Lower", "Medium", "High", "Urgent"]}
              />
            </div>

            <div className="mt-8">
              <label className="text-sm font-semibold text-gray-500 uppercase">
                Description
              </label>

              <Texteditor />
            </div>

            <div className="mt-4">
              <Input type="checkbox" label="IsTaskActive" />
            </div>

            <div className="flex justify-end mt-2">
              <Button variant="success">
                Add Task
              </Button>
            </div>

          </div>
        </div>
      </div>
    </OverlayModal>
  );
};

export default NewTaskPopup;