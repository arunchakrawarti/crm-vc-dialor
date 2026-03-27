import MainDashboard from '@/components/pages/dashboard/Index'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = ({title}) => {
  return (
    <div>
      <MainLayout>
        <MainDashboard/>
      </MainLayout>
    </div>
  )
}

export default page
