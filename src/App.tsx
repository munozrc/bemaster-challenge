import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "@/components"
import { Home, Login } from "@/pages"

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route element={<ProtectedRoute isAllowed={true} redirectTo="/" />}>
          <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
