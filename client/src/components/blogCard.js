import Link from "next/link";
import formatDate from "../../utils/formatDate";

const BlogCard = ({ item, className }) => {
  return (
    <div
      className={`p-4 lg:w-1/3 transition-transform duration-500 ease-in-out transform hover:scale-105 ${
        className || ""
      }`}
      key={item.id}
    >
      <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {item.attributes.category}
        </h2>
        <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
          {item.attributes.title}
        </h1>
        <p className="text-xs mb-3">{item.attributes.articleSummary}</p>
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {formatDate(item.attributes.publishedAt)}
        </h2>
        <Link
          className="text-green-600 inline-flex items-center cursor-pointer"
          href={`/blogs/${item.attributes.slug}`}
        >
          Learn More
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
  );
};

export default BlogCard;
