import { client } from "@/sanity/lib/client";
import { PROJECT_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { FiEye } from "react-icons/fi";
import React from "react";

const Views = async ({ id }: { id: string }) => {
  const result = await client
    .withConfig({ useCdn: false })
    .fetch(PROJECT_VIEWS_QUERY, { id });

  const views = result?.views ?? 0;

  await writeClient
    .patch(id)
    .set({ views: views + 1 })
    .commit();

  return (
    <div className="btn btn-white border shadow-md cursor-default fixed z-30 bottom-4 left-3 flex items-center py-0 px-2">
      <div className="mr-1">
        <FiEye />
      </div>
      <div > {views}</div>
    </div>
  );
};

export default Views;
