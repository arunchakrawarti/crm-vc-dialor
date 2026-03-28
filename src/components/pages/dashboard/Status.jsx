import StatsCard from "@/components/molecules/StatsCard";
import React from "react";

const Status = () => {
  return (
    <div>
      <div className="space-y-4 mt-5">
        {followupData.map((item, index) => (
          <StatsCard
            key={index}
            type="followup"
            title={item.title}
            count={item.count}
          />
        ))}
      </div>
    </div>
  );
};

export default Status;
const followupData = [
  {
    title: "For Today",
    count: 0,
  },
  {
    title: "For Tomorrow",
    count: 0,
  },
  {
    title: "For Pending",
    count: 0,
  },
];
