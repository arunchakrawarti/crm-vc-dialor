import Taskreport from '@/components/pages/report/task-report/Taskreport'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Taskreport/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
