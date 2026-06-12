import { createContext, useEffect, useState } from "react"
import { getRecipes } from "../lib/api"

const CartpopContext = createContext()

export default function CartpopProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null)

  useEffect(() => {
    getRecipes(setRecipes)
  }, [])

  return (
    <CartpopContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </CartpopContext.Provider>
  )
}
export { CartpopContext }
