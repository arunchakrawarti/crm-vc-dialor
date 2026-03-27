import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full bg-blue-500 text-white px-4 md:px-8 py-3">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-sm">
        
        {/* LEFT */}
        <p className="text-center md:text-left">
          Copyright © 2026 Variable Soft All rights
        </p>

        {/* RIGHT */}
        <p className="text-center md:text-right break-all">
          C_UID 3e960f00-9e45-49b8-a131-37f12343ff79
        </p>

      </div>

    </footer>
  )
}

export default Footer