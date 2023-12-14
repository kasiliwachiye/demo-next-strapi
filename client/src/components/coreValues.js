"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const CoreValues = () => {
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

    const cardsAnimations = () => {
      const card = document.querySelectorAll(".card-object");

      gsap.fromTo(
        card,
        {
          opacity: 0,
          y: 20,
        },
        {
          opacity: 1,
          y: 0,
          visibility: "visible",
          duration: 0.5,
          scrollTrigger: {
            trigger: card[0],
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

    titleAnimation();
    cardsAnimations();
  }, []);
  
  return (
    <div className="px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div
        className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        ref={titleRef}
      >
        <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative">Our </span>
          Core Values
        </h2>
      </div>
      <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2 card-object">
        <div className="duration-300 transform bg-white border-l-4 border-green-400 hover:-translate-y-2">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Professionalism</h6>
            <p className="text-sm text-gray-900">
              Sportacus andrew weatherall goose Refined gentlemen super mario
              des lynam alpha trion zap rowsdower.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-green-400 hover:-translate-y-2 card-object">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Honesty</h6>
            <p className="text-sm text-gray-900">
              Bulbasaur Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-green-400 hover:-translate-y-2 card-object">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Customer Obsession</h6>
            <p className="text-sm text-gray-900">
              Bro ipsum dolor sit amet gaper backside single track, manny Bike
              epic clipless. Schraeder drop gondy.
            </p>
          </div>
        </div>
        <div className="duration-300 transform bg-white border-l-4 border-green-400 hover:-translate-y-2 card-object">
          <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
            <h6 className="mb-2 font-semibold leading-5">Innovation</h6>
            <p className="text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoreValues;
