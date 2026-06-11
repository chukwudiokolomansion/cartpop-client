import { useContext } from "react"
import { CoffeeContext } from "../context/Coffee.context"

const useCoffeeContext = () => {
  const ctx = useContext(CoffeeContext)

  if (!ctx) return null

  return ctx
}

export { useCoffeeContext }
