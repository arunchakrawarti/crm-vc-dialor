import BulkSMS from '@/components/pages/email-sms/bulk-template/BulkSMS'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <BulkSMS/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
