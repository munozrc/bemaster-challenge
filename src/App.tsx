import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "@/components"
import { LoginPage } from "@/pages/auth"
import { HomePage } from "@/pages/home"

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<LoginPage />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route element={<ProtectedRoute isAllowed={true} redirectTo="/" />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
