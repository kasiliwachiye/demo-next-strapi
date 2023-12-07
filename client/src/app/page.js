import { Card } from "@/components/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="text-gray-600">
      <div className="hero py-20">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="https://images.pexels.com/photos/11148259/pexels-photo-11148259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="max-w-sm rounded-lg shadow-2xl"
            width={960}
            height={360}
            alt="blog-image"
          />
          <div>
            <h1 className="text-5xl font-bold">Big Blog Title</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-outline">Read More</button>
          </div>
        </div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Card
            title={"Test"}
            likes={Math.ceil(Math.random() * 1000)}
            comments={Math.ceil(Math.random() * 1000)}
            category={"Activities"}
            summary={"Lorem ipsum dolor"}
            imageSrc="https://images.pexels.com/photos/365668/pexels-photo-365668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card
            title={"Test"}
            likes={Math.ceil(Math.random() * 1000)}
            comments={Math.ceil(Math.random() * 1000)}
            category={"Dining"}
            summary={"Lorem ipsum dolor"}
            imageSrc="https://images.pexels.com/photos/1487510/pexels-photo-1487510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card
            title={"Test"}
            likes={Math.ceil(Math.random() * 1000)}
            comments={Math.ceil(Math.random() * 1000)}
            category={"Accomodation"}
            summary={"Lorem ipsum dolor"}
            imageSrc="https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
}
