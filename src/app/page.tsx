import MainPage from "@/components/mainpage";
import { sanityFetch } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";
import { cache } from "react"; // ✅ Ensures proper caching

// ✅ Create a cached fetch function
const getPosts = cache(async () => {
  return sanityFetch({
    query: PROJECT_QUERY,
  });
});

export default async function Home() {
  const { data: posts } = await getPosts(); // ✅ Fetches correctly

  return (
    <>
      <MainPage posts={posts} />
    </>
  );
}
