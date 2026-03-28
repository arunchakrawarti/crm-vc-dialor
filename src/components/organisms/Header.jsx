"use client";
import React, { useState } from "react";
import Link from "next/link";

export default function Header({
  onMenuClick,
  title = "Dashboard",
  children,
  searchLayout = "left", // left / split
  showSearch = true,      // naya prop
}) {
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
          {showSearch && (
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <i className="ri-search-line text-xl"></i>
            </button>
          )}
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
          {showSearch && (
  <>
    <span className="text-gray-400">/</span>
    <button onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-blue-500">
      <i className="ri-search-line font-bold"></i>
    </button>
  </>
)}
        </div>
      </div>
      {showSearch && (
        <div
          className={`overflow-hidden transition-all duration-300 w-full`}
          style={{ maxHeight: isSearchOpen ? "400px" : "0" }}
        >
          <div
            className={`p-6 bg-white border-b w-full flex gap-4`}
            style={{
              justifyContent:
                searchLayout === "left" ? "flex-start" : "space-between",
            }}
          >
            {children}
          </div>
        </div>
      )}
    </div>
  );
}



// "use client";
// import React, { useState } from "react";
// import Link from "next/link";

// export default function Header({
//   onMenuClick,
//   title = "Dashboard",

//   // 🔹 Controls
//   showSearch = true,
//   searchLayout = "left", // left / split
//   searchContent = null,
//   rightContent = null,
// }) {
//   const [isSearchOpen, setIsSearchOpen] = useState(false);

//   return (
//     <div className="w-full flex flex-col">

//       {/* 🔥 TOP HEADER */}
//       <header className="h-16 bg-[#3f4d67] flex items-center justify-between px-4 shadow-md">
//         <button onClick={onMenuClick} className="text-white p-2">
//           <i className="ri-menu-2-line text-xl" />
//         </button>

//         <div className="flex items-center gap-6 text-white">
//           <div className="relative">
//             <i className="ri-notification-3-line text-xl"></i>
//             <span className="absolute -top-1 -right-2 bg-red-500 text-[10px] px-1.5 rounded-full">
//               0
//             </span>
//           </div>

//           {/* 🔍 Search Icon */}
//           {showSearch && (
//             <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
//               <i className="ri-search-line text-xl"></i>
//             </button>
//           )}

//           {/* 👤 Profile */}
//           <div className="h-9 w-9 rounded-full bg-white overflow-hidden border-2 border-white/20">
//             <img
//               src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
//               alt="user"
//             />
//           </div>
//         </div>
//       </header>

//       {/* 🔥 BREADCRUMB / TITLE ROW */}
//       <div className="bg-white border-b px-6 py-4 flex items-center shadow-sm">

//         {/* 🔹 LEFT (TITLE) */}
//         <div className="flex-1 min-w-0">
//           <h2 className="text-xl font-medium text-gray-700 truncate">
//             {title}
//           </h2>
//         </div>

//         {/* 🔹 RIGHT */}
//         <div className="flex items-center justify-end gap-3 flex-1">

//           {/* 👉 Priority 1: Custom Right Content */}
//           {rightContent ? (
//             rightContent
//           ) : showSearch ? (
//             <>
//               <Link href="/" className="text-blue-500 hover:underline">
//                 Dashboard
//               </Link>

//               <span className="text-gray-400">/</span>
//               <span className="text-gray-500">{title}</span>

//               {/* 🔍 Search toggle */}
//               <span className="text-gray-400">/</span>
//               <button
//                 onClick={() => setIsSearchOpen(!isSearchOpen)}
//                 className="text-blue-500"
//               >
//                 <i className="ri-search-line font-bold"></i>
//               </button>
//             </>
//           ) : null}

//         </div>
//       </div>

//       {/* 🔥 SEARCH FILTER PANEL */}
//       {showSearch && searchContent && (
//         <div
//           className="overflow-hidden transition-all duration-300 w-full"
//           style={{ maxHeight: isSearchOpen ? "500px" : "0" }}
//         >
//           <div
//             className="p-6 bg-white border-b w-full flex gap-4"
//             style={{
//               justifyContent:
//                 searchLayout === "left" ? "flex-start" : "space-between",
//             }}
//           >
//             {searchContent}
//           </div>
//         </div>
//       )}

//     </div>
//   );
// }