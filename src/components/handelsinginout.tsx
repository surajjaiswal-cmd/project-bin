import Link from "next/link";
import React from "react";
import SignOut from "./sign-out";
import SignIn from "./sign-in";

interface Session {
  id: string;
  user?: {
    name?: string;
  };
}

const HandelSingInOut = ({
  session,
  handleShowClick,
}: {
  session?: Session;
  handleShowClick?: () => void;
}) => {
  return (
    <>
      {session ? (
        <>
          <Link href={`/user/${session?.id}`} onClick={handleShowClick}>
            <span className="md:text-[.8rem]  text-[1.50rem] capitalize-first-letter">
              {session.user?.name || "User"}
            </span>
          </Link>
          <hr className="my-2" />
          <Link href={"/project/create/"} onClick={handleShowClick}>
            <span className="md:text-[.8rem]  text-[1.50rem] ">Create</span>
          </Link>
          <hr className="my-2" />
          <SignOut />
          <hr className="my-2" />
          <Link href={"/about"} onClick={handleShowClick}>
            <span
              className="md:text-[.8rem]  text-[1.50rem]  "
              onClick={handleShowClick}>
              About
            </span>
          </Link>
          <hr className="my-2" />
        </>
      ) : (
        <>
          <SignIn />
          <hr className="my-2" />
          <Link href={"/about"}>
            <span
              className="md:text-[.8rem]  text-[1.50rem] "
              onClick={handleShowClick}>
              About
            </span>
          </Link>
          <hr className="my-2" />
        </>
      )}
    </>
  );
};

export default HandelSingInOut;
