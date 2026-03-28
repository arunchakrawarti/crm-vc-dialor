import Taskreport from '@/components/pages/report/task-report/Taskreport'
import TaskReportSearch from '@/components/pages/report/task-report/TaskReportSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout  title="Task Report"
      searchContent={<TaskReportSearch />}
      showSearch={true} 
      searchLayout="left">
        <Suspense fallback={<div>Loading...</div>}>
        <Taskreport/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
