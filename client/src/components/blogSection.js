"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Link from "next/link";
import BlogCard from "@/components/blogCard";

const BlogSection = ({ featuredBlogs }) => {
  gsap.registerPlugin(ScrollTrigger);

  const titleRef = useRef(null);

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

    const blogCardAnimations = () => {
      const blogCards = document.querySelectorAll(".blog-card");

      gsap.fromTo(
        blogCards,
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
            trigger: blogCards[0],
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          stagger: {
            amount: 0.5,
          },
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
    blogCardAnimations();
    viewAllLinkAnimation();
  }, []);

  return (
    <div className="container px-5 py-24 mx-auto">
      <h1
        ref={titleRef}
        className="text-3xl font-bold my-4 md:text-4xl lg:text-5xl"
      >
        Optiven in the news
      </h1>
      <div className="flex flex-wrap -m-4">
        {featuredBlogs.data.map((item) => (
          <BlogCard key={item.id} item={item} className="blog-card" />
        ))}
      </div>
      <div className="flex justify-center pt-8">
        <Link
          className="text-green-600 inline-flex items-center md:mb-2 lg:mb-0 hover:cursor-pointer view-all-link"
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
  );
};

export default BlogSection;
