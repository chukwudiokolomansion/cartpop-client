import axios from "axios"

const api = axios.create({ baseURL: import.meta.env.VITE_API_URL })

const getRecipes = async (
  setRecipes: React.Dispatch<React.SetStateAction<Recipe[] | null>>,
) => {
  try {
    const response = await api.get("/coffee")
    console.log(response.data)
    setRecipes(response.data)
    return response.status
  } catch (error) {
    console.log(error)
  }
}

const getRecipe = async (
  id: string,
  setRecipe: React.Dispatch<React.SetStateAction<Recipe | null>>,
) => {
  try {
    if (!id) {
      return "provide id"
    }
    const response = await api.get(`/coffee/${id}`)
    setRecipe(response.data)
  } catch (error) {
    console.log(error)
  }
}

const deleteRecipe = async (id: string) => {
  try {
    const response = await api.delete(`/coffee/${id}`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

const createRecipe = async (e: React.SubmitEvent, body: Recipe) => {
  e.preventDefault()
  try {
    const response = await api.post("/coffee", body)
    return response.data
  } catch (error) {
    console.log(error)
  }
}

export { api, getRecipes, getRecipe, deleteRecipe, createRecipe }
