import MainLeadRules from '@/components/pages/lead/lead-rules/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <MainLeadRules/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
