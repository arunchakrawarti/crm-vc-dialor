"use client";
import React, { useState } from "react";
import Button from "@/components/common/Button";
import { Monitor } from "lucide-react";
import CheckLeadPopup from "./CheckLeadPopup";
import AllLeadPopup from "./AllLeadPopup";

const Recycle = () => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm min-h-[450px] flex flex-col relative overflow-hidden">
      <div className="flex justify-end gap-3 p-4 border-b border-gray-300">
        <Button variant="success" onClick={() => setOpen(true)}>
          RESTORE CHECKED LEADS
        </Button>
        <Button variant="success" onClick={() => setModal(true)}>
          RESTORE ALL 0 LEADS
        </Button>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center p-12 text-center">
        <div className="mb-6 text-[#00AEEF] opacity-80">
          <Monitor size={90} strokeWidth={1.5} />
        </div>

        <h3 className="text-[#333] text-lg font-normal">
          You have no records found.
        </h3>
      </div>
      <CheckLeadPopup isOpen={open} onClose={() => setOpen(false)} />
      <AllLeadPopup isOpen={modal} onClose={() => setModal(false)} />
    </div>
  );
};

export default Recycle;
