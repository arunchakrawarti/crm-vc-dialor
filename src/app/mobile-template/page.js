import MobileTemplateTable from '@/components/pages/mobile-template/MobileTemplateTable'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MobileTemplateTable/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
