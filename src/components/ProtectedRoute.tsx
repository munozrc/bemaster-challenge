import type { FC, ReactNode } from "react"
import { Navigate, Outlet } from "react-router-dom"

interface Props {
  isAllowed: boolean
  redirectTo: string
  children?: ReactNode
}

export const ProtectedRoute: FC<Props> = ({ isAllowed, redirectTo, children }) => {
  if (!isAllowed) return <Navigate to={redirectTo} />
  return children ? children : <Outlet />
}
