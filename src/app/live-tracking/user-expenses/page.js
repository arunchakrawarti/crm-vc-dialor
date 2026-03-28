import UserExpenses from '@/components/pages/live-tracking/user-expenses/UserExpenses'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="User Expenses"
      showSearch={false}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <UserExpenses/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
