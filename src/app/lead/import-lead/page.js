import Importantlead from '@/components/pages/lead/import-lead/Importantlead'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Importantlead/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
