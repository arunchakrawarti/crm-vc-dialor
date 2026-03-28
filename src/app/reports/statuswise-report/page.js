import StatuswiseReport from '@/components/pages/report/statuswise-report/StatuswiseReport'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Status Wise Report"
      showSearch={false}>
        <Suspense fallback={<div>Loading...</div>}>
        <StatuswiseReport/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
