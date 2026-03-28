import BulkEmailLists from '@/components/pages/email-sms/bulk-sms&Email-list/BulkEmailLists'
import SendEmailListSearch from '@/components/pages/email-sms/bulk-sms&Email-list/SendEmailListSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Send Email List"
      showSearch={true}
      searchContent={<SendEmailListSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <BulkEmailLists/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
