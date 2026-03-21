import Mainleads from '@/components/pages/lead/leads/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Mainleads/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
