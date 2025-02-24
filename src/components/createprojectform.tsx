"use client";
import Input from "@/components/input";
import { useToast } from "@/hooks/use-toast";
import { createProject } from "@/lib/action";
import { formSchema } from "@/lib/validation";
import MDEditor from "@uiw/react-md-editor";
import { useRouter } from "next/navigation";
import React, { useActionState, useState } from "react";
import { z } from "zod";

interface FormState {
  error: string;
  status: "INITIAL" | "Success" | "Error";
}

// 🛠️ Define Form Values Type
interface FormValues {
  title: string;
  description: string;
  category: string;
  link: string;
  details: string;
}


const CreateProjectForm = () => {
  const [details, setDetails] = useState<string>("");
  const { toast } = useToast();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const router = useRouter();

  const handleFormSubmit = async (prevState: FormState, formData: FormData) => {

    try {
      const formValues : FormValues = {
        title: formData.get("title")?.toString() || "",
        description: formData.get("description")?.toString() || "",
        category: formData.get("category")?.toString() || "",
        link: formData.get("link")?.toString() || "",
        details: details || "",
      };

      await formSchema.parseAsync(formValues);

      const result = await createProject(prevState, formData, details);

      if (result.status == "Success") {
        toast({
          title: "Success",
          description: "Your project published successfully.",
        });

        router.push(`../project/${result._id}`);
      }

      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;

        setErrors(fieldErrors as unknown as Record<string, string>);
        toast({
          title: "Error",
          description: "Error : Please fill fields carefully",
        });
        return { ...prevState, error: "Validation Error", status: "Error" };
      }

      toast({
        title: "Error",
        description: "Error  : An Unknows Error!",
      });
      return {
        ...prevState,
        error: "An unknown error occured",
        status: "Error",
      };
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [state, formAction, isPending] = useActionState(handleFormSubmit, {
    error: "",
    status: "INITIAL",
  });

  return (
    <>
      <div className="container ">
        <form
          className="mx-auto lg:w-[50%] md:w-[70%] w-full"
          action={formAction}>
          <Input id="title" name="title" />
          {errors.title && (
            <p className="text-[.7rem] text-danger">{errors.title}</p>
          )}

          <label
            htmlFor="description"
            className="text-[1.2rem] font-bold text-[#565656] m-2 mt-5 ">
            DESCRIPTION
          </label>
          <br />
          <textarea
            rows={3}
            id="description"
            name="description"
            className="form-control custom-select border-[#969494] border-2 rounded-2xl  text-black text-[1.25rem]"
            placeholder="Project Description"
            required
          />
          {errors.description && (
            <p className="text-[.7rem] text-danger">{errors.description}</p>
          )}

          <Input id="category" name="category" />
          {errors.category && (
            <p className="text-[.7rem] text-danger">{errors.category}</p>
          )}
          <Input id="link" place="Thumbnail Url" name="link" />
          {errors.link && (
            <p className="text-[.7rem] text-danger">{errors.link}</p>
          )}

          <div className="text-[1.2rem] font-bold text-[#565656] m-2 mt-5 ">
            DETAILS
          </div>
          <MDEditor
            id="details"
            value={details}
            onChange={(value) => setDetails(value || "")}
            preview="edit"
            height={300}
            className="border-[#969494] border-2 rounded-2xl "
            style={{
              borderRadius: 10,
              overflow: "hidden",
              backgroundColor: "white",
            }}
            textareaProps={{
              id: "details",
              name: "details",
              placeholder: "Describe your project in detail.",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
          {errors.details && (
            <p className="text-[.7rem] text-danger">{errors.details}</p>
          )}

          <button
            type="submit"
            className="mx-auto mt-4 w-full btn btn-info border-[#969494] border-2 rounded-2xl"
            disabled={isPending}>
            {isPending ? "Submitting..." : "Submit Your Project"}
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateProjectForm;
