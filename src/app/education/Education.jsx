"use client";
import { motion } from "framer-motion";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import LinkIcon from "@mui/icons-material/Link";

const Education = () => {
  const experienceData = [
    {
      company: "Qlearn",
      position: "Software Engineer",
      location: "Remote",
      period: "May 2024 – Present",
      isCurrent: true,
      link: "https://qlearn.com",
      achievements: [
        "Spearheading the architectural migration from React to Next.js, resulting in a 40% improvement in Core Web Vitals and SEO rankings.",
        "Architecting secure, scalable REST APIs using Node.js/Express with complex role-based access control (RBAC).",
        "Established a standardized UI component library using Material UI and Tailwind, reducing frontend development time by 30%.",
        "Implementing CI/CD pipelines via GitHub Actions to automate testing and deployment workflows.",
      ],
    },
    {
      company: "Ragnet Software Ltd",
      position: "Software Engineer",
      location: "Dhaka, Bangladesh",
      period: "Feb 2023 – May 2024",
      isCurrent: false,
      achievements: [
        "Independently managed the full SDLC for 6+ Enterprise ERP modules, delivering critical financial tools.",
        "Engineered real-time cashbook tracking systems using Socket.io, increasing data accuracy by 25%.",
        "Refactored legacy codebases to improve internal workflow efficiency by 30% and reduce technical debt.",
        "Designed middleware-based Role-Based Access Control (RBAC), ensuring strict data privacy.",
      ],
    },
    {
      company: "Diligite",
      position: "Frontend Developer",
      location: "Remote",
      period: "Sept 2022 – Feb 2023",
      isCurrent: false,
      achievements: [
        "Developed key features, including product favoriting and live order tracking, driving a 20% increase in user engagement.",
        "Refactored legacy UI components using Tailwind CSS, achieving a 15-point improvement in Lighthouse scores.",
      ],
    },
  ];

  const educationData = [
    {
      degree: "M.Sc. in Computer Science & Engineering",
      institution: "BRAC University",
      period: "Expected Graduation: June 2025",
      inProgress: true,
    },
    {
      degree: "B.Sc. in Computer Science & Engineering",
      institution: "Ahsanullah University of Science and Technology",
      period: "Graduated",
      cgpa: "3.64",
      research: "Certificate Authentication using Blockchain",
      researchLink:
        "https://github.com/RownokNishat/certificate_authentication",
      inProgress: false,
    },
  ];

  return (
    <div className="pt-32 lg:pt-48 space-y-24">
      {/* Professional Experience Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-[600] tracking-wide text-[#FD6F00] opacity-90 pb-4">
            Professional Experience
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-[500] max-w-2xl mx-auto">
            3+ years of building scalable web applications
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto space-y-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                        exp.isCurrent
                          ? "bg-gradient-to-br from-green-500 to-emerald-500"
                          : "bg-gradient-to-br from-purple-500 to-pink-500"
                      }`}
                    >
                      <BusinessCenterIcon className="text-white text-2xl" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="text-xl md:text-2xl font-[600] tracking-wide text-gray-800 dark:text-white">
                          {exp.position}
                        </h3>
                        {exp.isCurrent && (
                          <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-[600]">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        <h4 className="text-lg font-[600] tracking-wide text-[#FD6F00]">
                          {exp.company}
                        </h4>
                        {exp.link && (
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
                          >
                            <LinkIcon className="text-sm" />
                          </a>
                        )}
                      </div>
                      <p className="text-sm font-[500] text-gray-600 dark:text-gray-400 mt-1">
                        {exp.location} | {exp.period}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  {exp.achievements.map((achievement, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * idx }}
                      className="flex items-start gap-3"
                    >
                      <span className="flex-shrink-0 w-2 h-2 bg-[#FD6F00] rounded-full mt-2"></span>
                      <p className="text-base font-[500] text-gray-700 dark:text-gray-300 leading-relaxed">
                        {achievement}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-2xl md:text-3xl lg:text-4xl font-[600] tracking-wide text-[#FD6F00] opacity-90 pb-4">
            Education
          </p>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-[500] max-w-2xl mx-auto">
            Academic foundation in Computer Science & Engineering
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center shadow-lg ${
                      edu.inProgress
                        ? "bg-gradient-to-br from-blue-500 to-purple-500"
                        : "bg-gradient-to-br from-[#FD6F00] to-orange-500"
                    }`}
                  >
                    <SchoolIcon className="text-white text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap mb-2">
                      <h3 className="text-xl md:text-2xl font-[600] tracking-wide text-gray-800 dark:text-white">
                        {edu.degree}
                      </h3>
                      {edu.inProgress && (
                        <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-[600]">
                          In Progress
                        </span>
                      )}
                    </div>
                    <h4 className="text-lg font-[600] tracking-wide text-[#FD6F00] mb-2">
                      {edu.institution}
                    </h4>
                    <p className="text-sm font-[500] text-gray-600 dark:text-gray-400 mb-3">
                      {edu.period}
                    </p>
                    {edu.cgpa && (
                      <p className="text-base font-[500] text-gray-700 dark:text-gray-300">
                        <span className="font-[600]">CGPA:</span> {edu.cgpa}
                      </p>
                    )}
                    {edu.research && (
                      <div className="mt-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm font-[600] text-gray-700 dark:text-gray-300 mb-2">
                          Research Project:
                        </p>
                        <a
                          href={edu.researchLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-[500] transition-colors"
                        >
                          <span>📝 {edu.research}</span>
                          <LinkIcon className="text-sm" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
