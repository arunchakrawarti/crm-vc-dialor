import Category from '@/components/pages/products/category/Category'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Category/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
