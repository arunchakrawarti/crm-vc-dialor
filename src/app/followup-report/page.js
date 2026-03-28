import Followupstatus from '@/components/pages/followup-report/Followupstatus'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Follow-Ups"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Followupstatus/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
