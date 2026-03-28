import MainCreateEmail from '@/components/pages/email-sms/create-email/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Send Mail Seperately"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <MainCreateEmail/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
