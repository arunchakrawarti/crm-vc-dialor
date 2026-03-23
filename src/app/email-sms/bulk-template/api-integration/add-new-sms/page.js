import AddnewApiIntegration from '@/components/pages/email-sms/bulk-template/AddnewApiIntegration'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <AddnewApiIntegration/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
