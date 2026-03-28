import IvrLeads from '@/components/pages/ivr-leads/IvrLeads'
import IvrSearch from '@/components/pages/ivr-leads/IvrSearch'
import MainLayout from '@/components/templates/MainLayout'
import React from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="IVR Leads"
      showSearch={true}
      searchContent={<IvrSearch/>}
      >
        <IvrLeads/>
      </MainLayout>
    </div>
  )
}

export default page
