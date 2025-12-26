"use client";
import React from "react";
import HospitalProjectThumbnail from "../assests/projectSS/hospital-dash.png";
import EBuyProjectThumbnail from "../assests/projectSS/eBuy-landing.png";
import Image from "next/image";
import { motion, stagger, useAnimate, animate } from "framer-motion";
import "../../app/globals.css";
const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const Projects = () => {
  const projects = "Projects".split(" ");
  return (
    <div className=" pt-32 lg:pt-48">
      <div className="flex flex-col-reverse lg:flex-row gap-8">
        <div className="flex justify-center lg:max-w-[550px] min-h-[500px]">
          <div className="bg-gray-900 rounded-md px-5 pt-5 pb-8 shadow-lg opacity-80 ">
            <div className="relative group">
              <Image
                className="rounded-md w-full h-auto transition-transform duration-300 group-hover:scale-95"
                src={EBuyProjectThumbnail}
                alt="EBuy Project"
                width={1400}
                height={1400}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md"></div>
              <div className="absolute bottom-[-4%] left-[40%] flex justify-center">
                <motion.button
                  initial={{ "--x": "100%", scale: 1.02 }}
                  animate={{ "--x": "-100%" }}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                  className="px-6 py-2 rounded-md relative radial-gradient hover:bg-opacity-80"
                >
                  <span className="text-white font-[600] tracking-wide h-full w-full block relative linear-mask text-lg">
                    EBuy
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center lg:max-w-[550px] min-h-[500px]">
          <p className="text-xl md:text-3xl lg:text-4xl font-[600] tracking-wide opacity-55">
            || Projects
          </p>

          <p className="text-lg md:text-xl lg:text-2xl font-[600] tracking-wide opacity-55 my-8">
            Reflects my capability
          </p>
          <div className="bg-gray-900 rounded-md px-5 pt-5 pb-16 shadow-lg opacity-80 ">
            <div className="relative group">
              <Image
                className="rounded-md w-full h-[380px] transition-transform duration-300 group-hover:scale-95"
                src={HospitalProjectThumbnail}
                alt="Hospital Management"
                width={1400}
                height={1400}
              />
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-md"></div>
              <div className="absolute bottom-[-4%] left-[20%] sm:left-[30%] flex justify-center">
                <motion.button
                  initial={{ "--x": "100%", scale: 1.02 }}
                  animate={{ "--x": "-100%" }}
                  whileTap={{ scale: 0.97 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0px 0px 15px rgba(255, 255, 255, 0.5)",
                  }}
                  transition={{
                    repeat: Infinity,
                    repeatType: "loop",
                    repeatDelay: 1,
                    type: "spring",
                    stiffness: 20,
                    damping: 15,
                    mass: 2,
                    scale: {
                      type: "spring",
                      stiffness: 10,
                      damping: 5,
                      mass: 0.1,
                    },
                  }}
                  className="px-6 py-2 rounded-md relative radial-gradient hover:bg-opacity-80"
                >
                  <span className="text-lg text-white font-[600] tracking-wide h-full w-full block relative linear-mask">
                    MediAppoinment Care
                  </span>
                  <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
