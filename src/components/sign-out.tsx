"use client";
import { handleSignOut } from "@/lib/authActions";
import LoadingAction from "./loadingaction";

export default function SignOut() {
  return (
    <form>
      <LoadingAction onClick={handleSignOut} className="md:text-[.8rem]  text-[1.50rem]">
        Sign Out
      </LoadingAction>
    </form>
  );
}
