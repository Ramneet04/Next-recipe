"use client"
import { usePathname, useSearchParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const pathName = usePathname();
    const searchParams = useSearchParams();
    console.log(searchParams.get("search"));
    console.log(searchParams.get("random"));
  return (
    <div>Cart</div>
  )
}

export default page