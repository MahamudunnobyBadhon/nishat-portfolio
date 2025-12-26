"use client";
import { useState } from "react";
import Image from "next/image";
import Logo from "../assests/images/logo.png";
import Ham from "../assests/images/burger-menu.svg";
import Close from "../assests/images/cross.png";
import DownloadButton from "./DownloadCv";
import DarkModeToggle from "./DarkModeToggle";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
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
            <a
              href="#home"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition"
            >
              About
            </a>
            <a
              href="#skills"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition"
            >
              Projects
            </a>
            <a
              href="#education"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition"
            >
              Education
            </a>
            <a
              href="#contacts"
              className="lg:py-[0.5rem] lg:px-[0.5rem] xl:py-[0.75rem] xl:px-[1rem] hover:underline hover:text-[#FD6F00] transition"
            >
              Contacts
            </a>
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
              <a
                href="#home"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00]"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#about"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00]"
                onClick={toggleMenu}
              >
                About Me
              </a>
              <a
                href="#skills"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00]"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00]"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#education"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00]"
                onClick={toggleMenu}
              >
                Education
              </a>
              <a
                href="#contacts"
                className="text-white py-4 transition-opacity duration-300 ease-in-out hover:underline hover:text-[#FD6F00]"
                onClick={toggleMenu}
              >
                Contacts
              </a>
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
