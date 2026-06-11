import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <nav className="w-screen flex justify-evenly h-[5vh] bg-amber-950 items-center ">
      <Link
        to={"/"}
        className="hover:text-amber-400 transition-all ease-in-out"
      >
        Homepage
      </Link>
      <Link
        to={"/coffees/create-recipe"}
        className="hover:text-amber-400 transition-all ease-in-out"
      >
        Create recipe
      </Link>
    </nav>
  )
}
