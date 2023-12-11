"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const Hero = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Animation for the h1 element
    tl.fromTo("h1", { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1.5 });

    tl.play();
  }, []);

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/388415/pexels-photo-388415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg lg:max-w-4xl">
          <h1 className="text-5xl mb-5 font-bold uppercase lg:text-7xl">
            Explore Value-Added Properties for a Better Tomorrow.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
