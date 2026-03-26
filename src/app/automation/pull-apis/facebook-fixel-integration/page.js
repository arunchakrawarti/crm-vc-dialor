import FacebookPixelIntegration from '@/components/pages/automation/pull-apis/FacebookPixelIntegration'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <FacebookPixelIntegration/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
