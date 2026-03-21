import Abm from '@/components/pages/team-structure/abm/Abm'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Abm/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
