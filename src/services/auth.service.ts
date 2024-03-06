import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { AuthUser } from "@/models";
import { auth } from "@/firebase"

export async function loginWithEmailPassword(user: AuthUser) {
  const { email, password } = user
  return await signInWithEmailAndPassword(auth, email, password)
}

export async function loginWithGoogle () {
  const googleProvider = new GoogleAuthProvider();
  return await signInWithPopup(auth, googleProvider);
}

export async function logoutUser() {
  return await signOut(auth)
}