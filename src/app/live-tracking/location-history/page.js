import LocationHistory from '@/components/pages/live-tracking/location-history/LocationHistory'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <LocationHistory/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
