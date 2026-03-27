import { Monitor } from 'lucide-react'
import React from 'react'

const Followup = () => {
  return (
   <div className="bg-white  rounded-md shadow-sm min-h-[450px] flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center text-center p-6">
        <div className="mb-6 text-blue-600">
          <Monitor size={100} strokeWidth={1} />
        </div>

        <p className="text-gray-500 text-xl">
          You have no records found.
        </p>
      </div>
    </div>
  )
}

export default Followup
