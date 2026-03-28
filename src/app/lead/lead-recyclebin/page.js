import LeadRecycleSearch from '@/components/pages/lead/lead-recyclebin/LeadRecycleSearch'
import Recycle from '@/components/pages/lead/lead-recyclebin/Recycle'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Lead RecycleBin"
      showSearch={true}
      searchContent={<LeadRecycleSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Recycle/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
