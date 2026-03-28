import UserOffline from '@/components/pages/live-tracking/user-offline/UserOffline'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="User Offline"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <UserOffline/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
