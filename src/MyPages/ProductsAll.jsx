import React from 'react';
import ProductsApi from '../Components/ProductsApi';

function ProductsAll() {
  return (
    <>
      <div className='mt-5'>
        <div className='p-4 text-center'>
          <h1>products list</h1>
          
        </div>

        <div className='pt-4'>
        <ProductsApi />
        </div>
      </div>

    </>
  )
}

export default ProductsAll
