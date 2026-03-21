import ActivityRecord from '@/components/pages/report/activity-report/ActivityRecord'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <ActivityRecord/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
