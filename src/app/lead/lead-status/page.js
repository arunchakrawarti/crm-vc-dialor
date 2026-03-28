import LeadStatus from '@/components/pages/lead/lead-status/LeadStatus'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Lead Status"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <LeadStatus/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
