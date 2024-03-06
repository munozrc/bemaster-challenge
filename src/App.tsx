import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ProtectedRoute } from "@/components"
import { ContentCategory, ContentDetails, Home, Login } from "@/pages"

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}/>
        <Route path="/login" element={<Login />}/>
        <Route element={<ProtectedRoute isAllowed={true} redirectTo="/" />}>
          <Route path="/home" element={<Home />} />
          <Route path="/category/:slug" element={<ContentCategory />} />
          <Route path="/details/:id" element={<ContentDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
