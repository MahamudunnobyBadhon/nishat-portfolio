"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Logo from "../assests/images/logo.png";
import Ham from "../assests/images/burger-menu.svg";
import Close from "../assests/images/cross.png";
import DownloadButton from "./DownloadCv";
import DarkModeToggle from "./DarkModeToggle";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Handle hash navigation when landing on home page from detail page
  useEffect(() => {
    if (pathname === "/" && window.location.hash) {
      const sectionId = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [pathname]);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleNavigation = (sectionId) => {
    const isHomePage = pathname === "/";

    if (isHomePage) {
      // If on home page, just scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If on another page, navigate to home page with section hash
      router.push(`/#${sectionId}`);
    }

    // Close mobile menu if open
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-[#FBFBFB] dark:bg-[#252734] rounded">
      <div className="max-w-[1240px] mx-auto px-8 flex justify-between items-center dark:text-white p-4">
        <div className="flex items-center ">
          <Image src={Logo} width={60} height={70} alt="Logo" />
          <p className="text-2xl md:text-3xl lg:text-4xl font-mon text-[#1E1E1E] dark:text-white">
            {/* <span className="font-bold">N</span> */}
            <span className="ml-2">ishat </span>
          </p>
        </div>

        {/* Hamburger Menu */}
        <div className="flex justify-center items-center lg:hidden">
          <DarkModeToggle />
          <button className="ps-4" onClick={toggleMenu}>
            <Image src={Ham} width={40} height={40} alt="Menu" />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center">
          <div className="flex items-center gap-[0.75rem] lg:gap-[0.8rem] font-poppins">
            <button
              onClick={() => handleNavigation("home")}
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition cursor-pointer"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("about")}
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition cursor-pointer"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation("skills")}
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition cursor-pointer"
            >
              Skills
            </button>
            <button
              onClick={() => handleNavigation("projects")}
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition cursor-pointer"
            >
              Projects
            </button>
            <button
              onClick={() => handleNavigation("education")}
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition cursor-pointer"
            >
              Education
            </button>
            <button
              onClick={() => handleNavigation("contacts")}
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition cursor-pointer"
            >
              Contacts
            </button>
            <DownloadButton />
            <DarkModeToggle />

            {/* <button className="bg-[#FD6F00] lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] rounded-md text-[#FFFFFF]">
              Download CV
            </button> */}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900">
            <div className="flex items-center justify-between w-full p-12">
              <div className="flex items-center gap-3">
                <Image src={Logo} width={60} height={70} alt="Logo" />
                <p className="text-5xl font-mon text-white">
                  <span className="font-bold">M</span>
                  <span>umair </span>
                </p>
              </div>
              <Image
                className="text-white cursor-pointer"
                onClick={toggleMenu}
                src={Close}
                width={60}
                height={70}
                alt="Close"
              />
            </div>
            <div className="flex flex-col items-center justify-center flex-grow">
              <button
                onClick={() => handleNavigation("home")}
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00] cursor-pointer"
              >
                Home
              </button>
              <button
                onClick={() => handleNavigation("about")}
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00] cursor-pointer"
              >
                About Me
              </button>
              <button
                onClick={() => handleNavigation("skills")}
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00] cursor-pointer"
              >
                Skills
              </button>
              <button
                onClick={() => handleNavigation("projects")}
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00] cursor-pointer"
              >
                Projects
              </button>
              <button
                onClick={() => handleNavigation("education")}
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00] cursor-pointer"
              >
                Education
              </button>
              <button
                onClick={() => handleNavigation("contacts")}
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00] cursor-pointer"
              >
                Contacts
              </button>
              <button
                className="bg-[#FD6F00] py-2 px-4 rounded-md text-white"
                onClick={toggleMenu}
              >
                Download CV
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
