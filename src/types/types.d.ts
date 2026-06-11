interface Recipe {
  id: string
  title: string
  ingredients: string[]
  instructions: string[]
  beanOrigin: string
  waterTempCelsius: string
}

interface RecipeContext {
  recipes: Recipe[]
}
