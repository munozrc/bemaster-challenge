import { Navigate, Route, Routes } from "react-router-dom"
import { ContentCategory, ContentDetails, Home, Login, NotFound } from "@/pages"
import { ProtectedRoute } from "@/components"
import { useAuth } from "./hooks/useAuth"

function App () {
  const { isAuthorizedUser } = useAuth()

  return (
    <Routes>
      <Route index element={<Login />}/>
      <Route path="/login" element={<Login />}/>
      <Route element={<ProtectedRoute isAllowed={isAuthorizedUser} redirectTo="/" />}>
        <Route path="/home" element={<Home />} />
        <Route path="/category/:slug" element={<ContentCategory />} />
        <Route path="/details/:id" element={<ContentDetails />} />
        <Route path='*' element={<NotFound />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
