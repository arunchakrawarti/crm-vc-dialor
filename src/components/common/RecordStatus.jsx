// import React from 'react';

// const RecordStatus = ({ 
//   currentPage = 1, 
//   totalItems = 0, 
//   itemsPerPage = 10, 
//   onPageChange,
//   showDropdown = true, 
//   showStatus = true,   
//   showNumbers = true,   
//   label = "Users"      
// }) => {
  
//   const totalPages = Math.ceil(totalItems / itemsPerPage);
//   const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
//   const endItem = Math.min(currentPage * itemsPerPage, totalItems);

//   return (
//     <div className="flex flex-col gap-4 p-4 font-sans text-sm text-gray-700">
//       {showDropdown && (
//         <div className="flex justify-start">
//           <select className="border rounded px-2 py-1 outline-none focus:ring-1 ring-blue-400">
//             <option>10</option>
//             <option>20</option>
//             <option>50</option>
//           </select>
//         </div>
//       )}
//       {showStatus && (
//         <div className="w-full bg-gray-50 border border-gray-200 rounded-md py-3 px-4 flex items-center gap-2">
//           <span>Showing</span>
//           <span className="bg-green-700 text-white px-3 py-0.5 rounded-full">{startItem}</span>
//           <span>to</span>
//           <span className="bg-green-700 text-white px-3 py-0.5 rounded-full">{endItem}</span>
//           <span>of</span>
//           <span className="bg-blue-500 text-white px-3 py-0.5 rounded-full">{totalItems}</span>
//           <span>{label}</span>
//         </div>
//       )}
//       {(showNumbers || totalPages > 0) && (
//         <div className="flex items-center border rounded-md w-fit overflow-hidden divide-x bg-white">
//           <button className="px-3 py-2 hover:bg-gray-100 font-semibold">« First</button>
//           <button className="px-3 py-2 hover:bg-gray-100 font-semibold">‹ Previous</button>
//           {showNumbers && totalItems > 0 && (
//             <button className="px-4 py-2 bg-cyan-500 text-white font-bold">{currentPage}</button>
//           )}

//           <button className="px-3 py-2 hover:bg-gray-100 font-semibold">Next ›</button>
//           <button className="px-3 py-2 hover:bg-gray-100 font-semibold">Last »</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RecordStatus;


import React from 'react';

const RecordStatus = ({ 
  currentPage = 1, 
  totalItems = 0, 
  itemsPerPage = 10, 
  onPageChange,
  showDropdown = true, 
  showStatus = true,   
  showNumbers = true,   
  label = "Users"      
}) => {
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // --- Logic Fix Start ---
  // Agar totalItems 0 hain, toh start bhi 0 hona chahiye. 
  // Agar data hai, toh hi calculation karega.
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * itemsPerPage + 1;
  
  // End item totalItems se bada nahi ho sakta
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);
  // --- Logic Fix End ---

  return (
    <div className="flex flex-col gap-4 p-4 font-sans text-sm text-gray-700">
      
      {/* 1. Dropdown */}
      {showDropdown && (
        <div className="flex justify-start">
          <select 
            className="border rounded px-2 py-1 outline-none focus:ring-1 ring-blue-400"
            value={itemsPerPage}
            onChange={(e) => console.log(e.target.value)}
          >
            <option value="1">1</option>
            <option value="10">10</option>
            <option value="20">20</option>
          </select>
        </div>
      )}

      {/* 2. Status Bar (Handling 0 0 0 or 1 0 0) */}
      {showStatus && (
        <div className="w-full bg-gray-50 border border-gray-100 rounded-md py-3 px-4 flex items-center gap-2">
          <span>Showing</span>
          {/* Agar aapko manually 1 dikhana hai bhale hi data 0 ho (Image ki tarah), 
              toh yaha {totalItems === 0 ? 1 : startItem} likh sakte ho */}
          <span className="bg-[#41764a] text-white px-3 py-0.5 rounded-full min-w-[30px] text-center">
            {totalItems === 0 ? 1 : startItem}
          </span>
          
          <span>to</span>
          
          <span className="bg-[#41764a] text-white px-3 py-0.5 rounded-full min-w-[30px] text-center">
            {endItem}
          </span>
          
          <span>of</span>
          
          <span className="bg-[#428bca] text-white px-3 py-0.5 rounded-full min-w-[30px] text-center">
            {totalItems}
          </span>
          
          <span>{label}</span>
        </div>
      )}

      {/* 3. Navigation Buttons */}
      <div className="flex items-center border border-gray-300 rounded-md w-fit overflow-hidden divide-x divide-gray-300 bg-white">
        <button className="px-3 py-2 hover:bg-gray-100 flex items-center gap-1">
          <span className="text-[10px]">◀◀</span> First
        </button>
        <button className="px-3 py-2 hover:bg-gray-100 flex items-center gap-1">
          <span className="text-[10px]">◀</span> Previous
        </button>
        
        {/* Page Number Button: Only if data exists */}
        {showNumbers && totalItems > 0 && (
          <button className="px-4 py-2 bg-[#00adef] text-white font-bold">
            {currentPage}
          </button>
        )}

        <button className="px-3 py-2 hover:bg-gray-100 flex items-center gap-1">
          Next <span className="text-[10px]">▶</span>
        </button>
        <button className="px-3 py-2 hover:bg-gray-100 flex items-center gap-1">
          Last <span className="text-[10px]">▶▶</span>
        </button>
      </div>
    </div>
  );
};

export default RecordStatus;