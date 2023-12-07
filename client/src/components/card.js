import Image from "next/image";
import Link from "next/link";

export const Card = ({
  projectRating,
  projectName,
  projectSummary,
  projectImage,
  projectLink,
  likes,
  comments,
}) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <Image
          className="lg:h-48 md:h-36 w-full object-cover object-center"
          src={projectImage}
          alt="blog"
          width={720}
          height={400}
        />
        <div className="p-6">
          <h2 className="text-lg text-gray-400">{projectName}</h2>
          <h1 className="text-sm text-gray-700 font-bold mb-1">{projectRating}</h1>
          <p className="mb-3 text-xs">{projectSummary}</p>
          <div className="flex items-center flex-wrap">
            <Link
              className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer"
              href={projectLink}
            >
              View Project
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
    </div>
  );
};
