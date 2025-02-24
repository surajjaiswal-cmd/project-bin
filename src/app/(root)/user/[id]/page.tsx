import React, { Suspense } from "react";
import { EvervaultCard, Icon } from "@/components/ui/evervault-card";
import { client } from "@/sanity/lib/client";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";
import UserProjects from "@/components/userproject";

interface paramsType {
  params: Promise<{ id: string }>;
}
export const experimental_ppr = true;

export const metadata = {
  title: "Project Bin | User ",
};


const IdPage = async (props: paramsType) => {
  const params = await props.params;
  const id = params.id;

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });

  if (!user) return notFound;

  return (
    <div className=" container flex flex-col mt-10 sm:flex-row ">
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-center w-[22rem] sm:w-[18rem] md:w-[22rem] p-4 relative h-[30rem] mx-auto ">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard
          text={`@${user.username}`}
          imgUrl={user.image || "https://placehold.co/"}
        />

        <h2 className="dark:text-white text-black mt-2 text-[1.2rem] font-bold">
          {user.name?.toUpperCase()}
        </h2>
        <p
          className={`text-[.8rem]  p-1 mt-3 text-black dark:text-white px-2 py-0.5 max-h-20 overflow-y-auto scrollbar-hide border ${user.bio || "d-none"}`}>
          {user.bio}
        </p>
      </div>

      <div className=" ms-4">
        <h3 className="m-4"> All Project</h3>
        <ul className="flex flex-wrap justify-center gap-4">
          <Suspense
            fallback={
              <h1 className="container text-center mt-10">Loading...</h1>
            }>
            <ul className="user-page-ul gap-3">
              <UserProjects id={id} />
            </ul>
          </Suspense>
        </ul>
      </div>
    </div>
  );
};

export default IdPage;
