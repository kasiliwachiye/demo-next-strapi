import Link from "next/link";
import fetchBlogs from "../../helpers/fetch-blogs";
import fetchProjects from "../../helpers/fetch-projects";
import BlogCard from "@/components/blogCard";
import Hero from "@/components/hero";
import FeaturedProjects from "@/components/featuredProjects";

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
    <div>
      <Hero />
      <FeaturedProjects featuredProjects={featuredProjects} />
      <div>
        <div className="container px-5 py-24 mx-auto">
          <h1 className="text-3xl font-bold my-4 md:text-4xl lg:text-5xl">
            Optiven in the news
          </h1>
          <div className="flex flex-wrap -m-4">
            {featuredBlogs.data.map((item) => (
              <BlogCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="flex justify-center pb-4">
          <Link
            className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer"
            href="/blogs"
          >
            View All Articles
            <svg
              className="w-4 h-4 ml-2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
