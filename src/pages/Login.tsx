import { Button, InputField, GoogleButton } from "@/components"
import { SubmitHandler, useForm } from "react-hook-form"
import { loginSchema } from "@/validations/loginSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { SpinnerIcon } from "@/components/icons"
import { useNavigate } from "react-router-dom"
import { useAuth } from "@/hooks/useAuth"
import { Toaster, toast } from "sonner"
import { useEffect } from "react"

interface Inputs {
  email: string
  password: string
}

export function Login (): JSX.Element {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm<Inputs>({
    resolver: zodResolver(loginSchema)
  })

  const { 
    isAuthorizedUser, 
    loading, 
    login, 
    loginGoogle 
  } = useAuth()

  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await login(data)
      .then(() => navigate("/home"))
      .catch(() => toast.error("Email or password incorrect"))
  }

  const handleLoginWithGoogle = async () => {
    await loginGoogle()
      .then(() => navigate("/home"))
  }

  useEffect(() => {
    if (isAuthorizedUser) return navigate("/home")
  }, [isAuthorizedUser, navigate])

  return (
    <div className="container relative w-full h-full flex-col items-center justify-center md:grid md:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="relative z-20 flex items-center text-lg font-medium">
          <a 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://github.com/munozrc/bemaster-challenge"
            className="hover:underline" 
          >Repo @munozrc</a>
        </div>
        <img src="/cinema.webp" className="relative z-10 mt-auto max-w-lg"/>
        <div className="absolute inset-0 bg-zinc-900"></div>
      </div>
      <div className="flex w-full h-full p-10">
        <form 
          className="mx-auto flex w-full flex-col justify-center sm:w-[350px] gap-1 animate-fade"
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
          <div className="w-full hidden md:flex md:flex-col ">
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t"></span>
              </div>
              <div className="relative flex justify-center text-ms uppercase">
                <span className="bg-slate-50 px-2 text-gray-600">Or continue with</span>
              </div>
            </div>
            <GoogleButton
              type="button"
              disabled={!loading} 
              onClick={handleLoginWithGoogle}
            />
          </div>
        </form>
        <Toaster position="top-right" richColors />
      </div>
    </div>
  )
}