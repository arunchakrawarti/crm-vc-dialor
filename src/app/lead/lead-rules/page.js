import MainLeadRules from '@/components/pages/lead/lead-rules/Index'
import LeadsRulesSearch from '@/components/pages/lead/lead-rules/LeadsRulesSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Rule List"
      showSearch={true}
      searchContent={<LeadsRulesSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <MainLeadRules/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
