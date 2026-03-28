import Contact from '@/components/pages/contact/Contact'
import ContactSearch from '@/components/pages/contact/ContactSearch'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout title="Contact"
      showSearch={true}
      searchContent={<ContactSearch/>}
      >
        <Suspense fallback={<div>Loading...</div>}>
        <Contact/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
