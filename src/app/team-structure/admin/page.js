import Admin from '@/components/pages/team-structure/admins/Admin'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Admin/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
