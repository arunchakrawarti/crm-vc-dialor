import Button from "@/components/common/Button";
import { Search, Monitor, Download } from "lucide-react";

const Schedules = () => {
  return (
    <div className="bg-white border border-gray-200 rounded shadow-sm mt-6 min-h-[250px] flex flex-col relative overflow-hidden">
      <div className="flex-1 flex flex-col items-center justify-center p-12">
        <div className="relative mb-8 flex items-center justify-center">
          <div className="text-[#00adef] opacity-80">
            <Monitor size={100} strokeWidth={1} />
          </div>
          <div className="absolute bottom-[-10px] right-[-10px] bg-white rounded-full p-2 shadow-sm text-[#00adef]">
            <Search size={45} strokeWidth={3} />
          </div>
        </div>

        <h3 className="text-[#333] text-xl font-normal tracking-wide mt-4">
          You have no records found.
        </h3>
      </div>
    </div>
  );
};

export default Schedules;
