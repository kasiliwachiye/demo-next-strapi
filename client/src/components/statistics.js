"use client";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Statistics = () => {
  // Initialize GSAP and ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const animateStatistics = () => {
      // Add animations for each statistic
      const stats = document.querySelectorAll(".stat");

      gsap.fromTo(
        stats,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: stats,
            start: "top bottom",
            end: "top center",
            toggleActions: "play none none reverse",
          },
          stagger: {
            amount: 1,
          },
        }
      );
    };

    animateStatistics();
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
        <div className="text-center md:border-r stat">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">24</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Years of Transformation
          </p>
        </div>
        <div className="text-center md:border-r stat">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">60</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Projects Completed
          </p>
        </div>
        <div className="text-center md:border-r stat">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">7112</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Disbursed Title Deeds
          </p>
        </div>
        <div className="text-center stat">
          <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">10K+</h6>
          <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
            Happy Clients
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

