import { auth } from "@/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { type ReactNode, createContext, useState, useEffect } from "react";

interface ContextValues {
  user: string | null | undefined
  loading: boolean
}

interface Props {
  children: ReactNode | ReactNode[]
}

export const AuthContext = createContext<ContextValues>({
  user: undefined,
  loading: false
})

export function AuthProvider ({ children }: Props) {
  const [user, setUser] = useState<string | null | undefined>()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (data) => {
      if (typeof data === "undefined" || data === null) {
        setUser(null)
        return
      }

      setLoading(false)
      setUser(() => data.email)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}