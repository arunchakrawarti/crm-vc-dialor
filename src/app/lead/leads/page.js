import Mainleads from '@/components/pages/lead/leads/Index'
import LeadsSearch from '@/components/pages/lead/leads/LeadsSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout
      title="Leads"
      showSearch={true}
      searchContent={<LeadsSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Mainleads/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
