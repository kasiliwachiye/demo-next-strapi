"use client";
import React, { useEffect } from "react";
import gsap from "gsap";

const AboutIntro = () => {
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    const headingOne = document.querySelector(".heading-one");
    const paragraphOne = document.querySelector(".paragraph-one");
    const linkOne = document.querySelector(".link-one");
    const images = document.querySelectorAll(".image-animate");

    // Animation for the heading-one element
    tl.fromTo(
      headingOne,
      { opacity: 0, y: 50, visibility: "hidden" },
      { opacity: 1, y: 0, duration: 1, visibility: "visible" }
    );
    // Animation for the paragraph-one element
    tl.fromTo(
      paragraphOne,
      { opacity: 0, y: 20, visibility: "hidden" },
      { opacity: 1, y: 0, duration: 1, visibility: "visible" }
    );
    // Animation for the link-one element
    tl.fromTo(
      linkOne,
      {
        opacity: 0,
        x: -50,
        visibility: "hidden",
      },
      {
        opacity: 1,
        x: 0,
        duration: 0.5,
        visibility: "visible",
      }
    );
    // Animation for the images element
    const imageTl1 = gsap.timeline({
      defaults: { ease: "power3.out" },
    });
    imageTl1.fromTo(
      images[0],
      {
        opacity: 0,
        scale: 0.5,
        rotation: 180,
        visibility: "hidden",
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        visibility: "visible",
      }
    );

    const imageTl2 = gsap.timeline({
      defaults: { ease: "elastic.out" },
    });
    imageTl2.fromTo(
      images[1],
      {
        opacity: 0,
        scale: 0.2,
        visibility: "hidden",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        visibility: "visible",
      }
    );

    const imageTl3 = gsap.timeline({
      defaults: { ease: "elastic.out" },
    });
    imageTl3.fromTo(
      images[2],
      {
        opacity: 0,
        scale: 0,
        visibility: "hidden",
      },
      {
        opacity: 1,
        scale: 1,
        duration: 2.5,
        visibility: "visible",
      }
    );

    tl.play();
  }, []);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
          <div className="max-w-xl mb-6">
            <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none heading-one">
              Who
              <br className="hidden md:block" />
              We <span className="inline-block text-green-400">Are</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg paragraph-one">
              Optiven is a leading brand in the region and has a number of
              flourishing Strategic Business Units (SBUs) that include Optiven
              Real Estate, Optiven Homes, and Optiven Water. The firm has also
              gained a foothold into the hospitality industry with its GMC Place
              in Kitengela and food franchises Eagle Peak Spur.
            </p>
          </div>
          <div>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold transition-colors duration-200 text-green-400 hover:text-green-800 link-one"
            >
              Learn more
              <svg
                className="inline-block w-3 ml-2"
                fill="currentColor"
                viewBox="0 0 12 12"
              >
                <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center -mx-4 lg:pl-8">
          <div className="flex flex-col items-end px-3">
            <img
              className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56 image-animate"
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <img
              className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40 image-animate"
              src="https://images.unsplash.com/photo-1422466654108-5e533f591881?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
          <div className="px-3">
            <img
              className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80 image-animate"
              src="https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIntro;
