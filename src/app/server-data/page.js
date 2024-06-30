import Link from 'next/link';
import React from 'react'

async function fetchData(){
    try {
        const response = await fetch('https://dummyjson.com/users');
        const result = await response.json();
        return result.users;
    } catch (error) {
        throw new Error(error);
    }
}
const ServerDataFetching =async () => {
    const lisOfUsers = await fetchData();
    console.log(lisOfUsers);
  return (
    <div>
        <ul>
            {
                lisOfUsers && lisOfUsers.length > 0 ? (
                        lisOfUsers.map((user)=>{
                           return <li className='text-red-800 text-xl cursor-pointer p-4'>
                            <Link href={`/server-data/${user.id}`}>{user.ein}</Link>
                           </li>
                        })
                ): (<div>No Data Found</div>)
            }
        </ul>
    </div>
  )
}

export default ServerDataFetching