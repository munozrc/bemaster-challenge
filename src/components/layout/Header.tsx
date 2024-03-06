import { Link } from "react-router-dom";
import { LogoutIcon } from "../icons";
import logoApp from "@/assets/logo.png"

export function Header () {
  return (
    <div className="w-full h-16 px-5 bg-zinc-900 md:px-28 lg:px-44">
      <header className="w-full h-full flex justify-between items-center">
        <h1 className="text-blue-300 font-bold">
          <Link to="/">
            <img src={logoApp} className="max-h-9"/>
          </Link>
        </h1>
        <Link to="/login" className="text-slate-300 px-3">
          <LogoutIcon />
        </Link>
      </header>
    </div>
  )
}