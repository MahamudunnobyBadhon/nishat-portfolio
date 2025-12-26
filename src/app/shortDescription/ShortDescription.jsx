"use client";
import dedication from "../assests/images/work.png";
import smartWork from "../assests/images/smart-working.png";
import technology from "../assests/images/technology.png";
import collaboration from "../assests/images/team-spirit.png";
import Image from "next/image";
import { motion } from "framer-motion";
import ArchitectureIcon from "@mui/icons-material/Architecture";
import SpeedIcon from "@mui/icons-material/Speed";
import GroupsIcon from "@mui/icons-material/Groups";
import InnovationIcon from "@mui/icons-material/LightbulbOutlined";

const ShortDescription = () => {
  const qualities = [
    {
      icon: ArchitectureIcon,
      title: "Solution Architect",
      description: "Designing scalable systems with MERN stack expertise",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: SpeedIcon,
      title: "Performance Expert",
      description: "40% improvement in Core Web Vitals & system efficiency",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: GroupsIcon,
      title: "Team Leader",
      description: "Leading agile teams and mentoring developers",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: InnovationIcon,
      title: "Innovation Driver",
      description: "Implementing cutting-edge technologies and best practices",
      color: "from-orange-500 to-red-500",
    },
  ];

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
    hidden: { y: 50, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-32 lg:pt-48">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <p className="text-xl md:text-3xl lg:text-4xl font-[600] tracking-wide opacity-55 pb-4">
          || Professional Excellence
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Senior Full Stack Engineer with proven expertise in architecting
          scalable solutions
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {qualities.map((quality, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="group relative"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700 group-hover:border-transparent">
              {/* Gradient Background on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${quality.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
              />

              {/* Icon */}
              <motion.div
                className="mb-6 relative z-10"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8 }}
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${quality.color} p-4 mx-auto shadow-lg`}
                >
                  <quality.icon className="w-full h-full text-white" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="text-center relative z-10">
                <motion.h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {quality.title}
                </motion.h3>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                  {quality.description}
                </p>
              </div>

              {/* Hover Effect Elements */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Additional Stats Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="bg-gradient-to-r from-[#FD6F00]/10 via-purple-500/10 to-pink-500/10 rounded-2xl md:rounded-full px-6 py-6 md:px-8 md:py-4 border border-[#FD6F00]/20 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-2xl font-bold text-[#FD6F00]">
                3+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Years Experience
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="sm:hidden h-px w-full bg-gray-300 dark:bg-gray-600"></div>

            <div className="text-center">
              <div className="text-3xl md:text-2xl font-bold text-green-600">
                30%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Efficiency Boost
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-gray-300 dark:bg-gray-600"></div>
            <div className="sm:hidden h-px w-full bg-gray-300 dark:bg-gray-600"></div>

            <div className="text-center">
              <div className="text-3xl md:text-2xl font-bold text-blue-600">
                6+
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Enterprise Projects
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ShortDescription;
