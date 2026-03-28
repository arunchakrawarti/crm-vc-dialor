import TrackingDashboard from '@/components/pages/live-tracking/tracking-dashboard/TrackingDashboard'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Tracking Dashboard"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <TrackingDashboard/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
