import Contact from '@/components/pages/contact/Contact'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Contact/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
