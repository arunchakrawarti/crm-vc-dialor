// "use client";
// import React, { useState } from "react";
// import Button from "../common/Button";
// import Link from "next/link";

// export default function Header({ onMenuClick, title = "Task Report" }) {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   return (
//     <>
//       <header className="fixed top-0 left-0 right-0 h-16 bg-gray-800 z-100 flex items-center justify-between px-4">
      
//         <Button
//           onClick={onMenuClick}
//           className="flex h-9 w-9 items-center justify-center text-white"
//         >
//           <i className="ri-menu-2-line text-xl" />
//         </Button>
//         <div className="flex items-center gap-6 text-white">
//           <i className="ri-notification-3-line text-xl"></i>

//           <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
//             <i className="ri-search-line text-xl"></i>
//           </button>

//           <div className="h-9 w-9 rounded-full bg-white overflow-hidden">
//             <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" />
//           </div>
//         </div>
//       </header>
//       <div className="h-10"></div>
//       <div className="w-full">
    
//         <div className="bg-white border-b px-4 py-4 flex justify-between items-center">
          
//           <h2 className="text-lg font-medium">{title}</h2>
//           <div className="flex gap-2 text-sm">
//             <Link href="/" className="text-blue-500 text-lg">
//               Dashboard
//             </Link>
//             <span className="text-lg">/</span>
//             <span className="text-lg">{title}</span>
//             <span className="text-lg">/</span>
// <button
//       onClick={() => setIsSearchOpen(true)}
//       className="ml-2 text-blue-500 text-lg hover:scale-110 transition"
//     >
//       <i className="ri-search-line text-lg"></i>
//     </button>

//           </div>

//         </div>
//       </div>
//     </>
//   );
// }



"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header({ onMenuClick, title = "Task Report", children }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="w-full flex flex-col">
      <header className="h-16 bg-[#3f4d67] flex items-center justify-between px-4 z-[100] shadow-md">
        <button onClick={onMenuClick} className="text-white p-2">
          <i className="ri-menu-2-line text-xl" />
        </button>
        
        <div className="flex items-center gap-6 text-white">
          <div className="relative">
            <i className="ri-notification-3-line text-xl"></i>
            <span className="absolute -top-1 -right-2 bg-red-500 text-[10px] px-1.5 rounded-full">0</span>
          </div>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
            <i className="ri-search-line text-xl"></i>
          </button>
          <div className="h-9 w-9 rounded-full bg-white overflow-hidden border-2 border-white/20">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="user" />
          </div>
        </div>
      </header>
      <div className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
        <h2 className="text-xl font-medium text-gray-700">{title}</h2>
        <div className="flex items-center gap-2 text-[14px]">
          <Link href="/" className="text-blue-500 hover:underline">Dashboard</Link>
          <span className="text-gray-400">/</span>
          <span className="text-gray-500">{title}</span>
          <span className="text-gray-400">/</span>
          <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-blue-500">
            <i className="ri-search-line font-bold"></i>
          </button>
        </div>
      </div>
      {isSearchOpen && (
        <div className="p-6 bg-white border-b animate-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
}