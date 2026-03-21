import Schedules from '@/components/pages/report/schedules/Schedules'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Schedules/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
