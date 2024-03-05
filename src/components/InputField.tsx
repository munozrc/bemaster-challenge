import { FC, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  label?: string
}

export const InputField: FC<Props> = ({label, ...restOfProps}) => {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {label}
      </label>
      <input
        className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"  
        {...restOfProps}
      />
    </div>
  )
}