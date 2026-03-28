import Abe from '@/components/pages/team-structure/abe/Abe'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Area Business Execution(ABE)"
      showSearch={false}>
        <Suspense fallback={<div>Loading...</div>}>
        <Abe/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
