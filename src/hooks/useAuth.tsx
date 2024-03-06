import { AuthContext } from "@/context/AuthContext";
import { loginWithEmailPassword, loginWithGoogle } from "@/services/auth.service";
import { useContext } from "react";

export function useAuth () {
  const { user, loading } = useContext(AuthContext);
  const isAuthorizedUser = typeof user !== "undefined" && user !== null && user !== ""

  return { 
    user, 
    loading, 
    isAuthorizedUser,
    login: loginWithEmailPassword,
    loginGoogle: loginWithGoogle
  }
}