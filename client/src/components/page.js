import { Footer } from "./footer";
import { Navbar } from "./navbar";

const Page = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>;
      <Footer />
    </>
  );
};

export default Page;
