"use client";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa6";
import { ThemeToggle } from "@/components/themeProvider/theme-toggle"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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

  console.log("MenuOpen is :", menuOpen);

  return (
    <nav className="border-b sticky top-0 z-50 bg-[#BFD8AF] dark:bg-transparent">
      <div className="container m-auto flex md:flex-row flex-col justify-between items-center md:gap-0 py-5">
        <div className="flex items-center justify-between md:w-auto w-full">
          <h1 className="text-3xl font-extrabold dark:text-primary">
            Growoly.
          </h1>
          <Button onClick={toggleMenu} className="md:hidden">
            <FaBars className="text-xl" />
          </Button>
        </div>
        <div className="md:flex hidden gap-5 items-center">
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
            <Button variant={"ghost"} className="font-bold text-base text-primary">
              Team
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"ghost"} className="font-bold text-base text-primary">
              Contact
            </Button>
          </Link>
          <Link href={"/"}>
            <Button variant={"ghost"} className="font-bold text-base text-primary">
              Contact us
            </Button>
          </Link>
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
                  <Button variant={"ghost"} className="font-bold text-base text-primary">
                    About
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button variant={"ghost"} className="font-bold text-base text-primary">
                    Team
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button variant={"ghost"} className="font-bold text-base text-primary">
                    Contact
                  </Button>
                </Link>
                <Link href={"/"}>
                  <Button variant={"ghost"} className="font-bold text-base text-primary">
                    Contact us
                  </Button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

            <div>
            <ThemeToggle></ThemeToggle>
            </div>
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
