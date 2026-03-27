"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import clsx from "clsx";
import Input from "../common/Input";
import { useRouter } from "next/navigation";

const StatsCard = ({
  title,
  value,
  subtitle,
  icon,
  color = "text-blue-500",
  bg = "bg-white",
  type = "stats",
  children,
  count = 0,
  filter = "ALL",
  onFilterChange,
  route
}) => {

  const router = useRouter(); 

  const handleClick = () => {
    if (route) {
      router.push(route);
    }
  };

  if (type === "chart") {
    return (
      <div className={twMerge(clsx("bg-white rounded-xl shadow-md", bg))}>
        
        <div className="border-b px-4 py-3 font-semibold text-gray-700">
          {title}
        </div>

        <div className="h-[300px] flex items-center justify-center text-gray-500">
          {children || "No data to display."}
        </div>

      </div>
    );
  }
  if (type === "followup") {
    return (
      <div className={twMerge(clsx("bg-white rounded-md shadow-md", bg))}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-400">
          
          <div className="flex items-center gap-4">
            <Input
  type="select"
  value={filter}
  onChange={(e) => onFilterChange?.(e.target.value)}
  options={[
    { label: "ALL", value: "ALL" },
    { label: "Interested", value: "Interested" },
    { label: "Call Back", value: "Call Back" },
    { label: "Follow Up", value: "Follow Up" },
    { label: "No Requirement", value: "No Requirement" },
  ]}
/>

            <h3 className="font-semibold text-gray-700">{title}</h3>
          </div>

          <div className="font-semibold text-gray-800">
            Count:{count}
          </div>
        </div>
        <div className="p-6 text-center text-gray-500">
          {children || "No records found for this status"}
        </div>
      </div>
    );
  }
  return (
    <div
    onClick={handleClick}
      className={twMerge(
        clsx(
          "rounded-md shadow-md p-6 flex items-center justify-between cursor-pointer",
          bg
        )
      )}
    >
      <div className={clsx("text-5xl", color)}>
        <i className={icon}></i>
      </div>

      <div className="text-right">
        <h2 className={clsx("text-3xl font-semibold", color)}>{value}</h2>
        <p className="text-md font-medium text-gray-900">{title}</p>

        {subtitle && (
          <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        )}
      </div>
    </div>
  );
};

export default StatsCard;