"use client";
import { BoxesFile } from "@/components/boxes";
import Project from "@/components/projects";
import { ProjectTypeCard } from "./projectcard";
import { useState } from "react";

interface ProjectProps {
  posts: ProjectTypeCard[];
}

const MainPage: React.FC<ProjectProps> = ({ posts }) => {
  const [inputData, setInputData] = useState<string>("");

  const filteredPosts = posts.filter(
    (post) =>
      post.title?.toLowerCase().includes(inputData.toLowerCase()) || // Match title
      post.author?.name?.toLowerCase().includes(inputData.toLowerCase()) // Match author name
  );



  return (
    <div>
      <BoxesFile showForm={true} inputData={inputData} setter={setInputData} />
      <div className="container">
        <h3 className="my-4" id="main-page-project">Trendy Projects</h3>
        <ul className="main-page-ul">
          {posts?.length > 0 ? (
            <Project posts={filteredPosts} />
          ) : (
            <p className="container text-center mt-24">No Projects Found</p>
          )}
        </ul>
      </div>
    </div>
  );
};
export default MainPage;
