import { SubmitHandler, useForm } from "react-hook-form";
import { loginSchema } from "@/validations/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod"
import { Button, InputField } from "@/components";
import { SpinnerIcon } from "@/components/icons";
import { Toaster, toast } from 'sonner'
import { loginWithEmailPassword, loginWithGoogle } from "@/services/auth.service";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useEffect } from "react";
import { GoogleButton } from "@/components/GoogleButton";

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

  const { isAuthorizedUser, loading } = useAuth()
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await loginWithEmailPassword(data)
      .then(() => navigate("/home"))
      .catch(() => toast.error("Email or password incorrect"))
  }

  const handleLoginWithGoogle = async () => {
    await loginWithGoogle()
      .then(() => navigate("/home"))
      .catch(() => toast.error("Error with login Google"))
  }

  useEffect(() => {
    if (isAuthorizedUser) return navigate("/home")
  }, [isAuthorizedUser, navigate])

  return (
    <div className="container relative w-full h-full flex-col items-center justify-center md:grid md:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
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
          <div className="w-full flex flex-col">
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