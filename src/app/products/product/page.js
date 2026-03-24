import Product from '@/components/pages/products/product/Product'
import MainLayout from '@/components/templates/MainLayout'
import React, { Suspense } from 'react'

const page = () => {
  return (
    <div>
      <MainLayout>
        <Suspense fallback={<div>Loading...</div>}>
        <Product/>
        </Suspense>
      </MainLayout>
    </div>
  )
}

export default page
