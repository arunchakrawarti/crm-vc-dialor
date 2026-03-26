import Invoice from '@/components/pages/invoice/Invoice'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Invoice/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
