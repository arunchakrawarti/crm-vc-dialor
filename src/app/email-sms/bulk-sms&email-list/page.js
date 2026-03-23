import BulkSMSEmail from '@/components/pages/email-sms/bulk-sms&Email-list/BulkSMS'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <BulkSMSEmail/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
