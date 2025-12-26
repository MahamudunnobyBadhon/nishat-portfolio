"use client";
import Image from "next/image";
import Email from "../assests/icons/mail.png";
import Phone from "../assests/icons/phone-call.png";
import Github from "../assests/icons/githubIcon.png";
import Whatsapp from "../assests/icons/whatsapp.png";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { motion } from "framer-motion";

const AboutMe = () => {
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
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-60 sm:pt-48 md:pt-48 lg:pt-72">
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="w-full flex flex-col items-start justify-center space-y-6"
          variants={itemVariants}
        >
          <motion.p
            className="text-xl md:text-3xl lg:text-4xl font-[600] tracking-wide opacity-55"
            variants={itemVariants}
          >
            || About Me
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-base sm:text-lg font-[500] tracking-wide leading-relaxed text-gray-700 dark:text-gray-300">
              <span className="font-bold text-[#FD6F00] text-lg">
                Full Stack Engineer
              </span>{" "}
              with{" "}
              <span className="font-semibold text-[#FD6F00]">
                3+ years of experience
              </span>{" "}
              architecting scalable web platforms using the{" "}
              <span className="font-semibold">MERN stack</span> (MongoDB,
              Express, React, Node.js).
            </p>

            <p className="text-base sm:text-lg font-[500] tracking-wide leading-relaxed text-gray-700 dark:text-gray-300">
              Proven track record of{" "}
              <span className="font-semibold text-green-600">
                improving system efficiency by 30%
              </span>
              , optimizing database performance, and leading frontend migrations
              in agile environments.
            </p>

            <p className="text-base sm:text-lg font-[500] tracking-wide leading-relaxed text-gray-700 dark:text-gray-300">
              Currently spearheading architectural migrations from React to
              Next.js, resulting in
              <span className="font-semibold text-blue-600">
                {" "}
                40% improvement in Core Web Vitals
              </span>{" "}
              and SEO rankings.
            </p>

            <div className="flex items-center space-x-2 pt-2">
              <LocationOnIcon className="text-[#FD6F00]" />
              <span className="text-lg font-semibold">Dhaka, Bangladesh</span>
            </div>
          </motion.div>

          {/* Skills Highlight */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 gap-4 pt-4"
          >
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg border border-blue-500/20">
              <h4 className="font-semibold text-blue-600 dark:text-blue-400">
                Frontend Expertise
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                React, Next.js, TypeScript
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-500/10 to-teal-500/10 p-4 rounded-lg border border-green-500/20">
              <h4 className="font-semibold text-green-600 dark:text-green-400">
                Backend Mastery
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Node.js, Express, MongoDB
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div className="w-full space-y-6" variants={itemVariants}>
          <motion.h3
            className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6"
            variants={itemVariants}
          >
            Get In Touch
          </motion.h3>

          <motion.div className="space-y-4">
            <motion.div
              className="flex flex-wrap gap-4 items-center py-3 text-base sm:text-lg group cursor-pointer hover:transform hover:translate-x-2 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <EmailRoundedIcon
                  fontSize="inherit"
                  style={{ fontSize: "3rem" }}
                  className="p-2 bg-[#FD6F00] dark:bg-white rounded-full font-sans cursor-pointer text-white dark:text-[#FD6F00] group-hover:shadow-lg transition-shadow duration-300"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">
                  rownokjahannishat17@gmail.com
                </span>
                <span className="text-sm text-gray-500">Primary Email</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 items-center py-3 text-base sm:text-lg group cursor-pointer hover:transform hover:translate-x-2 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <WhatsAppIcon
                  fontSize="inherit"
                  style={{ fontSize: "3rem" }}
                  className="p-2 bg-[#FD6F00] dark:bg-white rounded-full font-sans cursor-pointer text-white dark:text-[#FD6F00] group-hover:shadow-lg transition-shadow duration-300"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">+880 1722-310450</span>
                <span className="text-sm text-gray-500">WhatsApp</span>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 items-center py-3 text-base sm:text-lg group cursor-pointer hover:transform hover:translate-x-2 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <AddIcCallIcon
                  fontSize="inherit"
                  style={{ fontSize: "3rem" }}
                  className="p-2 bg-[#FD6F00] dark:bg-white rounded-full font-sans cursor-pointer text-white dark:text-[#FD6F00] group-hover:shadow-lg transition-shadow duration-300"
                />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold">+880 1722-310450</span>
                <span className="text-sm text-gray-500">Phone</span>
              </div>
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-4 items-center py-3 text-base sm:text-lg group hover:transform hover:translate-x-2 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="https://www.linkedin.com/in/rownok-jahan-nishat/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <LinkedInIcon
                    fontSize="inherit"
                    style={{ fontSize: "3rem" }}
                    className="p-2 bg-[#0077b5] rounded-full font-sans cursor-pointer text-white group-hover:shadow-lg transition-shadow duration-300"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    LinkedIn Profile
                  </span>
                  <span className="text-sm text-gray-500">
                    Professional Network
                  </span>
                </div>
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap gap-4 items-center py-3 text-base sm:text-lg group hover:transform hover:translate-x-2 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <a
                href="https://github.com/RownokNishat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 w-full"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <GitHubIcon
                    fontSize="inherit"
                    style={{ fontSize: "3rem" }}
                    className="p-2 bg-[#333] rounded-full font-sans cursor-pointer text-white group-hover:shadow-lg transition-shadow duration-300"
                  />
                </motion.div>
                <div className="flex flex-col">
                  <span className="text-lg font-semibold">
                    GitHub Portfolio
                  </span>
                  <span className="text-sm text-gray-500">Code Repository</span>
                </div>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};
export default AboutMe;
