import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "@/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, InputField } from "@/components";
import { SpinnerIcon } from "@/components/icons";
import { Toaster } from 'sonner'

interface Inputs {
  email: string
  password: string
}

export function LoginPage (): JSX.Element {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema)
  })

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log({data})
  }

  return (
    <div className="container relative w-full h-full flex-col items-center justify-center md:grid md:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900"></div>
      </div>
      <div className="flex w-full h-full p-10">
        <form 
          className="mx-auto flex w-full flex-col justify-center sm:w-[350px] gap-1"
          onSubmit={handleSubmit(onSubmit)}
        >
          <header className="w-full flex flex-col justify-center pb-6">
            <h2 className="text-center font-bold text-4xl">Welcome 🙌</h2>
          </header>
          <InputField
            label="Email"
            placeholder="user@example.com"
            error={errors.email?.message}
            {...register("email", { required: "email is required" })}
          />
          <InputField
            type="password"
            label="Password"
            placeholder="Enter password"
            error={errors.password?.message}
            {...register("password", { required: "Password is required" })}
          />
          <div className="flex w-full flex-col pt-4">
            <Button disabled={isSubmitting}>
              {isSubmitting ? <SpinnerIcon /> : "Login"}
            </Button>
          </div>
        </form>
        <Toaster position="top-right" richColors />
      </div>
    </div>
  )
}