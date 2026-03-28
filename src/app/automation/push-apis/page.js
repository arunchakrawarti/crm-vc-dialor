import PushMain from '@/components/pages/automation/push-apis/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Push Data"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <PushMain/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
