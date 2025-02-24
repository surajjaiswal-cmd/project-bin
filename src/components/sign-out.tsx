"use client";
import { handleSignOut } from "@/lib/authActions";

export default function SignOut() {
  return (
    <form>
      <button onClick={handleSignOut} className="md:text-[.8rem]  text-[1.50rem]">
        Sign Out
      </button>
    </form>
  );
}
