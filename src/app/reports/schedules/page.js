import Schedules from '@/components/pages/report/schedules/Schedules'
import SchedulesSearch from '@/components/pages/report/schedules/SchedulesSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout
      title="Followup/Meeting"
      showSearch={true}
      searchContent={<SchedulesSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Schedules/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
