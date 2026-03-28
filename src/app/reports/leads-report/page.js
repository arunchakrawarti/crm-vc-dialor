import LeadReport from '@/components/pages/report/leads-report/LeadReport'
import LeadReportSearch from '@/components/pages/report/leads-report/LeadReportSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Lead Report"
      showSearch={true}
      searchContent={<LeadReportSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <LeadReport/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
