import React from 'react'

const RecipeDetails = ({data}) => {
    console.log(data);
  return (
    <div>
        <div className="">
            <div>
                <img src={data?.image}></img>
                <p className='text-2xl text-red-800'>{data.name}</p>
                <ul>
                    {
                        data?.tags?.map((tag)=>{
                            return <li>{tag}</li>
                        })
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails