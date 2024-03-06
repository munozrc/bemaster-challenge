import { InputHTMLAttributes, forwardRef } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement>{
  error?: string
  label?: string
}

export const InputField = forwardRef<HTMLInputElement,Props >(({label, error, ...restOfProps}, ref) => {
  const isValidInput = error ? "border-red-500 outline-red-500" : ""
  return (
    <div className="grid">
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 mb-2">
        {label}
      </label>
      <input  
        ref={ref}
        className={`${isValidInput} flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm`}  
        {...restOfProps}
      />
      <div className="min-h-5 text-red-500 text-sm">{error}</div>
    </div>
  )
})