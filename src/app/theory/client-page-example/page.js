"use client"
import { fetchProducts } from '@/app/actions'
import React, { useEffect, useState } from 'react'

const ClientPageExample = () => {
    const [product, setProduct] = useState([]);
    async function getProducts(){
        const response = await fetchProducts();
        if(response){
            setProduct(response);
        }
    }
    useEffect(()=>{
        getProducts();
    },[])
  return (
    <div>
        <h1>ClientPageExample</h1>
        <div>
        {
          product.map((pr)=>{
            return <div className='text-2xl font-semibold' key={pr.id}>{pr.id + "-> "}{pr.title}</div>
          })
        }
        </div>
    </div>
  )
}

export default ClientPageExample