"use client";
import AnalyticalCard from '@/components/molecules/AnalyticalCard';
import { Clock, CalendarDays, User, Phone, TrendingUp, RefreshCcw } from "lucide-react";
import React from 'react';
import Followupchart from './Followupchart';

const StatsGrid = () => {
const dashboardStats = [
  {
    title: "Today Follow-Up",
    value: 12,
    Icon: RefreshCcw,
    FooterIcon: Phone,
    cardColor: "bg-yellow-300", 
    textColor: "text-[#e91e63]"
  },
  {
    title: "Tomorrow Follow-Up",
    value: 7,
    Icon: CalendarDays,
    FooterIcon: Phone,
    cardColor: "bg-pink-300", 
    textColor: "text-[#c19a6b]"
  },
  {
    title: "Pending Follow-Up",
    value: 4,
    Icon: Clock,
    FooterIcon: Phone,
    cardColor: "bg-[#f44336]", 
    textColor: "text-[#f44336]"
  },
  {
    title: "Fresh Lead",
    value: 29,
    Icon: User,
    FooterIcon: TrendingUp,
    cardColor: "bg-blue-500", 
    textColor: "text-[#03a9f4]"
  }
];

  return (
    <div className="bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {dashboardStats.map((item, index) => (
          <AnalyticalCard 
            key={index}
            title={item.title}
            value={item.value}
            Icon={item.Icon}
            FooterIcon={item.FooterIcon}
            cardColor={item.cardColor}
            textColor={item.textColor}
          />
        ))}
      </div>
      <Followupchart/>
    </div>
  );
};

export default StatsGrid;