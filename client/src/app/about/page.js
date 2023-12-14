import { Faq } from "@/components/faqs";
import Page from "@/components/page";
import AboutIntro from "@/components/aboutIntro";
import CoreValues from "@/components/coreValues";
import TeamSection from "@/components/teamSection";

const About = () => {
  return (
    <Page>
      <AboutIntro />
      <CoreValues />
      <TeamSection />
      <Faq />
    </Page>
  );
};

export default About;
