"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const Item = ({ title, children, className }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`border-b ${className || ""}`}>
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-bold">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
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

    const itemAnimations = () => {
      const card = document.querySelectorAll(".item-object");

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
    itemAnimations();
  }, []);
  return (
    <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div
          class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
          ref={titleRef}
        >
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative">FAQs</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg ">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div class="space-y-0">
          <Item
            title="The quick, brown fox jumps over a lazy dog?"
            className={"item-object"}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item
            title="The first mate and his Skipper too will do?"
            className={"item-object"}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item title="Is the Space Pope reptilian!?" className={"item-object"}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
          <Item
            title="How much money you got on you?"
            className={"item-object"}
          >
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </Item>
        </div>
      </div>
    </div>
  );
};
