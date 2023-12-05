import { Card } from "@/components/card";

export default function Home() {
  return (
    <div className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <Card
            title={"Test"}
            likes={Math.ceil(Math.random() * 1000)}
            comments={Math.ceil(Math.random() * 1000)}
            category={"Activities"}
            description={"Lorem ipsum dolor"}
            imageSrc="https://images.pexels.com/photos/365668/pexels-photo-365668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card
            title={"Test"}
            likes={Math.ceil(Math.random() * 1000)}
            comments={Math.ceil(Math.random() * 1000)}
            category={"Dining"}
            description={"Lorem ipsum dolor"}
            imageSrc="https://images.pexels.com/photos/1487510/pexels-photo-1487510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
          <Card
            title={"Test"}
            likes={Math.ceil(Math.random() * 1000)}
            comments={Math.ceil(Math.random() * 1000)}
            category={"Accomodation"}
            description={"Lorem ipsum dolor"}
            imageSrc="https://images.pexels.com/photos/161815/santorini-oia-greece-water-161815.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </div>
      </div>
    </div>
  );
}
