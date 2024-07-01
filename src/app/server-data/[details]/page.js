
import React from 'react'

async function fetchUserDetails (userId){
  try {
    const response = await fetch(`https://dummyjson.com/users/${userId}`);
    const result=response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
const page = async ({params}) => {

  console.log(params);
  const userDetails = await fetchUserDetails(params.details);
  return (
    <div>
          <div>
            <h1>{userDetails.firstName}</h1>
            <h1>{userDetails.lastName}</h1>
            <h1>{userDetails.email}</h1>
          </div>
    </div>
  )
}

export default page