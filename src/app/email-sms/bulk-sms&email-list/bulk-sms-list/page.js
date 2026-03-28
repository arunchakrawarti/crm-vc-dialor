import BulkSMSList from '@/components/pages/email-sms/bulk-sms&Email-list/BulkSMSList'
import BulksmsListSearch from '@/components/pages/email-sms/bulk-sms&Email-list/BulksmsListSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Send SMS List"
      showSearch={true}
      searchContent={<BulksmsListSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <BulkSMSList/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
