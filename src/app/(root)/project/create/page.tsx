import { auth } from "@/auth";
import CreateProjectForm from "@/components/createprojectform";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Project Bin | Create Project ",
};

const Create = async () => {
  const session = await auth();
    if (!session) {
      redirect("/");
      return null;
    }
  return (
    <div className="container-fluid ">
      <h1
        className=" container-fluid text-center mt-3 rounded-lg py-5 w-full bg-[#0097a7]
      ">
        Submite Your Project
      </h1>
      <CreateProjectForm />
    </div>
  );
};

export default Create;
