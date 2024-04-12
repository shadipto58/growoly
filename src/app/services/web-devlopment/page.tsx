import Image from "next/image";
import React from "react";
import { Montserrat } from "next/font/google";
import { MdStars } from "react-icons/md";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const montserrat = Montserrat({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--montserrat",
  display: "swap",
});

const webDevlopment = () => {
  return (
    <main className="container mx-auto">
      <div className="my-10 lg:my-20 flex flex-col lg:flex-row items-start justify-between gap-20">
        <div className="lg:w-1/2">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
            Web Devlopment
          </h2>
          <p className="text-base text-primary md:text-lg whitespace-normal lg:max-w-xl">
            We specialise in creating custom web solutions to help your business
            succeed in the digital sphere. Our Web Development Service combines
            cutting-edge technology, user-centric design, and high-level
            security. We collaborate closely with clients to design bespoke
            websites that attract people and drive outcomes. From responsive
            design for excellent viewing across devices to performance
            optimisation for fast user experiences, we prioritise quality at
            every stage. Our commitment goes beyond launch, with ongoing support
            and maintenance to keep your online platform secure and up to date.
            Improve your brands online visibility with Growoly, where innovation
            meets impact.
          </p>
          <section className="mt-8 grid grid-cols-2 gap-5">
            <div className="flex items-center gap-3">
              <div>
                <FaRegCheckCircle className="text-2xl" />
              </div>
              <p className="font-semibold">Web Application</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaRegCheckCircle className="text-2xl" />
              </div>
              <p className="font-semibold">Custom Website</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaRegCheckCircle className="text-2xl" />
              </div>
              <p className="font-semibold">E-Commerce Website</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaRegCheckCircle className="text-2xl" />
              </div>
              <p className="font-semibold">User friendly Interface</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaRegCheckCircle className="text-2xl" />
              </div>
              <p className="font-semibold">Responsive Design</p>
            </div>
            <div className="flex items-center gap-3">
              <div>
                <FaRegCheckCircle className="text-2xl" />
              </div>
              <p className="font-semibold">Maintain & Support</p>
            </div>
          </section>
        </div>
        <div className="mb-5">
          <Image
            src="https://res.cloudinary.com/doke1aoji/image/upload/v1708665894/jys3tuiwceidzoibrof2.png"
            alt="image"
            height={300}
            width={600}
            className="w-auto h-auto"
          />
        </div>
      </div>

      {/* Step Section */}
      <section>
        <div className="py-16 mx-auto lg:py-20">
          <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-20">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-lg bg-[#BFD8AF] font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                working process
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-primary sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="b902cd03-49cc-4166-a0ae-4ca1c31cedba"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#b902cd03-49cc-4166-a0ae-4ca1c31cedba)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">
                  The process we working through !
                </span>
              </span>
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="p-5 lg:w-[300px] md:w-1/2 w-full mx-auto border-2 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Step 1</p>
              </div>
              <p className="text-gray-600">
                First, we collect the clients website requirements, create a
                summary, and discuss the requirements.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FaArrowRightLong className="text-3xl lg:rotate-0 rotate-90" />
            </div>
            <div className="p-5 lg:w-[300px] md:w-1/2 w-full mx-auto border-2 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Step 2</p>
              </div>
              <p className="text-gray-600">
                Second, we analyse the material and plan how we will create it.
                Also, choosing design by ourselves or clients, and if they
                supply figma, psd, or something else, we plan exclusively on
                that.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FaArrowRightLong className="text-3xl lg:rotate-0 rotate-90" />
            </div>
            <div className="p-5 lg:w-[300px] md:w-1/2 w-full mx-auto border-2 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Step 3</p>
              </div>
              <p className="text-gray-600">
                Third, our highly qualified group of developers starts working
                through the plan and requirements.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <FaArrowRightLong className="text-3xl lg:rotate-0 rotate-90" />
            </div>
            <div className="p-5 lg:w-[300px] md:w-1/2 w-full mx-auto border-2 border-[#BFD8AF] rounded-lg bg-[#EEEEEE] shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <p className="text-2xl font-bold">Step 4</p>
              </div>
              <p className="text-gray-600">
                At last we Testing the web app on different devices like
                computers, laptops, tablets, Android phones, and iPhones with
                Safari before releasing it for the domain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="my-20">
        <div>
          <h2 className="text-center mb-3 font-sans text-3xl font-bold tracking-tight text-primary sm:text-3xl ">
            Meet Our Inovative Devloper Team
          </h2>
          <div className="flex items-center justify-center gap-2 mb-5">
            <div className="h-[3px] w-[40%] bg-primary rounded-full"></div>
            <div>
              <svg
                fill="#000000"
                height="30px"
                width="30px"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 381.164 381.164"
                xmlSpace="preserve"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M190.582,197.203c24.125,0,80.846-29.033,80.846-98.602c0-9.704-0.236-19.078-1.036-27.935 c-1.313-17.432-4.883-32.88-13.773-44.72C245.218,9.836,225.268,0,190.582,0c-34.68,0-54.628,9.833-66.029,25.937 c-8.895,11.841-12.468,27.295-13.781,44.732c-0.799,8.856-1.036,18.229-1.036,27.932 C109.736,168.17,166.457,197.203,190.582,197.203z M160.615,32.607c1.762-3.227,5.137-5.234,8.807-5.238 c4.232,0,7.854,2.625,9.338,6.324h23.633c0.498-1.248,1.244-2.394,2.221-3.373c1.893-1.9,4.416-2.949,7.098-2.952 c3.682-0.001,7.057,1.995,8.824,5.21c0.104,0.188,0.1,0.414-0.01,0.599c-0.108,0.185-0.307,0.298-0.52,0.298l-8.963,0.015 c-0.158,0.378-0.459,1.427-0.455,3.927c0.004,2.5,0.309,3.548,0.469,3.925l8.963-0.014c0.215,0.001,0.41,0.114,0.52,0.298 c0.111,0.184,0.113,0.412,0.012,0.6c-1.764,3.225-5.139,5.234-8.809,5.238l-0.014-0.002c-4.221,0-7.84-2.623-9.324-6.324h-23.633 c-0.498,1.248-1.242,2.395-2.219,3.373c-1.893,1.9-4.416,2.95-7.1,2.955c0-0.001-0.016,0-0.016,0c-3.664,0-7.041-1.996-8.809-5.211 c-0.104-0.188-0.098-0.416,0.01-0.6c0.107-0.184,0.307-0.299,0.521-0.299l8.961-0.014c0.158-0.377,0.461-1.426,0.455-3.926 c-0.004-2.501-0.309-3.549-0.469-3.926l-8.963,0.015v0.001c-0.213-0.002-0.41-0.115-0.52-0.299 C160.516,33.023,160.512,32.797,160.615,32.607z M121.764,83.517c0.931,2.038,4.888,9.87,11.013,10.604 c7.041,0.844,18.728-24.936,57.805-24.998c39.076,0.063,50.764,25.842,57.805,24.998c6.125-0.735,10.082-8.567,11.013-10.604 c0.19,4.992,0.259,10.045,0.259,15.084c0,34.006-15.015,55.076-27.612,66.763c-15.872,14.726-33.493,20.071-41.465,20.071 s-25.594-5.345-41.465-20.071c-12.597-11.687-27.612-32.757-27.612-66.763C121.505,93.562,121.574,88.509,121.764,83.517z"></path>{" "}
                    <path d="M340.675,298.327c-4.127-25.664-12.624-58.723-29.668-70.473c-11.634-8.021-52.229-29.71-69.564-38.971l-0.318-0.169 c-1.982-1.059-4.402-0.847-6.17,0.541c-9.084,7.131-19.034,11.937-29.574,14.283c-1.862,0.415-3.39,1.738-4.067,3.521 l-10.733,28.291l-10.733-28.291c-0.677-1.783-2.205-3.107-4.067-3.521c-10.54-2.346-20.49-7.152-29.574-14.283 c-1.768-1.388-4.188-1.601-6.17-0.541c-17.134,9.156-58.238,31.294-69.831,39.106c-19.62,13.219-28.198,61.053-29.718,70.508 c-0.151,0.938-0.064,1.897,0.253,2.793c0.574,1.619,12.713,32.971,88.578,44.41c6.631,11.591,16.536,21.23,28.38,27.497 c10.062,5.324,21.46,8.138,32.964,8.138c4.505,0,9.015-0.433,13.407-1.287c15.182-2.954,29.203-11.022,39.48-22.719 c3.158-3.594,5.923-7.498,8.273-11.626c75.882-11.438,88.024-42.794,88.598-44.413 C340.739,300.224,340.826,299.264,340.675,298.327z M250.922,314.036c-0.74,13.425-6.063,26.377-14.938,36.475 c-8.774,9.987-20.783,16.94-33.837,19.48c-3.79,0.738-7.638,1.102-11.483,1.102c-9.792,0-19.559-2.367-28.253-6.968 c-11.66-6.17-21.152-16.163-26.698-28.135c-5.764-12.445-7.091-26.762-3.743-40.064c3.234-12.861,10.794-24.456,21.189-32.678 c10.606-8.389,23.899-13.013,37.421-13.013c6.045,0,12.084,0.903,17.857,2.693c12.639,3.915,23.8,12.055,31.455,22.839 C247.763,286.856,251.67,300.46,250.922,314.036z"></path>{" "}
                    <path d="M200.061,310.668c5.65,1.119,11.267,2.799,16.535,5.136c5.09,2.258,9.651,5.444,14.384,8.332 c0.325,0.201,0.654,0.394,0.983,0.589c1.499-4.413,2.324-9.137,2.324-14.057c0-4.92-0.825-9.644-2.324-14.057 c-4.849,2.894-9.459,6.191-14.599,8.573C211.887,307.725,205.979,309.497,200.061,310.668z"></path>{" "}
                    <path d="M230.98,324.136C229.93,323.495,231.545,324.483,230.98,324.136L230.98,324.136z"></path>{" "}
                    <path d="M164.568,315.804c5.269-2.337,10.884-4.017,16.535-5.136c-6.005-1.188-12.011-2.993-17.559-5.602 c-5.038-2.371-9.574-5.609-14.343-8.456c-1.499,4.413-2.324,9.138-2.324,14.058c0,4.92,0.825,9.645,2.324,14.058 c0.328-0.196,0.658-0.389,0.982-0.59C154.917,321.248,159.481,318.062,164.568,315.804z"></path>{" "}
                    <path d="M150.183,324.136C149.62,324.483,151.233,323.495,150.183,324.136L150.183,324.136z"></path>{" "}
                    <path d="M198.615,267.713c0.144,5.718,0.771,11.426,0.298,17.144c-0.513,6.189-1.921,12.397-3.919,18.27 c4.12-4.609,8.828-8.864,13.953-12.339c4.766-3.23,10.068-5.49,15.138-8.175C217.704,275,208.778,269.602,198.615,267.713z"></path>{" "}
                    <path d="M186.17,303.126c-1.999-5.872-3.406-12.08-3.92-18.27c-0.471-5.718,0.156-11.426,0.299-17.144 c-10.163,1.889-19.088,7.287-25.47,14.899c5.155,2.731,10.545,5.022,15.373,8.335C177.479,294.398,182.108,298.584,186.17,303.126z "></path>{" "}
                    <path d="M182.25,336.48c0.515-6.186,1.915-12.4,3.92-18.269c-4.124,4.607-8.83,8.863-13.955,12.338 c-4.764,3.231-10.064,5.491-15.136,8.176c6.381,7.611,15.307,13.008,25.469,14.897C182.405,347.905,181.779,342.196,182.25,336.48z "></path>{" "}
                    <path d="M194.995,318.211c2.005,5.869,3.406,12.082,3.919,18.269c0.473,5.716-0.153,11.425-0.298,17.143 c10.162-1.889,19.088-7.287,25.469-14.898c-5.153-2.731-10.542-5.023-15.369-8.335 C203.685,326.938,199.059,322.752,194.995,318.211z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="h-[3px] w-[40%] bg-primary rounded-full"></div>
          </div>
        </div>
        <section className="flex flex-col md:flex-row items-center justify-center md:gap-10 gap-5">
          <div>
            <Image
              src="https://media.licdn.com/dms/image/D5603AQEzx_B8tmga3A/profile-displayphoto-shrink_200_200/0/1674403020960?e=1718236800&v=beta&t=ZqFwpJj1d-JyQFztTQNoklBJd66XFXjdnEeOiElI5LI"
              alt=""
              height={200}
              width={200}
              className="rounded-full w-[100px] h-[100px] mx-auto"
            />
            <h2 className="text-lg font-bold text-primary text-center mt-2">
              Shadipto Mojumder
            </h2>
            <p className="text-sm text-center text-primary font-medium italic">
              Full Stack Web Devloper
            </p>
          </div>
          <div>
            <Image
              src="https://media.licdn.com/dms/image/D5603AQEzx_B8tmga3A/profile-displayphoto-shrink_200_200/0/1674403020960?e=1718236800&v=beta&t=ZqFwpJj1d-JyQFztTQNoklBJd66XFXjdnEeOiElI5LI"
              alt=""
              height={200}
              width={200}
              className="rounded-full w-[100px] h-[100px] mx-auto"
            />
            <h2 className="text-lg font-bold text-primary text-center mt-2">
              Shadipto Mojumder
            </h2>
            <p className="text-sm text-center text-primary font-medium italic">
              Full Stack Web Devloper
            </p>
          </div>
          <div>
            <Image
              src="https://media.licdn.com/dms/image/D5603AQEzx_B8tmga3A/profile-displayphoto-shrink_200_200/0/1674403020960?e=1718236800&v=beta&t=ZqFwpJj1d-JyQFztTQNoklBJd66XFXjdnEeOiElI5LI"
              alt=""
              height={200}
              width={200}
              className="rounded-full w-[100px] h-[100px] mx-auto"
            />
            <h2 className="text-lg font-bold text-primary text-center mt-2">
              Shadipto Mojumder
            </h2>
            <p className="text-sm text-center text-primary font-medium italic">
              Full Stack Web Devloper
            </p>
          </div>
          <div>
            <Image
              src="https://media.licdn.com/dms/image/D5603AQEzx_B8tmga3A/profile-displayphoto-shrink_200_200/0/1674403020960?e=1718236800&v=beta&t=ZqFwpJj1d-JyQFztTQNoklBJd66XFXjdnEeOiElI5LI"
              alt=""
              height={200}
              width={200}
              className="rounded-full w-[100px] h-[100px] mx-auto"
            />
            <h2 className="text-lg font-bold text-primary text-center mt-2">
              Shadipto Mojumder
            </h2>
            <p className="text-sm text-center text-primary font-medium italic">
              Full Stack Web Devloper
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default webDevlopment;
