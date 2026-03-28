import Branches from '@/components/pages/branches/Branches'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Branches"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Branches/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
