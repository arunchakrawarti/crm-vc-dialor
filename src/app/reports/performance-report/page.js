import PerformanceReport from '@/components/pages/report/performance-report/PerformanceReport'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <PerformanceReport/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
