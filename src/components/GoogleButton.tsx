import type { FC, ButtonHTMLAttributes } from "react"
import { GoogleIcon } from "./icons"

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const GoogleButton: FC<Props> = ({ ...restOfProps }) => {
  return (
    <button 
      className="flex items-center justify-center rounded-md text-slate-100 font-semibold bg-gray-100 shadow hover:bg-gray-200 h-10 px-4 py-2 disabled:opacity-90 disabled:cursor-not-allowed text-xl gap-2 transition-colors"
      {...restOfProps}
    >
      <GoogleIcon />
      <span className="text-gray-900 text-sm">Log in with Google</span>
    </button>
  )
}