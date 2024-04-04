import React from "react";
import {
  FaLinkedin,
  FaSquareGithub,
  FaSquareTwitter,
  FaSquareInstagram,
  FaSquareFacebook,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <main className="pt-16 bg-[#BFD8AF]">
      <div className="mx-auto container">
        <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                className="w-8 text-deep-purple-accent-400"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeWidth="2"
                strokeLinecap="round"
                strokeMiterlimit="10"
                stroke="currentColor"
                fill="none"
              >
                <rect x="3" y="1" width="7" height="12" />
                <rect x="3" y="17" width="7" height="6" />
                <rect x="14" y="1" width="7" height="6" />
                <rect x="14" y="11" width="7" height="12" />
              </svg>

              <h1 className="text-3xl ml-2 font-extrabold dark:text-primary">
                Growoly.
              </h1>
            </a>
            <div className="mt-6 lg:max-w-sm">
              <p className="text-sm text-gray-800">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <p className="mt-4 text-sm text-gray-800">
                Eaque ipsa quae ab illo inventore veritatis et quasi architecto
                beatae vitae dicta sunt explicabo.
              </p>
            </div>
          </div>
          <div className="space-y-2 text-sm">
            <p className="text-base font-bold tracking-wide text-[#0C0C0C]">
              Contacts
            </p>
            <div className="flex">
              <p className="mr-1 text-gray-800 font-medium">Phone:</p>
              <a
                href=" https://wa.me/+8801796692501"
                target="_blank"
                aria-label="Our phone"
                title="Our phone"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                +8801796692501
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 font-medium">Email:</p>
              <a
                href="mailto:info@growoly.com"
                target="_blank"
                aria-label="Our email"
                title="Our email"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                info@growoly.com
              </a>
            </div>
            <div className="flex">
              <p className="mr-1 text-gray-800 font-medium">Address:</p>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Our address"
                title="Our address"
                className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
              >
                Dhaka-1206, Bangladesh
              </a>
            </div>
          </div>
          <div>
            <span className="text-base font-bold tracking-wide text-gray-900">
              Social
            </span>
            <div className="flex items-center mt-1 space-x-3">
              <div className="">
                <a href="https://www.linkedin.com/company/growoly/"  target="_blank">
                  <FaLinkedin className="text-3xl hover:text-[#1B4242]" />
                </a>
              </div>
              <div className="">
                <a href="https://www.facebook.com/growoly?mibextid=ZbWKwL"  target="_blank">
                  <FaSquareFacebook className="text-3xl" />
                </a>
              </div>
              <div className="">
                <a href="#">
                  <FaSquareGithub className="text-3xl" />
                </a>
              </div>
              <div className="">
                <a href="#">
                  <FaSquareTwitter className="text-3xl" />
                </a>
              </div>
              <div className="">
                <a href="#">
                  <FaSquareInstagram className="text-3xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-5 border-t">
          <p className="text-sm text-gray-600 font-semibold">
            © Copyright 2024. All rights reserved by Growoly.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Footer;
