"use client"; 
import BasicTable from '@/components/common/BasicTable';
import Button from '@/components/common/Button';
import { Pencil, Trash2, Plus, Play } from 'lucide-react';
import { useState } from 'react';
import LeadModal from './LeadModal';

const LeadStatus = () => {
  const [open, setOpen] = useState("false")
  const tableData = [
    { id: 1, status: "Interested (0)", isDefault: "False", conversion: "Won", color: "bg-[#00d26a]" },
    { id: 2, status: "Call Back (0)", isDefault: "False", conversion: "Open", color: "bg-[#ff33cc]" },
    { id: 3, status: "No Requirement (0)", isDefault: "False", conversion: "Lost", color: "bg-[#7fd8d8]" },
    { id: 4, status: "Follow Up (0)", isDefault: "False", conversion: "Open", color: "bg-[#9966ff]" },
  ];

  const columns = [
    {
      label: "Status",
      key: "status",
      render: (val, row) => (
        <div className={`${row.color} text-white px-3 py-1.5 rounded text-sm font-medium w-fit min-w-[180px]`}>
          {val}
        </div>
      )
    },
    { label: "Is Default Status", key: "isDefault" },
    { label: "Lead Conversion Status", key: "conversion" },
  ];

  const ActionButtons = [
    ({ row }) => (
      <button className="p-2.5 bg-[#2196f3] text-white rounded-full shadow-md hover:bg-blue-600 transition-all">
        <Pencil size={16} fill="white" />
      </button>
    ),
    ({ row }) => (
      <button className="p-2.5 bg-[#f44336] text-white rounded-full shadow-md hover:bg-red-600 transition-all">
        <Trash2 size={16} fill="white" />
      </button>
    ),
  ];

  return (
    <div>
        <div className="flex justify-between items-center bg-white p-2">
        <Button variant="tertiary">
          WATCH VIDEO <Play size={18} fill="red" />
        </Button>
        
        <Button  onClick={() => setOpen(true)} variant='success'>
          <Plus size={24} strokeWidth={3} />
        </Button>
      </div>
    <div className="p-6 bg-gray-50">
       <BasicTable 
          columns={columns} 
          data={tableData} 
          actions={ActionButtons}
          pagination={true}
          wrapperClassName="rounded-none border-none shadow-none" 
        />
    </div>
     <LeadModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
};

export default LeadStatus;