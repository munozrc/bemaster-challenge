import { Link } from "react-router-dom";
import { LogoutIcon } from "../icons";

export function Header () {
  return (
    <div className="w-full h-14 px-5 bg-black">
      <header className="w-full h-full flex justify-between items-center">
        <h1 className="text-blue-300 font-bold">
          <Link to="/">MoviesApp</Link>
        </h1>
        <button className="text-slate-300 px-3">
          <LogoutIcon />
        </button>
      </header>
    </div>
  )
}