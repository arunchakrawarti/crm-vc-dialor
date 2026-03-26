import ErrorLog from '@/components/pages/automation/pull-apis/ErrorLog'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <ErrorLog/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
