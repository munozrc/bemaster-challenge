import { logoutUser } from "@/services/auth.service";
import { Link, useNavigate } from "react-router-dom";
import { LogoutIcon } from "@/components/icons";
import logoApp from "@/assets/logo.png"

export function Header () {
  const navigate = useNavigate()

  const handleClick = () => {
    void logoutUser()
    navigate("/login")
  }

  return (
    <div className="w-full h-16 px-5 bg-zinc-900 md:px-28 lg:px-44">
      <header className="w-full h-full flex justify-between items-center">
        <h1 className="text-blue-300 font-bold">
          <Link to="/home">
            <img src={logoApp} className="max-h-9"/>
          </Link>
        </h1>
        <button onClick={handleClick} className="text-slate-300 px-3">
          <LogoutIcon />
        </button>
      </header>
    </div>
  )
}