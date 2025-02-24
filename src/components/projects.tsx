import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { ProjectTypeCard } from "./projectcard";
// import { log } from "console";

interface ProjectProps {
  posts: ProjectTypeCard[];
}

const Project: React.FC<ProjectProps> = ({ posts }) => {
  
  
  return (
        <>
      {posts?.map((post, index) => (
        <li key={index}>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-auto h-[30rem]">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white">
                {post.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300  max-h-20 overflow-y-auto p-2 scrollbar-hide line-clamp-2"  >
                {post.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Link href={`/project/${post._id}`}>
                  <Image
                    src={post.image || "https:placehild.co/"}
                    height='1000'
                    width='1000'
                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                    alt={`${post.title}`}
                    priority
                  />
                </Link>
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  as={Link}
                  href={`/user/${post.author?._id}`}
                  translateZ={20}
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white">
                  {post.author?.name || "Unknown Author"} <br />@
                  {post.author?.username || "Unknown Author"}
                </CardItem>
                <CardItem
                  as={Link}
                  href={`/project/${post._id}`}
                  translateZ={20}
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
                  Details
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </li>
      ))}
    </>
  );
};

export default Project;
