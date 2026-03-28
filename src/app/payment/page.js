import MainPayment from '@/components/pages/payment/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Payment Details"
      showSearch={false}
      >
        <MainPayment/>
      </MainLayout>
    </div>
  )
}

export default page
