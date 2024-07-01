import {
    Card,
    CardContent,
  } from "@/components/ui/card"
import Link from "next/link";

  
import React from 'react'

const RecipeList = ({recipeList}) => {
    console.log(recipeList);
  return (
    <>
    <div className="text-center text-4xl font-bold my-6">Recipes</div>
    <div className=" w-[80%] flex justify-between mx-auto gap-10 items-center flex-wrap">
        {recipeList.map((recipe) => (
            <Link href={`recipe-list/${recipe.id}`} key={recipe.id}>
            <Card className="w-[300px]">
                <CardContent className="rounded-md overflow-hidden">
                    <img src={recipe.image} className=""></img>
                    <div className="text-2xl font-bold">{recipe.name}</div>
                    <div className="text-lg">Rating {recipe.rating}</div>
                </CardContent>
            </Card>
            </Link>
        ))}
    </div>
    </>
  )
}

export default RecipeList