"use client";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

const Education = () => {
  const educationData = [
    {
      title: "M.Sc. in Computer Science & Engineering",
      institution: "BRAC University",
      period: "Expected Graduation: June 2025",
      details: "Pursuing advanced studies in Computer Science & Engineering",
      type: "education",
      inProgress: true,
    },
    {
      title: "B.Sc. in Computer Science & Engineering",
      institution: "Ahsanullah University of Science and Technology",
      period: "Graduated",
      details:
        "CGPA: 3.64 | Research: Certificate Authentication using Blockchain",
      type: "education",
      inProgress: false,
    },
  ];

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
          || Education & Career Journey
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Academic excellence combined with practical industry experience
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FD6F00] via-purple-500 to-pink-500"></div>

          {/* Current Position */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center">
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full shadow-lg">
                <WorkIcon className="text-white text-xl" />
              </div>
              <div className="ml-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    Software Engineer
                  </h3>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Current
                  </span>
                </div>
                <h4 className="text-lg text-[#FD6F00] font-semibold mb-2">
                  Qlearn
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  May 2024 – Present
                </p>
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  Leading React to Next.js migrations, architecting REST APIs,
                  and implementing CI/CD pipelines
                </p>
              </div>
            </div>
          </motion.div>

          {educationData.map((item, index) => (
            <motion.div
              key={index}
              className="relative mb-12"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
            >
              <div className="flex items-start">
                <div
                  className={`relative z-10 flex items-center justify-center w-16 h-16 rounded-full shadow-lg ${
                    item.inProgress
                      ? "bg-gradient-to-br from-blue-500 to-purple-500"
                      : "bg-gradient-to-br from-[#FD6F00] to-orange-500"
                  }`}
                >
                  <SchoolIcon className="text-white text-xl" />
                </div>
                <div className="ml-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 flex-1 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                      {item.title}
                    </h3>
                    {item.inProgress && (
                      <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        In Progress
                      </span>
                    )}
                  </div>
                  <h4 className="text-lg text-[#FD6F00] font-semibold mb-2">
                    {item.institution}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {item.period}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {item.details}
                  </p>

                  {item.title.includes("B.Sc") && (
                    <div className="mt-4">
                      <a
                        href="https://github.com/RownokNishat/certificate_authentication"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors duration-200"
                      >
                        📝 Research Project: Certificate Authentication using
                        Blockchain
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Previous Experience */}
          <motion.div
            className="relative mb-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex items-center">
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full shadow-lg">
                <WorkIcon className="text-white text-xl" />
              </div>
              <div className="ml-8 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 flex-1">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                  Previous Experience
                </h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg text-[#FD6F00] font-semibold">
                      Ragnet Software Ltd
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Software Engineer | Feb 2023 – May 2024
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg text-[#FD6F00] font-semibold">
                      Diligite
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Frontend Developer | Sept 2022 – Feb 2023
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
