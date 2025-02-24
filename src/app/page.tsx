import MainPage from "@/components/mainpage";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { PROJECT_QUERY } from "@/sanity/lib/queries";

export default async function Home() {
  
  const { data: posts } = await sanityFetch({
    query: PROJECT_QUERY,
  });

  return (
    <>
      <MainPage posts={posts} />
      <SanityLive />
    </>
  );
}
