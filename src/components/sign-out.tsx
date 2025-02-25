"use client";
import { handleSignOut } from "@/lib/authActions";
import LoadingAction from "./loadingaction";

export default function SignOut() {
  return (
    
      <LoadingAction href="/" className="md:text-[.8rem]  text-[1.50rem]">
        <div onClick={handleSignOut}>Sign Out</div>
      </LoadingAction>
  
  );
}
