import MainDashboard from '@/components/pages/dashboard/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout  title="Dashboard"
      showSearch={false}>
        <MainDashboard/>
      </MainLayout>
    </div>
  )
}

export default page
