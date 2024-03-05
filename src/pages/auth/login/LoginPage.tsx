import { Button, InputField } from "@/components";

export function LoginPage (): JSX.Element {
  return (
    <div className="container relative w-full h-full flex-col items-center justify-center md:grid md:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
        <div className="absolute inset-0 bg-zinc-900"></div>
      </div>
      <div className="flex w-full h-full p-10">
        <form className="mx-auto flex w-full flex-col justify-center sm:w-[350px] gap-3">
          <header className="w-full flex flex-col justify-center pb-6">
            <h2 className="text-center font-bold text-4xl">Welcome 🙌</h2>
          </header>
          <InputField label="Email" placeholder="example@gmail.com"/>
          <InputField label="Password" type="password" placeholder="Enter password"/>
          <div className="flex w-full flex-col pt-4">
            <Button>Login</Button>
          </div>
        </form>
      </div>
    </div>
  )
}