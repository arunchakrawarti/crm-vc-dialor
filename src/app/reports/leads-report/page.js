import LeadReport from '@/components/pages/report/leads-report/LeadReport'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <LeadReport/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
