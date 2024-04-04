import Image from "next/image";
import React from "react";
import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareTwitter,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";

const OurTeams = () => {
  return (
    <div className="py-16 bg-[#F3F8FF] lg:py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-lg bg-[#BFD8AF] font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Meet Our Team
          </p>
          <p className="text-base text-gray-700 md:text-lg">
            Introducing Our Outstanding Group: Enthusiastic Professionals
            Committed to Crafting Your Vision and Reaching Outstanding Outcomes
            Together
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-4 lg:max-w-screen-lg">
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <Image
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                alt="Person"
                height={50}
                width={50}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-xl font-bold">Bichitro Ghosh</p>
              <p className="text-gray-800 font-medium">Founder & CEO</p>
              <p className="mb-2 text-gray-800 font-medium">
                bichitro@growoly.com
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/bichitro-ghosh-0aab601b8/"  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <Image
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-xl font-bold">Shadipto Mojumder</p>
              <p className="text-gray-800 font-medium">CTO</p>
              <p className="mb-2 text-gray-800 font-medium">
                shadipto@growoly.com
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/shadiptomojumder/"  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <Image
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/3747435/pexels-photo-3747435.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-xl font-bold">Avijit Ghosh</p>
              <p className="text-gray-800 font-medium">CMO & Senior Maneger</p>
              <p className="mb-2 text-gray-800 font-medium">
                avi@growoly.com
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/avijit-ghosh-7476aa1b5/"  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="relative pb-56 mb-4 rounded shadow lg:pb-64">
              <Image
                height={500}
                width={500}
                className="absolute object-cover w-full h-full rounded"
                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Person"
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-xl font-bold">Alex Kain</p>
              <p className="text-gray-800 font-medium">
                Senior Graphic Designer
              </p>
              <p className="mb-2 text-gray-800 font-medium">
                bichitro@growoly.com
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
                <a
                  href="/"  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
