"use client";
import react from "../assests/icons/react.png";
import next from "../assests/icons/nextjs.png";
import bootstrap from "../assests/icons/bootstrap.png";
import css from "../assests/icons/css.png";
import daisyUI from "../assests/icons/daisyUI.png";
import firebase from "../assests/icons/firebase.png";
import github from "../assests/icons/github.png";
import html from "../assests/icons/html.webp";
import javascript from "../assests/icons/javascript.png";
import jwt from "../assests/icons/jwt.png";
import materialui from "../assests/icons/material-ui.png";
import mongo from "../assests/icons/mongo.jpg";
import nextjs from "../assests/icons/nextjs.png";
import redux from "../assests/icons/redux.jpg";
import restapi from "../assests/icons/restapi.jpg";
import sql from "../assests/icons/sql.png";
import tailwind from "../assests/icons/tailwind.jpg";
import typescript from "../assests/icons/typescript.png";
import vue from "../assests/icons/vue.png";
import node from "../assests/icons/nodejs.png";
import vscode from "../assests/icons/vscode.png";
import { motion } from "framer-motion";
import ThreeDIcon from "../utils/ThreeDIcons";

const MySkills = () => {
  const skillCategories = {
    "Languages & Frameworks": [
      { id: 1, src: javascript, name: "JavaScript (ES6+)" },
      { id: 2, src: typescript, name: "TypeScript" },
      { id: 3, src: react, name: "React.js" },
      { id: 4, src: nextjs, name: "Next.js" },
      { id: 5, src: node, name: "Node.js" },
      { id: 6, src: restapi, name: "Express.js" },
    ],
    "Frontend Technologies": [
      { id: 7, src: tailwind, name: "Tailwind CSS" },
      { id: 8, src: materialui, name: "Material UI" },
      { id: 9, src: css, name: "CSS3" },
      { id: 10, src: html, name: "HTML5" },
      { id: 11, src: redux, name: "Redux Toolkit" },
      { id: 12, src: bootstrap, name: "Bootstrap" },
    ],
    "Database & Tools": [
      { id: 13, src: mongo, name: "MongoDB" },
      { id: 14, src: sql, name: "PostgreSQL/MySQL" },
      { id: 15, src: github, name: "Git & GitHub" },
      { id: 16, src: vscode, name: "VS Code" },
      { id: 17, src: jwt, name: "JWT" },
      { id: 18, src: firebase, name: "AWS/Vercel" },
    ],
  };

  const allSkills = [
    ...skillCategories["Languages & Frameworks"],
    ...skillCategories["Frontend Technologies"],
    ...skillCategories["Database & Tools"],
  ];

  return (
    <div className="pt-32 lg:pt-48">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <p className="text-2xl md:text-3xl lg:text-4xl font-[600] tracking-wide text-[#FD6F00] opacity-90 pb-4">
          Technical Skills
        </p>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 font-[500]">
          3+ Years of Experience with Modern Technologies
        </p>
      </motion.div>

      {/* Skill Categories */}
      <div className="space-y-16">
        {Object.entries(skillCategories).map(
          ([category, skills], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <h3 className="text-xl md:text-2xl font-[600] tracking-wide text-center mb-8 text-[#FD6F00]">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {skills.map((skill, i) => (
                  <motion.div
                    key={skill.id}
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: i * 0.1,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, -5, 0],
                      transition: { duration: 0.3 },
                    }}
                    className="group cursor-pointer bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-[#FD6F00] p-6 rounded-xl flex justify-center items-center flex-col shadow-lg hover:shadow-2xl transition-all duration-300 h-36"
                  >
                    <div className="mb-3 group-hover:scale-110 transition-transform duration-300">
                      <ThreeDIcon src={skill.src} alt={skill.name} />
                    </div>
                    <p className="text-center text-sm md:text-base font-[600] tracking-wide text-gray-800 dark:text-gray-200 group-hover:text-[#FD6F00] transition-colors duration-300">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        )}
      </div>

      {/* Professional Highlights */}
      <motion.div
        className="mt-20 bg-gradient-to-r from-[#FD6F00]/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-[#FD6F00]/20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-xl md:text-2xl font-[600] tracking-wide text-center mb-8">
          Professional Achievements
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-[700] tracking-wide text-[#FD6F00]">40%</div>
            <div className="text-lg font-[600] tracking-wide">
              Core Web Vitals Improvement
            </div>
            <div className="text-sm font-[500] text-gray-600 dark:text-gray-400">
              React to Next.js Migration
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-[700] tracking-wide text-green-600">30%</div>
            <div className="text-lg font-[600] tracking-wide">System Efficiency Boost</div>
            <div className="text-sm font-[500] text-gray-600 dark:text-gray-400">
              Performance Optimization
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-[700] tracking-wide text-blue-600">6+</div>
            <div className="text-lg font-[600] tracking-wide">Enterprise ERP Modules</div>
            <div className="text-sm font-[500] text-gray-600 dark:text-gray-400">
              Full SDLC Management
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default MySkills;
