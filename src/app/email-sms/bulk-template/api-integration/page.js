import ApiIntegration from '@/components/pages/email-sms/bulk-template/ApiIntegration'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <ApiIntegration/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
