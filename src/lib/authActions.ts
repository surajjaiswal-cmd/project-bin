import { signIn, signOut } from "next-auth/react";

export function handleSignIn() {
  return signIn("github"); // This must run in the browser
}

export function handleSignOut() {
  return signOut({ callbackUrl: "/" }); // This must run in the browser
}
