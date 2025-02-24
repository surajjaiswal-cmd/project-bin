import { client } from "@/sanity/lib/client";
import { PROJECT_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import React from "react";
import Project from "./projects";

const UserProjects = async ({ id }: { id: string }) => {
  const project = await client.fetch(PROJECT_BY_AUTHOR_QUERY, { id });
  return (
    <>
      {project?.length > 0 ? (<Project posts={project} />)
       :(<p className="no-results">No Projects Found</p>)}
    </>
  );
};

export default UserProjects;
