import { z } from "zod";

// Base schema without async validation
export const formSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(5).max(500),
  category: z.string().min(3).max(100),
  link: z.string().url("Invalid URL"),
  details: z.string().min(10),
});

// Separate function to validate the image URL
export const validateImageUrl = async (url: string) => {
  try {
    const res = await fetch(url, { method: "HEAD" });

    if (!res.ok) {
      return "The URL is not accessible. Please check the link.";
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.startsWith("image/")) {
      return "Invalid image URL. Please provide a valid image link.";
    }

    return null; // No error
  } catch (error) {
    console.log(error);

    return "Failed to fetch the image URL. Ensure it's a valid link.";
  }
};
