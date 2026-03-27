import StatsCard from '@/components/molecules/StatsCard'
import React from 'react'
import Status from './Status'

const MainDashboard = () => {
  return (
    <div>
      <div className="grid mt-5 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
      {statsData.map((item, index) => (
        <StatsCard
          key={index}
          title={item.title}
          value={item.value}
          subtitle={item.subtitle}
          icon={item.icon}
          color={item.color}
          route={item.route}
        />
      ))}
    </div>
    <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-6">
      {chartData.map((item, index) => (
        <StatsCard
          key={index}
          type="chart"
          title={item.title}
        />
      ))}
    </div>
    <Status/>
    </div>
  )
}

export default MainDashboard

const statsData = [
  {
    title: "Today's Followups",
    value: "0",
    icon: "ri-timer-line",
    color: "text-green-500",
    route: "/home/carddetails",
  },
  {
    title: "Tomorrow Followups",
    value: "0",
    icon: "ri-time-line",
    color: "text-gray-500",
    route: "/home/carddetails",
  },
  {
    title: "Pending Followups",
    value: "0",
    icon: "ri-history-line",
    color: "text-pink-500",
    route: "/home/carddetails",
  },
  {
    title: "Total Leads",
    value: "0",
    subtitle: "0 from this month",
    icon: "ri-bar-chart-box-line",
    color: "text-purple-500",
    route: "/lead/leads",
  },
  {
    title: "Total Fresh Leads",
    value: "0",
    subtitle: "0 from this month",
    icon: "ri-line-chart-line",
    color: "text-cyan-500",
    route: "/leads/fresh",
  },
  {
    title: "Expected Income",
    value: "₹ 0.00",
    subtitle: "From 0 Leads",
    icon: "ri-money-rupee-circle-line",
    color: "text-blue-500",
    route: "/income",
  },
];


const chartData = [
  { title: "Estimated Cost" },
  { title: "Lead Status" },
  { title: "Lead By Source" },
  { title: "Lead By Industries" },
];