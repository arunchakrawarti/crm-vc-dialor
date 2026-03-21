"use client";
import React, { useState } from "react";
import SendRules from "./SendRules";
import LeadAutomation from "./LeadAutomation";

const tabs = [
    { label: "SendRules", key: "send-rules" },
    { label: "LeadAutomation", key: "lead-automation" }
];

const MainleadRules = () => {
    const [activeTab, setActiveTab] = useState("send-rules");

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
              ${activeTab === tab.key
                                ? "bg-gradient text-gray-800 shadow-sm rounded-full span"
                                : ""
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
           </div>
            {activeTab === "send-rules" && (
                <SendRules />
            )}

            {activeTab === "leads-owned-by-me" && (
                <LeadAutomation />
            )}
        </div>
    );
}


export default MainleadRules;

