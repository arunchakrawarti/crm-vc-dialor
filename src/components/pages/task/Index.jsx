"use client";
import React, { useState } from "react";
import TaskAssignedByMe from "./TaskAssignedByMe";
import TaskAssignToMe from "./TaskAssignToMe";

const tabs = [
  { label: "Task Assinged By Me", key: "task-assinged-by" },
  { label: "Task Assign To Me", key: "task-assign-to" },
];

const Maintask = () => {
  const [activeTab, setActiveTab] = useState("task-assinged-by");

  const handleTabClick = (tabKey) => {
    setActiveTab(tabKey);
  };

  return (
    <div className="w-full mt-8 ">
      <div className="overflow-x-auto scrollbar-hidden">
        <div className="inline-flex rounded-full bg-white font-inter p-1 mb-6 ">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`px-4 py-1.5 span text-center cursor-pointer text-[#000000]! text-nowrap
              ${
                activeTab === tab.key
                  ? "bg-gradient text-gray-800 shadow-sm rounded-full span"
                  : ""
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      {activeTab === "task-assinged-by" && <TaskAssignedByMe />}

      {activeTab === "task-assign-to" && <TaskAssignToMe />}
    </div>
  );
};

export default Maintask;
