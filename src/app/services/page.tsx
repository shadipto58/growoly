import React from "react";
import Web_icon from "@/assets/icons/webdev.png";
import Marketing_icon from "@/assets/icons/digitalmarketing.png";
import Graphic_icon from "@/assets/icons/graphic.png";
import Consulting_icon from "@/assets/icons/consulting.png";
import Image from "next/image";

const Services = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-lg bg-[#BFD8AF] font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Our Services
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative"></span>
          </span>
          Explore Our best Expertise
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          Discover Our Complete Range of Expert Services to Enhance Your Digital
          Presence and Achieve Business Success.
        </p>
      </div>
      <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-between p-5 border-2 border-[#BFD8AF] rounded-lg shadow-md">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 p-3">
              <Image src={Web_icon} alt="Web_icon" height={50} width={50} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Web Devlopment</h6>
            <p className="mb-3 text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border-2 border-[#BFD8AF] rounded-lg shadow-md">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 p-3">
              <Image src={Graphic_icon} alt="Web_icon" height={50} width={50} />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Graphic Design</h6>
            <p className="mb-3 text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border-2 border-[#BFD8AF] rounded-lg shadow-md">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 p-3">
              <Image
                src={Marketing_icon}
                alt="Web_icon"
                height={50}
                width={50}
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Digital Marketing</h6>
            <p className="mb-3 text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
        <div className="flex flex-col justify-between p-5 border-2 border-[#BFD8AF] rounded-lg shadow-md">
          <div>
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 p-3">
              <Image
                src={Consulting_icon}
                alt="Web_icon"
                height={50}
                width={50}
              />
            </div>
            <h6 className="mb-2 font-semibold leading-5">Buisness Consulting</h6>
            <p className="mb-3 text-sm text-gray-900">
              A flower in my garden, a mystery in my panties. Heart attack never
              stopped old Big Bear.
            </p>
          </div>
          <a
            href="/"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
