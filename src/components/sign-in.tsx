"use client";
import { handleSignIn } from "@/lib/authActions";
import LoadingAction from "./loadingaction";

export default function SignIn() {
  return (
    <LoadingAction href="/" className="md:text-[.8rem]  text-[1.50rem] ">
      <div onClick={handleSignIn}>Sign In</div>
    </LoadingAction>
  );
}
