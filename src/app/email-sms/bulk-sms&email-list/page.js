import BulkSMSEmail from '@/components/pages/email-sms/bulk-sms&Email-list/BulkSMS'
import BulksmsEmailSearch from '@/components/pages/email-sms/bulk-sms&Email-list/BulksmsEmailSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Bulk SMS and Email List"
      showSearch={true}
      searchContent={<BulksmsEmailSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <BulkSMSEmail/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
