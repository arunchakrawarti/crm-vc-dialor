import PendingFollow from '@/components/pages/report/pending-followups/PendingFollow'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Pending FollowUp Report"
      showSearch={false}>
        <Suspense fallback={<div>Loading...</div>}>
        <PendingFollow/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
