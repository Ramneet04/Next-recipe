import React from 'react'

const page = ({searchParams}) => {
  console.log(searchParams.search);
  console.log(searchParams.random);
  return (
    <div>Hello Products</div>
  )
}

export default page