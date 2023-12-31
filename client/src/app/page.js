import fetchBlogs from "../../helpers/fetch-blogs";
import fetchProjects from "../../helpers/fetch-projects";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featuredProjects";
import BlogSection from "@/components/blogSection";
import Statistics from "@/components/statistics";
import Page from "@/components/page";

const Home = async () => {
  const [featuredBlogs, blogs] = await Promise.all([
    await fetchBlogs(`filters[isFeatured][$eq]=true`),
    await fetchBlogs(`filters[isFeatured][$eq]=false`),
  ]);

  const [featuredProjects, projects] = await Promise.all([
    await fetchProjects(`filters[isFeatured][$eq]=true`),
    await fetchProjects(`filters[isFeatured][$eq]=false`),
  ]);

  return (
      <Page>
        <Hero />
        <FeaturedProjects featuredProjects={featuredProjects} />
        <Statistics />
        <BlogSection featuredBlogs={featuredBlogs} />
      </Page>
  );
};

export default Home;
