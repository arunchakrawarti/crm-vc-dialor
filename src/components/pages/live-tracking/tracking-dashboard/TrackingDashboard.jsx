"use client";
import React from "react";
import StatsCard from "@/components/molecules/StatsCard";

const TrackingDashboard = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {statsData.map((item, index) => (
        <div>
          <StatsCard
            title={item.title}
            value={item.value}
            icon={item.icon}
            color={item.color}
          />
        </div>
      ))}
    </div>
  );
};

export default TrackingDashboard;

const statsData = [
  {
    title: "Total Users",
    value: 1,
    icon: "ri-user-line",
    color: "text-green-600",
  },
  {
    title: "Online Users",
    value: 0,
    icon: "ri-user-follow-line",
    color: "text-green-700",
  },
  {
    title: "Offline Users",
    value: 0,
    icon: "ri-user-unfollow-line",
    color: "text-orange-500",
  },
  {
    title: "Leave Users",
    value: 1,
    icon: "ri-user-forbid-line",
    color: "text-red-500",
  },
  {
    title: "Meeting Location of Users",
    value: 0,
    icon: "ri-map-pin-line",
    color: "text-red-500",
  },
];
