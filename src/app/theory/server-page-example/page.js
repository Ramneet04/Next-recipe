import { fetchProducts } from '@/app/actions';
import React from 'react'

const ServerActionsExample =async () => {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div>
      <h1>ServerActionsExample - server Compoenents</h1>
      <div>
        {
          products.map((product)=>{
            return <div className='text-2xl font-semibold' key={product.id}>{product.id + "-> "}{product.title}</div>
          })
        }
      </div>

    </div>
  )
}

export default ServerActionsExample