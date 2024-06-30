import { redirect } from 'next/navigation';
import React from 'react'

const page = () => {
    const profile = null;

    if(!profile)redirect("products?search=product1&random=7899")
  return (
    <div>page</div>
  )
}

export default page