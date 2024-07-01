"use client"
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';

const ClientDataFetching = () => {
  // const [loading, setLoading] = useState(); 
  // const [users, setUsers] = useState(); 
  // async function fetchData(){
    //   try {
      //     setLoading(true);
      //     const response = await fetch("https://dummyjson.com/users");
      //     const data = await response.json();
      //     if(data?.users){
        //       setUsers(data.users);
        //       setLoading(false);
        //     }
        //   } catch (error) {
          //     console.log(error);
          //     setUsers([]);
          //     setLoading(false);
          //   }
          // }
          // useEffect(()=>{
            //   fetchData();
            // },[])

const fetcher= (...args)=>fetch(...args).then(res=>res.json());
const {data, error, isLoading} = useSWR("https://dummyjson.com/users", fetcher);
if(error)return <h1>Error</h1>
            if(isLoading)return <h3 className='text-3xl text-red'>Loading please wait</h3>
  return (
    <div>
      <h1>Client Data Fetching</h1>
      <div>
        <ul>
            {
                data && data?.users &&data?.users.length > 0 ? (
                  data.users.map((user)=>{
                           return <li className='text-red-800 text-xl cursor-pointer p-4'>
                            <Link href={`/server-data/${user.id}`}>{user.firstName}</Link>
                           </li>
                        })
                ): (<div>No Data Found</div>)
            }
        </ul>
    </div>
    </div>
  )
}

export default ClientDataFetching