import { createContext, useEffect, useState } from "react"
import { getRecipes } from "../lib/api"

const CoffeeContext = createContext()

export default function CoffeeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null)

  useEffect(() => {
    getRecipes(setRecipes)
  }, [])

  return (
    <CoffeeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </CoffeeContext.Provider>
  )
}
export { CoffeeContext }
