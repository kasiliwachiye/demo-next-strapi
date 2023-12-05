import Image from "next/image";

const Content = ({ blogImageSrc, content }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <h1 className="text-5xl font-bold mb-2">Big Blog Title</h1>
          <h1 className="text-sm font-medium text-gray-700 mb-2">Category</h1>
          <div className="rounded-lg h-64 overflow-hidden">
            <Image
              alt="content"
              className="object-cover object-center h-full w-full"
              src={blogImageSrc}
              width={720}
              height={280}
            />
          </div>
          <div className="sm:w-full sm:pl-8 sm:py-8 mt-4 pt-4 sm:mt-0 text-left">
            <p className="w-full text-lg mb-4">{content}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
