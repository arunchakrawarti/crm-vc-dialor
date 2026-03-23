import BulkEmailLists from '@/components/pages/email-sms/bulk-sms&Email-list/BulkEmailLists'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <BulkEmailLists/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
