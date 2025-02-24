import React from "react";
import SignOut from "./sign-out";
import SignIn from "./sign-in";
import LoadingAction from "./loadingaction";

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
          <LoadingAction href={`/user/${session?.id}`}>
            <span
              className="md:text-[.8rem]  text-[1.50rem] capitalize-first-letter"
              onClick={handleShowClick}>
              {session.user?.name || "User"}
            </span>
          </LoadingAction>
          <hr className="my-2" />
          <LoadingAction href={"/project/create/"}>
            <span
              className="md:text-[.8rem]  text-[1.50rem] "
              onClick={handleShowClick}>
              Create
            </span>
          </LoadingAction>
          <hr className="my-2" />
          <SignOut />
          <hr className="my-2" />
          <LoadingAction href={"/about"} >
            <span
              className="md:text-[.8rem]  text-[1.50rem]  "
              onClick={handleShowClick}>
              About
            </span>
          </LoadingAction>
          <hr className="my-2" />
        </>
      ) : (
        <>
          <SignIn />
          <hr className="my-2" />
          <LoadingAction href={"/about"}>
            <span
              className="md:text-[.8rem]  text-[1.50rem] "
              onClick={handleShowClick}>
              About
            </span>
          </LoadingAction>
          <hr className="my-2" />
        </>
      )}
    </>
  );
};

export default HandelSingInOut;
