import Maintask from '@/components/pages/task/Index'
import TaskSearch from '@/components/pages/task/TaskSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Tasks"
      showSearch={true}
      searchContent={<TaskSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Maintask/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
