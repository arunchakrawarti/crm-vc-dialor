import FacebookIntegration from '@/components/pages/automation/pull-apis/FacebookIntegration'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <FacebookIntegration/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
