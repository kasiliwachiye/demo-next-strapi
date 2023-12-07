import Image from "next/image";

const Project = ({ projectImage, content, publishedAt, title }) => {


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <h1 className="text-5xl font-bold mb-2">{title}</h1>
          <div className="flex justify-between my-2">
            <div className="text-gray-400">{publishedAt}</div>
          </div>
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={projectImage}
              width={720}
              height={280}
            />
          </div>
          <div className="sm:w-full sm:py-8 mt-4 pt-4 sm:mt-0 text-left">
            <p>{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
