"use client";
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import RecordStatus from '@/components/common/RecordStatus';
import React from 'react'; 

const Taskreport = () => {

  const columns = [
    { label: "Users", key: "user" },
    { label: "Total Tasks", key: "total" },
    { label: "Not Started Work Task", key: "notStarted" },
    { label: "InProgress Task", key: "inProgress" },
    { label: "Completed Task", key: "completed" },
  ];

  const data = [
    { user: "Abhishek Jaiswal", total: 0, notStarted: 0, inProgress: 0, completed: 0 }
  ];

  return (
    <div className="bg-[#f4f7f6]  font-sans">
      <div className="flex justify-end mb-4">
        <h2 className="text-[16px] font-bold text-gray-800">Total Task - 0</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="md:col-span-1 bg-white p-4 rounded-lg shadow-sm border border-gray-200 relative">
          <div className="flex justify-between items-center mb-4">
            <h3 className="w-full text-center font-bold text-[#495057] text-lg">Status wise graph</h3>
            <Button variant='danger'>☰</Button>
          </div>
          <div className="h-64 flex items-center justify-center relative">
            <div className="w-48 h-48 rounded-full border-[1px] border-gray-300"></div>
            <div className="absolute right-0 top-1/4 text-[11px] font-bold leading-tight">
              <p className="text-pink-500">Not Started<br/>Work Task:<br/>0/0 (NaN%)</p>
              <p className="text-cyan-500 mt-4">Completed Task:<br/>0/0 (NaN%)</p>
            </div>
          </div>
        </div>
        <div className="md:col-span-2 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="w-full text-center font-bold text-[#495057] text-lg">User Status Wise Graph</h3>
            <Button variant='danger'>☰</Button>
          </div>
          <div className="h-64 border-b border-gray-800 relative flex items-end">
             <span className="absolute -left-4 bottom-1/2 -rotate-90 text-gray-500 text-sm">Task</span>
          </div>
          <div className="flex justify-center gap-6 mt-4 text-[13px] text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-pink-400"></span> Not Started Work Task
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span> InProgress Task
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-cyan-400"></span> Completed Task
            </div>
          </div>
        </div>

      </div>
      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
        <BasicTable 
          columns={columns} 
          data={data} 
          pagination={true} 
          wrapperClassName="border-none" 
        />
      </div>
<RecordStatus 
  currentPage={1} 
  totalItems={1}
  showNumbers={true} 
  showDropdown={true}
  label="Users"
/>
    </div>
  );
};

export default Taskreport;