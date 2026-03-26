"use client";
import React, { useState } from "react";
import CurrentPlan from "./CurrentPlan";
import MonthlyPayment from "./MonthlyPayment";

const tabs = [
    { label: "Current Plan", key: "current-plan" },
    { label: "Monthly Payment", key: "monthly-payment" }
];

const MainPayment = () => {
    const [activeTab, setActiveTab] = useState("current-plan");

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
            {activeTab === "current-plan" && (
                <CurrentPlan />
            )}

            {activeTab === "monthly-payment" && (
                <MonthlyPayment />
            )}
        </div>
    );
}


export default MainPayment;

