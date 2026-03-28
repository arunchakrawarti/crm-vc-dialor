"use client";
import AnalyticalCard from "@/components/molecules/AnalyticalCard";
import {
  Clock,
  CalendarDays,
  Users,
  Phone,
  TrendingUp,
  Timer,
} from "lucide-react";
import React from "react";
import Followupchart from "./Followupchart";

const StatsGrid = () => {
  return (
    <div className="bg-white p-4 rounded-lg w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((item, index) => (
          <AnalyticalCard key={index} {...item} />
        ))}
      </div>

      <Followupchart />
    </div>
  );
};

export default StatsGrid;
const dashboardStats = [
  {
    title: "Today Follow-Up",
    value: 0,
    Icon: Timer,
    FooterIcon: Phone,
    cardColor: "bg-pink-400",
    textColor: "text-pink-500",
  },
  {
    title: "Tomorrow Follow-Up",
    value: 0,
    Icon: CalendarDays,
    FooterIcon: Phone,
    cardColor: "bg-green-600",
    textColor: "text-yellow-700",
  },
  {
    title: "Pending Follow-Up",
    value: 0,
    Icon: Clock,
    FooterIcon: Phone,
    cardColor: "bg-red-500",
    textColor: "text-red-500",
  },
  {
    title: "Fresh Lead",
    value: 0,
    Icon: Users,
    FooterIcon: TrendingUp,
    cardColor: "bg-blue-500",
    textColor: "text-blue-500",
  },
];
