import EmailHistory from '@/components/pages/email-sms/email-history/EmailHistory'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Email History"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <EmailHistory/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
