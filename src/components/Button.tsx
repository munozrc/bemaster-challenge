import type { FC, ButtonHTMLAttributes } from "react"

interface Props extends ButtonHTMLAttributes
<HTMLButtonElement> {}

export const Button: FC<Props> = ({ children, ...restOfProps }) => {
  return (
    <button 
      className="rounded-md text-sm text-slate-100 font-semibold bg-black shadow hover:bg-slate-950/90 h-10 px-4 py-2"
      {...restOfProps}
    >
      {children}
    </button>
  )
}