import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 bg-white dark:bg-black container mx-auto">
      <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
        <svg
          className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
          viewBox="0 0 100 100"
          fill="currentColor"
          preserveAspectRatio="none slice"
        >
          <path d="M50 0H100L50 100H0L50 0Z" />
        </svg>
        <Image
          className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt="op"
          width={500}
          height={500}
        />
      </div>
      <div className="relative flex flex-col items-start w-full md:px-0">
        <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
          <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl sm:leading-[1.2]">
          Grow your buissness with our excellence.
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 dark:text-[#FEFBF6] md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
            <Button  className="bg-[#BFD8AF] text-black font-semibold hover:bg-transparent hover:border-[#BFD8AF] hover:border hover:shadow-md">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
