import AddnewSmtp from '@/components/pages/email-sms/create-email/AddnewSmtp'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
         <Suspense fallback={<div>Loading...</div>}>
        <AddnewSmtp/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
