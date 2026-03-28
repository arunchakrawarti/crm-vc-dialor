import UserAttendence from '@/components/pages/live-tracking/user-attendence/UserAttendence'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="User Attendence"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <UserAttendence/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
