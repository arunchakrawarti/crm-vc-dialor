"use client";
import React, { useState } from "react";
import { Monitor } from "lucide-react";


const TaskAssignToMe = () => {

  return (
    <>
      <div className="bg-white border border-gray-200 rounded-md shadow-sm min-h-[450px] flex flex-col">

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="mb-4 text-blue-600">
            <Monitor size={80} strokeWidth={1.5} />
          </div>
          <p className="text-gray-500 text-lg">
            You have no records found.
          </p>
        </div>
      </div>
    </>
  );
};

export default TaskAssignToMe;