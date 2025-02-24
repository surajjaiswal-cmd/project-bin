"use client";
import { handleSignIn } from "@/lib/authActions";

export default function SignIn() {
  return (
    <form>
      <button
        onClick={handleSignIn}
        className="md:text-[.8rem]  text-[1.50rem]">
        Sign In
      </button>
    </form>
  );
}
