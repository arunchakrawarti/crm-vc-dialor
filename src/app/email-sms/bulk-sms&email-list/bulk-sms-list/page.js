import BulkSMSList from '@/components/pages/email-sms/bulk-sms&Email-list/BulkSMSList'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <BulkSMSList/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
