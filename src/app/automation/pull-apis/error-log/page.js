import ErrorLog from '@/components/pages/automation/pull-apis/ErrorLog'
import ErrorLogSearch from '@/components/pages/automation/pull-apis/ErrorLogSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Facebook Error Logs"
      searchContent={<ErrorLogSearch/>}
      showSearch={true}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <ErrorLog/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
