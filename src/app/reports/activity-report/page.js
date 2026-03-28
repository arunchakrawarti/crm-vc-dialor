import ActivityRecord from '@/components/pages/report/activity-report/ActivityRecord'
import ActivityReportSearch from '@/components/pages/report/activity-report/ActivityReportSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout
      title="Activity Report"
      showSearch={true}
      searchContent={<ActivityReportSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <ActivityRecord/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
