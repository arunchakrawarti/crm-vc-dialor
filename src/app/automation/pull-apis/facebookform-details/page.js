import FacebookFormDetail from '@/components/pages/automation/pull-apis/FacebookFormDetail'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Facebook Forms"
      showSearch={true}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <FacebookFormDetail/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
