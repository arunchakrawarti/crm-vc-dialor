"use client";
import React from 'react';
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import RecordStatus from '@/components/common/RecordStatus';
import { Download, Menu } from 'lucide-react';

const LeadReport = () => {
  const columns = [
    { label: "Users", key: "user" },
    { label: "Total Leads", key: "total" },
    { label: "Fresh Lead", key: "fresh" },
    { label: <span className="text-[#28a745]">Interested</span>, key: "interested" },
    { label: <span className="text-[#e83e8c]">Call Back</span>, key: "callback" },
    { label: <span className="text-[#17a2b8]">No Requirement</span>, key: "noReq" },
    { label: <span className="text-[#6f42c1]">Follow Up</span>, key: "followUp" },
  ];

  const data = [{ user: "Abhishek jaiswal", total: 0, fresh: 0 }];

  return (
    <div className="p-4 bg-gray-50 min-h-screen font-sans">
      <div className="bg-white border border-gray-200 rounded shadow-sm mb-6 p-10 relative overflow-hidden">
        <div className="absolute right-6 top-6 flex items-center gap-3">
  
  <Button className="bg-[#00adef] text-white p-2 rounded shadow-sm">
    <Download size={18} />
  </Button>

  <Button variant="danger" className="p-2">
    <Menu size={18} />
  </Button>

</div>
        <div className="text-center mb-20">
          <h2 className="text-xl font-bold text-gray-800">Leads by Status</h2>
          <p className="text-gray-400 text-xs mt-1">Distribution of leads in different categories</p>
        </div>

        
        <div className="relative h-32 px-10 md:px-24 flex items-center">
            
            
            <div className="absolute -left-5 top-1/2 -translate-y-1/2 -rotate-90 text-[10px] text-gray-500 font-bold tracking-wider">
                Leads Count
            </div>
            <div className="absolute left-10 md:left-20 top-1/2 -translate-y-1/2 text-gray-400 text-xs">
                0
            </div>

            
            <div className="absolute h-[1px] bg-gray-100 left-16 md:left-28 right-16 md:right-28 top-1/2"></div>
            
            <div className="absolute h-[2px] bg-[#00adef] left-16 md:left-28 right-16 md:right-28 top-1/2 z-10"></div>
            
           
            <div className="relative w-full flex justify-between items-center z-20">
                <GraphNode color="#14cc80" label="Interested" value="0" />
                <GraphNode color="#f06292" label="Call Back" value="0" isCenter={true} />
                <GraphNode color="#4dd0e1" label="No Requirement" value="0" />
                <GraphNode color="#9575cd" label="Follow Up" value="0" />
                <GraphNode color="#00adef" label="Fresh Lead" value="0" />
            </div>

           
            <div className="absolute bottom-0 left-6 right-6 h-[1.5px] bg-[#444]"></div>
        </div>
        <div className="mt-20 flex justify-center items-center gap-2 text-[10px] font-bold text-gray-500">
             <span className="text-[#00adef] text-lg">♦</span> LEADS BY STATUS
        </div>
      </div>
      <div className=" shadow-sm">
         <BasicTable columns={columns} data={data} />
      </div>
      <RecordStatus
                currentPage={1} 
                totalItems={0} 
                label="Leads" 
                showNumbers={false} 
                showDropdown={true} 
            />
    </div>
  );
};
const GraphNode = ({ color, label, value, isCenter }) => (
    <div className="relative flex flex-col items-center group">
        <span className="absolute -top-7 font-bold text-xs text-black">{value}</span>
        {isCenter && (
            <span className="absolute -top-7 -left-16 whitespace-nowrap text-xs font-semibold text-gray-800">
                Total Leads: 0
            </span>
        )}
        <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: color }}></div>
        <span className="absolute top-20 whitespace-nowrap text-[11px] font-medium text-gray-600">
            {label}
        </span>
    </div>
);

export default LeadReport;