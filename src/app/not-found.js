import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <>
    <div className='text-4xl'>NotFound</div>
    <Link href={"/"}>Go Back To Home</Link>
    </>
  )
}

export default NotFound