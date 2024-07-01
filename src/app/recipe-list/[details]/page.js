import RecipeDetails from '@/components/recipe-details/page';
import React from 'react'
async function fetchDetails (Id){
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${Id}`);
    const result=response.json();
    return result;
  } catch (error) {
    throw new Error(error);
  }
}
const page = async ({params}) => {
  const getRecipe = await fetchDetails(params.details);
  return (
    <div>
        <div>This is Recipe Details Page</div>
        <div>
          <RecipeDetails data={getRecipe}></RecipeDetails>
        </div>
    </div>
  )
}

export default page