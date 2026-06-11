import { useEffect, useState } from "react"
import { getRecipe } from "../lib/api"
import { useParams } from "react-router-dom"

type IdParams = {
  id?: string
}
export default function CoffeeDetails() {
  const { id } = useParams<IdParams>()
  const [recipe, setRecipe] = useState<Recipe | null>(null)
  useEffect(() => {
    getRecipe(id, setRecipe)
  }, [id])
  return (
    <div className=" flex items-center justify-center flex-col gap-8">
      {recipe ? (
        <>
          <h1>{recipe.title}</h1>

          <p className="w-[20%]">Instructions: {recipe.instructions}</p>
          <h2>Ingredients:</h2>
          <ul>
            {recipe.ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </>
      ) : (
        <span>loading</span>
      )}
    </div>
  )
}
