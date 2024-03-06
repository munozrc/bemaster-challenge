import { AuthContext } from "@/context/AuthContext";
import { useContext } from "react";

export function useAuth () {
  const { user, loading } = useContext(AuthContext);
  const isAuthorizedUser = typeof user !== "undefined" && user !== null && user !== ""
  return { user, loading , isAuthorizedUser }
}