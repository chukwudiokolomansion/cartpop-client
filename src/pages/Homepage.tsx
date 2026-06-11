import { useCoffeeContext } from "../lib/useCoffeeContext"
import { Link } from "react-router-dom"

export default function Homepage() {
  const { recipes } = useCoffeeContext()

  return (
    <div className="flex gap-6 justify-center items-center min-h-screen">
      {recipes ? (
        recipes.map((recipe: Recipe) => (
          <div className="w-[25vw]">
            <Link to={`/coffees/${recipe.id}`}>
              <h1>{recipe.title}</h1>
            </Link>
            <p>{recipe.instructions}</p>
          </div>
        ))
      ) : (
        <span>loading!!💥</span>
      )}
    </div>
  )
}
