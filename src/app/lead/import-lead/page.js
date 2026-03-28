import Importantlead from '@/components/pages/lead/import-lead/Importantlead'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout   title="Import Export Leads"
  showSearch={false}
  rightContent={
    <button className="bg-red-500 text-white px-4 py-2 rounded shadow">
      WATCH VIDEO
    </button>}
      
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Importantlead/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
