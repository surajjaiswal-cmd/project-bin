"use client";
import { handleSignIn } from "@/lib/authActions";
import LoadingAction from "./loadingaction";

export default function SignIn() {
  return (
    <form>
      <LoadingAction href="/">
        <button
          onClick={handleSignIn}
          className="md:text-[.8rem]  text-[1.50rem]">
          Sign In
        </button>
      </LoadingAction>
    </form>
  );
}
