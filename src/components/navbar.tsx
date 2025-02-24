import Image from "next/image";
import React from "react";
import SecondNavbar from "./secondnavbar";
import HandelSingInOut from "./handelsinginout";
import { auth } from "@/auth";
import LoadingAction from "./loadingaction";

const NavBar = async () => {
  
  const session: Session | null = await auth();

  return (
    <div className="container-fluid border-b-2 p-0">
      <header className="py- container flex items-center justify-between">
        <LoadingAction href="/">
          <Image
            src="/logo.png"
            alt=" logo"
            height="60"
            width="60"
            priority
            className="w-100 h-auto"
          />
          
        </LoadingAction>
        <div className="gap-2  d-none d-md-flex ">
          <HandelSingInOut session={session} />
        </div>
        <div className=" d-md-none ">
          <SecondNavbar session={session} />
        </div>
      </header>
    </div>
  );
};
export default NavBar;
