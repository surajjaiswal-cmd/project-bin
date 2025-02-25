import { BoxesFile } from "@/components/boxes";
import LoadingAction from "@/components/loadingaction";
import UserProjects from "@/components/userproject";
import Views from "@/components/views";
import { client } from "@/sanity/lib/client";
import { PROJECT_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";

export const metadata = {
  title: "Project Bin | Project ",
};

interface paramsType {
  params: Promise<{ id: string }>;
}
export const experimental_ppr = true;

const Project = async (props: paramsType) => {
  // fatching post id from prope
  const params = await props.params;
  const id = params.id;

  //fatch perticuller post by id
  const post = await client.fetch(PROJECT_BY_ID_QUERY, { id });

  // geting authore id by post id
  const authorId: string | undefined = post?.author?._id;

  if (!post) return notFound();
  return (
    <div>
      <BoxesFile />
      <div className="container mt-5">
        <Image
          src={post.image || "https://placehold.co/"}
          height={1000}
          width={900}
          className="rounded-xl w-full h-[40rem]"
          alt={`${post.title}`}
          priority
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <LoadingAction
              href={`../user/${post.author?._id}`}
              className="flex gap-2 items-center mb-3">
              <Image
                src={post.author?.image || "https://placehold.co/"}
                alt="user img"
                width={64}
                height={64}
                className="w-12 h-12 rounded-full"
                priority
              />
              <div>
                <p className="text-20-medium">
                  {post.author?.name || "Not Found"}
                </p>
                <p className="text-16-medium !text-black-300">
                  @{post.author?.username}
                </p>
              </div>
            </LoadingAction>
            <h3>{post.title}</h3>
            <p>{post.category}</p>
          </div>
          <p className="text-30">{post.description}</p>
          <pre className="whitespace-pre-wrap">{post.details}</pre>
        </div>

        <Suspense fallback={<p>loding...</p>}>
          <Views id={id} />
          <hr className="my-3" />
          <p className="mb-3 fs-5">
            {" "}
            More Project By {post.author?.name || "Not Found"}{" "}
          </p>
          <ul className="main-page-ul gap-3">
            {authorId && <UserProjects id={authorId} />}
          </ul>
        </Suspense>
      </div>
    </div>
  );
};

export default Project;
