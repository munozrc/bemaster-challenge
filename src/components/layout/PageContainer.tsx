import type { ReactNode } from "react"
import { Header } from "./Header"

interface Props {
  children?: ReactNode | ReactNode[]
}

export function PageContainer ({children}: Props): JSX.Element {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  )
}