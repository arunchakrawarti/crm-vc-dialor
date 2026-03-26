import Maintask from '@/components/pages/task/Index'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Maintask/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
