import PullMain from '@/components/pages/automation/pull-apis/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <PullMain/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
