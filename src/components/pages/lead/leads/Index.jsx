"use client";
import React, { useState } from "react";
import Leads from "./leads";
import LeadsOwned from "./LeadsOwned";

const tabs = [
    { label: "Lead", key: "lead" },
    { label: "Leads Owned By Me", key: "leads-owned-by-me" }, 
];

const Mainleads = () => {
    const [activeTab, setActiveTab] = useState("lead");

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
            {activeTab === "lead" && (
                <Leads />
            )}

            {activeTab === "leads-owned-by-me" && (
                <LeadsOwned />
            )}
        </div>
    );
}


export default Mainleads;

