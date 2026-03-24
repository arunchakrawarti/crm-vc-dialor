import Source from '@/components/pages/sources/Source'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Source/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
