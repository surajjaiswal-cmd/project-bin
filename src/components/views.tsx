import { client } from "@/sanity/lib/client";
import { PROJECT_VIEWS_QUERY } from "@/sanity/lib/queries";
import { writeClient } from "@/sanity/lib/write-client";
import { Eye } from "lucide-react";
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
    <div className="bg-black text-white btn cursor-default fixed z-30 bottom-4 left-3 flex ">
      <Eye className="size-6 mr-1" /> {views}
    </div>
  );
};

export default Views;
