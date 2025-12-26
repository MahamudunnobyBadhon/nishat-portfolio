"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Linkedin from "../assests/icons/linkedin.png";
import LinkedinWhite from "../assests/icons/linkedin.png";
import Github from "../assests/icons/github.png";
import NishatPortfolio from "../assests/images/nishat-portfolio.jpg";
import CloudDownloadRoundedIcon from "@mui/icons-material/CloudDownloadRounded";
import DownloadButton from "../component/DownloadCv";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CodeIcon from "@mui/icons-material/Code";
import WorkIcon from "@mui/icons-material/Work";

export const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState(0);

  const roles = [
    "Full Stack Engineer",
    "MERN Stack Developer",
    "Software Architect",
    "React.js Expert",
  ];

  const currentRoleText = roles[currentRole];

  useEffect(() => {
    if (currentIndex < currentRoleText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentRoleText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentIndex(0);
        setDisplayedText("");
        setCurrentRole((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, currentRoleText, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-lg opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-lg opacity-20"
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
        <motion.div
          className="flex flex-col justify-center space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-2 text-gray-600 dark:text-gray-400"
          >
            <LocationOnIcon className="text-[#FD6F00]" />
            <span className="text-lg">Dhaka, Bangladesh</span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl tracking-wider text-gray-700 dark:text-gray-300"
          >
            Hello! I'm
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl tracking-wider font-extrabold mt-2 bg-gradient-to-r from-[#FD6F00] via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Rownok Jahan Nishat
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="h-16 flex items-center"
          >
            <span className="text-2xl md:text-3xl font-semibold text-gray-800 dark:text-gray-200">
              {displayedText}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-[#FD6F00]"
              >
                |
              </motion.span>
            </span>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6"
          >
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#FD6F00]/20 to-purple-500/20 rounded-full border border-[#FD6F00]/30">
              <WorkIcon className="text-[#FD6F00]" />
              <span className="font-semibold text-lg">3+ Years Experience</span>
            </div>
            <div className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full border border-green-500/30">
              <CodeIcon className="text-green-500" />
              <span className="font-semibold text-lg">Full Stack</span>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="pt-4">
            <DownloadButton />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-lg"
          >
            Architecting scalable web platforms with MERN stack. Specialized in
            improving system efficiency, optimizing performance, and leading
            frontend migrations in agile environments.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="relative group">
            {/* Main Profile Image */}
            <motion.div
              className="relative z-20"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-[350px] h-[450px] md:w-[400px] md:h-[500px] rounded-2xl overflow-hidden border-4 border-gradient-to-r from-[#FD6F00] to-purple-500 shadow-2xl">
                <Image
                  className="w-full h-full object-cover filter hover:contrast-110 transition-all duration-300"
                  src={NishatPortfolio}
                  alt="Rownok Jahan Nishat - Full Stack Engineer"
                  width={400}
                  height={500}
                  priority
                />
              </div>

              {/* Floating Tech Stack Icons */}
              <motion.div
                className="absolute -top-4 -left-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg z-30"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span className="text-white font-bold text-sm">React</span>
              </motion.div>

              <motion.div
                className="absolute -top-2 -right-6 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-30"
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <span className="text-white font-bold text-sm">Node</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-6 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center shadow-lg z-30"
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              >
                <span className="text-white font-bold text-sm">TS</span>
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-4 w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center shadow-lg z-30"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
              >
                <span className="text-white font-bold text-sm">Next</span>
              </motion.div>
            </motion.div>

            {/* Animated Background Elements */}
            <motion.div
              className="absolute -inset-8 bg-gradient-to-r from-[#FD6F00]/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl z-10"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Social Media Links */}
            <div className="absolute -right-16 top-1/4 flex flex-col space-y-4 z-30">
              <motion.a
                href="https://www.linkedin.com/in/rownok-jahan-nishat/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#0077b5] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <LinkedInIcon fontSize="small" />
              </motion.a>

              <motion.a
                href="https://github.com/RownokNishat"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-[#333] rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.2, rotate: -360 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <GitHubIcon fontSize="small" />
              </motion.a>

              {/* Portfolio Link */}
              <motion.div
                className="w-12 h-12 bg-gradient-to-r from-[#FD6F00] to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg cursor-pointer"
                whileHover={{ scale: 1.2, rotate: 180 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <CodeIcon fontSize="small" />
              </motion.div>
            </div>

            {/* Experience Badge */}
            <motion.div
              className="absolute -left-16 bottom-1/4 bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-xl border border-[#FD6F00]/20 z-30"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-[#FD6F00]">3+</div>
                <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Years
                </div>
                <div className="text-xs text-gray-500">Experience</div>
              </div>
            </motion.div>

            {/* Current Role Badge */}
            <motion.div
              className="absolute -top-4 left-[25%] md:left-[20%] transform -translate-x-1/2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full px-4 md:px-6 py-2 shadow-lg z-30 max-w-[200px] md:max-w-none"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <div className="text-white text-xs md:text-sm font-semibold whitespace-nowrap">
                Software Engineer @ Qlearn
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
