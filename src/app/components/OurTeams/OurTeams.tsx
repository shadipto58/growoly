import avijit from "@/assets/images/avi.jpg";
import bichitro from "@/assets/images/ceo.jpg";
import Shadipto from "@/assets/images/shadipto.png";
import Image from "next/image";
import { FaLinkedin, FaSquareFacebook } from "react-icons/fa6";

const OurTeams = () => {
  return (
    <div className="py-16 bg-[#F3F8FF] dark:bg-[#040D12] lg:py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-20 lg:max-w-xl sm:text-center">
          <p className="inline-block px-3 py-px mb-4 text-lg bg-[#BFD8AF] font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Meet Our Team
          </p>
          <p className="text-base text-gray-700 dark:text-primary md:text-lg">
            Introducing Our Outstanding Group : Enthusiastic Professionals
            Committed to Crafting Your Vision and Reaching Outstanding Outcomes
            Together
          </p>
        </div>
        <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:max-w-screen-lg">
          <div>
            <div className="mb-4">
              <Image
                className="h-[200px] w-[200px] rounded-full object-cover object-center mx-auto"
                src={bichitro}
                alt="Person"
                height={200}
                width={200}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-xl font-bold">Bichitro Ghosh</p>
              <p className="text-gray-800 dark:text-[#78b64f] font-medium">
                Founder & CEO
              </p>
              <p className="mb-2 text-gray-800 dark:text-[#78b64f] font-medium">
                bichitro@growoly.com
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/bichitro-ghosh-0aab601b8/"
                  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin className="text-2xl dark:text-gray-200 dark:hover:text-[#78b64f]" />
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl dark:text-gray-200 dark:hover:text-[#78b64f]" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Image
                className="h-[200px] w-[200px] rounded-full object-cover object-center mx-auto boxglow"
                src={Shadipto}
                alt="Person"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-xl font-bold">Shadipto Mojumder</p>
              <p className="text-gray-800 dark:text-[#78b64f] font-medium">
                Full Stack Devloper
              </p>
              <p className="mb-2 text-gray-800 dark:text-[#78b64f] font-medium">
                shadipto@growoly.com
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/shadiptomojumder/"
                  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin className="text-2xl dark:text-gray-200 dark:hover:text-[#78b64f]" />
                </a>
                <a
                  href="https://www.facebook.com/shadipto.monjumder/"
                  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl dark:text-gray-200 dark:hover:text-[#78b64f]" />
                </a>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-4">
              <Image
                className="h-[200px] w-[200px] rounded-full object-cover object-center mx-auto"
                src={avijit}
                alt="Person"
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col sm:text-center">
              <p className="text-xl font-bold">Avijit Ghosh</p>
              <p className="text-gray-800 dark:text-[#78b64f] font-medium">
                CMO & Senior Maneger
              </p>
              <p className="mb-2 text-gray-800 dark:text-[#78b64f] font-medium">
                avi@growoly.com
              </p>
              <div className="flex items-center space-x-3 sm:justify-center">
                <a
                  href="https://www.linkedin.com/in/avijit-ghosh-7476aa1b5/"
                  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaLinkedin className="text-2xl dark:text-gray-200 dark:hover:text-[#78b64f]" />
                </a>
                <a
                  href="/"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl dark:text-gray-200 dark:hover:text-[#78b64f]" />
                </a>
              </div>
            </div>
          </div>
          {/* <div>
            <div className="mb-4">
              <Image
                height={200}
                width={200}
                className="h-[200px] w-[200px] rounded-full object-cover object-center mx-auto shadow-md"
                src={shadipto5}
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
                  href="/"
                  target="_blank"
                  className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                >
                  <FaSquareFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OurTeams;
