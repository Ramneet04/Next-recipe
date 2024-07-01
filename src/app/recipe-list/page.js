import RecipeList from '@/components/recipe-list';
import React from 'react'
async function fetchData(){
    try {
        const response = await fetch('https://dummyjson.com/recipes');
        const result = await response.json();
        return result?.recipes;
    } catch (error) {
        throw new Error(error);
    }
}
const page =async () => {
    const recipeList = await fetchData();

  return (
    <RecipeList recipeList={recipeList}></RecipeList>
  )
}

export default page