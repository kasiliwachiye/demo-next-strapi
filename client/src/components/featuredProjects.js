"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react"; // Import useRef hook
import { Card } from "./card";
import config from "../../config";
import Link from "next/link";

const FeaturedProjects = ({ featuredProjects }) => {
  // Initialize GSAP and ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  // Use useRef to get a reference to the title element
  const titleRef = useRef(null);

  // Use useEffect to trigger animations when the component mounts
  useEffect(() => {
    const titleAnimation = () => {
      const title = titleRef.current;

      gsap.fromTo(
        title,
        {
          opacity: 0,
          y: 50,
          visibility: "hidden",
        },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1,
          scrollTrigger: {
            trigger: title,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
        }
      );
    };

    const cardAnimations = () => {
      const cards = document.querySelectorAll(".project-card");

      gsap.fromTo(
        cards,
        {
          opacity: 0,
          y: 75,
        },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 1,
          scrollTrigger: {
            trigger: cards[0],
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          stagger: 0.5,
        }
      );
    };

    const viewAllLinkAnimation = () => {
      const viewAllLink = document.querySelector(".view-all-link");

      gsap.fromTo(
        viewAllLink,
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          scrollTrigger: {
            trigger: viewAllLink,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
            delay: 2,
          },
        }
      );
    };

    titleAnimation();
    cardAnimations();
    viewAllLinkAnimation();
  }, []);

  return (
    <div className="container px-5 pt-12 mx-auto">
      <h1
        ref={titleRef}
        className="text-3xl font-bold my-4 md:text-4xl lg:text-5xl featured-projects-title"
      >
        Featured Projects
      </h1>
      <div className="flex flex-wrap -m-4">
        {featuredProjects.data.map((project, index) => (
          <Card
            key={project.id}
            projectName={project.attributes.projectName}
            projectRating={project.attributes.projectRating}
            projectSummary={project.attributes.projectSummary}
            projectImage={`${config.api}${project.attributes.projectImage.data.attributes.url}`}
            projectLink={`/projects/${project.attributes.slug}`}
            className="project-card"
          />
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <Link
          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer view-all-link"
          href="/projects"
        >
          View All Projects
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

export default FeaturedProjects;
