"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ThemeToggle } from "@/components/themeProvider/theme-toggle";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";

const NavLinks = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "about",
  },
  {
    id: 3,
    name: "Services",
    link: "services",
    servicesList: [
      {
        id: 1,
        name: "Web dev",
      },
    ],
  },
  {
    id: 4,
    name: "Contact Us",
    link: "contact",
  },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Here logic of when menu is open the scrollbar willbe disable
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [menuOpen]);
  // Toggle menu open/close state
  const toggleMenu = () => {
    setMenuOpen((prevMenuOpen) => !prevMenuOpen);
  };

  return (
    <nav className=" sticky top-0 z-50 bg-[#BFD8AF] dark:bg-[#040D12] dark:bg-opacity-[0.9] dark:backdrop-blur-md shadow-md">
      <div className="container mx-auto flex md:flex-row flex-col justify-between items-center md:gap-0 py-5">
        <div className="flex items-center justify-between md:w-auto w-full">
          <Link href="/">
            <h1 className="text-3xl font-extrabold dark:text-primary">
              Growoly.
            </h1>
          </Link>
          <Button onClick={toggleMenu} className="md:hidden">
            <FaBars className="text-xl" />
          </Button>
        </div>
        <div className="md:flex hidden gap-5 items-center">
          {/* {NavLinks.map((navlink, index) => (
            <Link key={navlink.id} href={`/${navlink.link}`}>
              <Button
                variant={"ghost"}
                className={
                  pathname.startsWith(`/${navlink.link}`)
                    ? "bg-[#FEFAE0] font-extrabold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:bg-[#092635] dark:hover:bg-[#092635]"
                    : "font-bold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:hover:bg-[#092635]"
                }
              >
                {navlink.name}
              </Button>
            </Link>
          ))} */}

          <Link href="/">
            <Button
              variant={"ghost"}
              className={
                pathname.startsWith(`/home`)
                  ? "bg-[#FEFAE0] font-extrabold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:hover:bg-[#092635]"
                  : "font-bold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:hover:bg-[#092635]"
              }
            >
              Home
            </Button>
          </Link>

          <div className="relative group ">
            <Link href="">
              <Button
                variant={"ghost"}
                className={
                  pathname.startsWith(`/services`)
                    ? "bg-[#FEFAE0] font-extrabold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:bg-[#092635] dark:hover:bg-[#092635]"
                    : "font-bold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:hover:bg-[#092635]"
                }
              >
                Services
                <IoIosArrowDown className="ml-1 text-lg group-hover:rotate-180 transition-all duration-300" />
              </Button>
            </Link>
            <div className="hidden group-hover:block w-max absolute top-[100%] left-1/2 -translate-x-1/2">
              <div className="h-1 w-full bg-transparent"></div>
              <div className="flex flex-col gap-2 p-3 rounded-lg bg-white dark:bg-[#040D12] border-[1px] border-[#BFD8AF] shadow-md">
                <Link
                  href="/services/web-devlopment"
                  className="text-sm font-medium hover:underline text-primary dark:text-gray-200 dark:hover:text-primary"
                >
                  Web Devlopment
                </Link>
                <Link
                  href="/services/graphic-design"
                  className="text-sm font-medium hover:underline text-primary dark:text-gray-200 dark:hover:text-primary"
                >
                  Graphic Design
                </Link>
                <Link
                  href="/services/digital-marketing"
                  className="text-sm font-medium hover:underline text-primary dark:text-gray-200 dark:hover:text-primary"
                >
                  Digital Marketing
                </Link>
                <Link
                  href="/services/buisness-consulting"
                  className="text-sm font-medium hover:underline text-primary dark:text-gray-200 dark:hover:text-primary"
                >
                  Buisness Consulting
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about">
            <Button
              variant={"ghost"}
              className={
                pathname.startsWith(`/about`)
                  ? "bg-[#FEFAE0] font-extrabold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:bg-[#092635] dark:hover:bg-[#092635]"
                  : "font-bold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:hover:bg-[#092635]"
              }
            >
              About
            </Button>
          </Link>

          <Link href="/contact">
            <Button
              variant={"ghost"}
              className={
                pathname.startsWith(`/contact`)
                  ? "bg-[#FEFAE0] font-extrabold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:bg-[#092635] dark:hover:bg-[#092635]"
                  : "font-bold text-base text-primary hover:text-primary hover:bg-[#FEFAE0] dark:hover:bg-[#092635]"
              }
            >
              Contact
            </Button>
          </Link>
          <ThemeToggle></ThemeToggle>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col md:hidden gap-5 items-center md:pt-0 pt-5 h-screen">
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="font-bold text-base text-primary"
                  >
                    Home
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="font-bold text-base text-primary"
                  >
                    About
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="font-bold text-base text-primary"
                  >
                    Team
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="font-bold text-base text-primary"
                  >
                    Contact
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button
                    variant={"ghost"}
                    className="font-bold text-base text-primary"
                  >
                    Contact us
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* <div>
          <ThemeToggle></ThemeToggle>
        </div> */}
        {/* <Link href={"/"} className="hidden md:block">
          <Button>Get in touch</Button>
        </Link> */}
      </div>
      {/* <div className={`h-screen w-full bg-black bg-opacity-[0.1] backdrop-blur-sm fixed inset-0`}>
      </div> */}
    </nav>
  );
};

export default Header;
