// "use client";
// import Button from "../common/Button";

// export default function Header({ onMenuClick }) {
//   return (
//     <header className="sticky top-0 z-40 w-full bg-[var(--color-white)] shadow">
//       <div className="flex items-center justify-between px-4 md:px-6 py-3">
//         <div className="flex items-center gap-3 w-full max-w-md">

//           <Button
//             onClick={onMenuClick}
//             className="flex h-9 w-9 items-center justify-center rounded-md text-[var(--color-gray-600)] lg:hidden hover:bg-gray-100"
//           >
//             <i className="ri-menu-2-line text-xl" />
//           </Button>

//           <div className="relative w-full">
//             <h1 className="font-bold text-2xl text-gray-600">Lead Management</h1>
//           </div>

//         </div>
//         <div className="flex items-center gap-4">

//           <button className="text-gray-500 text-lg hover:text-gray-700">
//             <i className="ri-computer-line"></i>
//           </button>

//           {/* theme icon */}
//           <button className="text-gray-500 text-lg hover:text-gray-700">
//             <i className="ri-sun-line"></i>
//           </button>

//           {/* notification */}
//           <div className="relative">
//             <button className="text-gray-500 text-lg hover:text-gray-700">
//               <i className="ri-notification-3-line"></i>
//             </button>

//             {/* red dot */}
//             <span className="absolute -top-1 -right-1 h-2 w-2 bg-red-500 rounded-full"></span>
//           </div>

//           {/* divider */}
//           <div className="h-6 w-px bg-gray-200"></div>

//           {/* user info */}
//           <div className="flex items-center gap-3">

//             <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] text-white font-semibold">
//               A
//             </div>

//             <div className="hidden sm:block">
//               <p className="text-sm font-medium text-gray-800">
//                 Lead User
//               </p>
//               <p className="text-xs text-gray-500">
//                 Super Admin
//               </p>
//             </div>

//           </div>

//         </div>

//       </div>
//     </header>
//   );
// }



"use client";
import React, { useState } from "react";
import Button from "../common/Button";
import Link from "next/link";

export default function Header({ onMenuClick, title = "Task Report" }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="flex flex-col w-full shadow-sm">
      <header className="h-16 w-full bg-gray-800 flex-none z-50">
        <div className="flex items-center justify-between px-4 h-full">
          <div className="flex items-center gap-4">
            <Button
              onClick={onMenuClick}
              className="flex h-9 w-9 items-center justify-center rounded-md text-white hover:bg-white/10"
            >
              <i className="ri-menu-2-line text-xl" />
            </Button>
          </div>

          <div className="flex items-center gap-6 text-white">
            <div className="relative cursor-pointer">
              <i className="ri-notification-3-line text-xl"></i>
            </div>
            <button 
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className={`hover:text-blue-300 transition-colors ${isSearchOpen ? 'text-blue-300' : ''}`}
            >
              <i className="ri-search-line text-xl"></i>
            </button>

            <div className="h-9 w-9 rounded-full bg-white flex items-center justify-center border-2 border-white/20 overflow-hidden cursor-pointer">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
            </div>
          </div>
        </div>
      </header>
      {isSearchOpen && (
        <div className="w-full bg-white border-b border-gray-200 px-6 py-3 animate-in slide-in-from-top duration-300">
          <div className="relative max-w-2xl mx-auto flex items-center gap-2">
            <i className="ri-search-line absolute left-3 text-gray-400"></i>
            <input 
              type="text" 
              placeholder="Search here..." 
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
              autoFocus
            />
            <button onClick={() => setIsSearchOpen(false)} className="text-gray-400 hover:text-red-500">
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>
        </div>
      )}
      <div className="w-full bg-white border-b border-gray-200 px-4 md:px-6 py-4 flex items-center justify-between shadow-sm transition-all">
      
        <h2 className="text-xl font-medium text-gray-700 truncate">
          {title}
        </h2>
      
        <div className="flex items-center gap-2 text-[13px] font-normal">
          <Link href="/">
          <span className=" sm:inline text-blue-500 cursor-pointer hover:underline">
            Dashboard
          </span>
          </Link>
          
          <span className="hidden sm:inline text-gray-400">/</span>
        
          <span className="text-gray-500 truncate max-w-[100px] md:max-w-none">
            {title}
          </span>
          
          <span className="text-gray-400">/</span>
          <button 
            className="hover:scale-110 transition-transform p-1"
            onClick={() => console.log('Bottom Search Triggered')}
          >
            <i className="ri-search-line text-blue-500 font-bold text-lg"></i>
          </button>
        </div>
      </div>
    </div>
  );
}