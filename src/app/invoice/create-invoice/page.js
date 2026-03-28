import CreateInvoice from '@/components/pages/invoice/CreateInvoice'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Create Invoice">
        <Suspense fallback={<div>Loading...</div>}>
        <CreateInvoice/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
