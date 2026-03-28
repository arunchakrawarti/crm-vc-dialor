import GoogleIntegration from '@/components/pages/automation/pull-apis/GoogleIntegration'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Google Lead Integration"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <GoogleIntegration/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
