import Recycle from '@/components/pages/lead/lead-recyclebin/Recycle'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Recycle/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
