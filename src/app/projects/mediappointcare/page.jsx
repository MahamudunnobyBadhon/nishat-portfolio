"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../component/Header";
import HospitalProjectThumbnail from "../../assests/projectSS/hospital-dash.png";

const MediAppointCare = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = {
    doctor: [
      "Register with BMDC number",
      "Manage multiple hospital affiliations",
      "Write detailed digital prescriptions",
      "Handle appointment requests (approve/reject)",
      "View patient history and previous prescriptions",
      "Set unavailable days and time slots",
      "Update profile and consultation notes",
    ],
    hospital: [
      "Register with DGHS number",
      "Manage doctors, staff, and medical students",
      "Handle diagnostic test details and pricing",
      "Track test reports and lab results",
      "Manage ambulance contact numbers",
      "View all appointments and prescriptions",
      "Notification management",
    ],
    patient: [
      "Register and maintain health profile",
      "Search and find doctors by specialization",
      "Book appointments with preferred doctors",
      "View prescription history",
      "Access test reports",
      "Receive real-time notifications",
      "Print/download prescriptions",
    ],
  };

  const techStack = {
    backend: [
      { name: "Node.js", version: "14.15.1" },
      { name: "Express.js", version: "4.18.0" },
      { name: "MongoDB", version: "Latest" },
      { name: "Mongoose", version: "ODM" },
      { name: "JWT", version: "Authentication" },
      { name: "Bcrypt", version: "Password Hashing" },
      { name: "Cloudinary", version: "Image Storage" },
    ],
    frontend: [
      { name: "React", version: "16.13.1" },
      { name: "Redux", version: "State Management" },
      { name: "Material-UI", version: "4.11.0" },
      { name: "Chart.js", version: "Data Visualization" },
      { name: "Axios", version: "HTTP Client" },
      { name: "React Router", version: "v5" },
      { name: "Redux-Persist", version: "Offline Support" },
    ],
  };

  const demoCredentials = [
    { role: "Doctor", phone: "01786312998", password: "123123", icon: "👨‍⚕️" },
    {
      role: "Hospital",
      phone: "01786312998",
      password: "123123",
      icon: "🏥",
    },
    { role: "Patient", phone: "01786312998", password: "123123", icon: "🧑‍⚕️" },
  ];

  const keyHighlights = [
    {
      title: "Multi-role Support",
      description:
        "Hospitals, Doctors, Patients, Pharmaceutical Companies, and Medical Students",
      icon: "👥",
    },
    {
      title: "Complete EMR",
      description:
        "Digital prescription writing with comprehensive medical examination records",
      icon: "📋",
    },
    {
      title: "Smart Appointment System",
      description: "Real-time booking with time slot management",
      icon: "📅",
    },
    {
      title: "Real-time Notifications",
      description: "Instant updates for prescriptions and appointments",
      icon: "🔔",
    },
    {
      title: "Secure Authentication",
      description: "JWT-based authentication with role-based access control",
      icon: "🔒",
    },
    {
      title: "Print & PDF",
      description: "Generate printable prescriptions and reports",
      icon: "🖨️",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#1a1a2e]">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/#projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-8 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors shadow-lg"
            >
              ← Back to Projects
            </motion.button>
          </Link>

          {/* Header Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            {/* Hero Banner */}
            <div className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-blue-200 dark:border-blue-800 mb-8">
              <div className="text-center">
                {/* Project Type Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-sm font-bold shadow-lg">
                    ⭐ Featured Full-Stack Project
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
                >
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-800 bg-clip-text text-transparent">
                    MediAppointCare
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-3 font-semibold"
                >
                  Hospital Management System
                </motion.p>

                {/* Stack Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 mb-6"
                >
                  <span className="text-green-600 dark:text-green-400 font-bold">
                    ●
                  </span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    MERN Stack Architecture
                  </span>
                </motion.div>

                {/* Quick Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap justify-center gap-4 mb-8"
                >
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">👥</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Users
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        5+ Roles
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">🔌</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        API
                      </div>
                      <div className="font-bold text-gray-900 dark:text-white">
                        50+ Endpoints
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">📊</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">
                        Status
                      </div>
                      <div className="font-bold text-green-600 dark:text-green-400">
                        Live & Active
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Technology Badges */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap justify-center gap-3 mb-8"
                >
                  <span className="px-5 py-2.5 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-bold shadow-md border-2 border-green-300 dark:border-green-700">
                    Node.js 14.15.1
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-bold shadow-md border-2 border-blue-300 dark:border-blue-700">
                    React 16.13.1
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-green-100 to-emerald-200 dark:from-green-900 dark:to-emerald-800 text-green-800 dark:text-green-200 rounded-full text-sm font-bold shadow-md border-2 border-green-300 dark:border-green-700">
                    MongoDB
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-800 dark:text-purple-200 rounded-full text-sm font-bold shadow-md border-2 border-purple-300 dark:border-purple-700">
                    Express.js
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 text-orange-800 dark:text-orange-200 rounded-full text-sm font-bold shadow-md border-2 border-orange-300 dark:border-orange-700">
                    Redux
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800 text-pink-800 dark:text-pink-200 rounded-full text-sm font-bold shadow-md border-2 border-pink-300 dark:border-pink-700">
                    Material-UI
                  </span>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <a
                    href="https://mediappointcare.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="text-2xl">🌐</span>
                      View Live Demo
                    </motion.button>
                  </a>
                  <a
                    href="https://github.com/nishatrhythm/Hospital-Management-System"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{
                        scale: 1.05,
                        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white rounded-xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="text-2xl">💻</span>
                      View Source Code
                    </motion.button>
                  </a>
                </motion.div>

                {/* Additional Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9 }}
                  className="mt-6 text-sm text-gray-600 dark:text-gray-400"
                >
                  <p className="flex items-center justify-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1">
                      <span className="text-yellow-500">⭐</span>
                      Production-Ready
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-green-500">✓</span>
                      Fully Responsive
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-500">🔒</span>
                      Secure Authentication
                    </span>
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Project Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 rounded-xl overflow-hidden shadow-2xl"
          >
            <Image
              src={HospitalProjectThumbnail}
              alt="MediAppointCare Dashboard"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 border-b-2 border-gray-300 dark:border-gray-700">
            {["overview", "features", "tech", "architecture", "demo"].map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 font-semibold capitalize transition-colors ${
                    activeTab === tab
                      ? "border-b-4 border-blue-600 text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                      : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                  } rounded-t-lg`}
                >
                  {tab === "architecture" ? "System Design" : tab}
                </button>
              )
            )}
          </div>

          {/* Content Sections */}
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.3 }}
          >
            {/* Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    🎯 Overview
                  </h2>
                  <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6">
                    MediAppointCare is a comprehensive full-stack healthcare
                    management platform built with MERN stack for managing
                    hospitals, doctors, patients, pharmaceutical companies, and
                    medical students. Designed to digitize and streamline
                    healthcare operations for hospitals in Bangladesh.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {keyHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500"
                      >
                        <div className="text-4xl mb-3">{highlight.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🌟 Project Impact
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-blue-200 dark:border-blue-700 hover:shadow-xl transition-shadow">
                      <div className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                        5+
                      </div>
                      <div className="text-gray-800 dark:text-gray-300 font-semibold">
                        User Roles
                      </div>
                    </div>
                    <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-green-200 dark:border-green-700 hover:shadow-xl transition-shadow">
                      <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                        50+
                      </div>
                      <div className="text-gray-800 dark:text-gray-300 font-semibold">
                        API Endpoints
                      </div>
                    </div>
                    <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-orange-200 dark:border-orange-700 hover:shadow-xl transition-shadow">
                      <div className="text-4xl md:text-5xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                        30K+
                      </div>
                      <div className="text-gray-800 dark:text-gray-300 font-semibold">
                        Medicines
                      </div>
                    </div>
                    <div className="text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border-2 border-purple-200 dark:border-purple-700 hover:shadow-xl transition-shadow">
                      <div className="text-4xl md:text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                        100%
                      </div>
                      <div className="text-gray-800 dark:text-gray-300 font-semibold">
                        Digital EMR
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === "features" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    👨‍⚕️ For Doctors
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.doctor.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-blue-600 dark:text-blue-400 text-xl">
                          ✅
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🏥 For Hospitals
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.hospital.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-green-600 dark:text-green-400 text-xl">
                          ✅
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🧑‍⚕️ For Patients
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.patient.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-purple-600 dark:text-purple-400 text-xl">
                          ✅
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Tech Stack Tab */}
            {activeTab === "tech" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🛠️ Backend Stack
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techStack.backend.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-5 rounded-lg hover:shadow-xl transition-all duration-300 border-2 border-blue-200 dark:border-blue-800 hover:border-blue-400 dark:hover:border-blue-500"
                      >
                        <div className="font-bold text-lg text-blue-700 dark:text-blue-300">
                          {tech.name}
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {tech.version}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    ⚛️ Frontend Stack
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techStack.frontend.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-5 rounded-lg hover:shadow-xl transition-all duration-300 border-2 border-purple-200 dark:border-purple-800 hover:border-purple-400 dark:hover:border-purple-500"
                      >
                        <div className="font-bold text-lg text-purple-700 dark:text-purple-300">
                          {tech.name}
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {tech.version}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🔒 Security Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "Password Hashing with Bcrypt (12 salt rounds)",
                      "JWT Authentication with secure tokens",
                      "Role-Based Access Control (RBAC)",
                      "CORS Protection with configured policies",
                      "Input Validation with Express-validator",
                      "Environment Variables for sensitive data",
                    ].map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-green-200 dark:border-green-800 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-green-600 dark:text-green-400 text-xl">
                          🔒
                        </span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Architecture Tab - NEW */}
            {activeTab === "architecture" && (
              <div className="space-y-8">
                {/* System Architecture Diagram */}
                <section className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🏗️ System Architecture
                  </h2>
                  <div className="space-y-6">
                    {/* Architecture Layers */}
                    <div className="grid gap-4">
                      {/* Client Layer */}
                      <div className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-600">
                        <h3 className="font-bold text-xl mb-3 text-blue-900 dark:text-blue-100">
                          📱 Client Layer
                        </h3>
                        <div className="flex items-center justify-around flex-wrap gap-3">
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              React Frontend
                            </span>
                          </div>
                          <span className="text-2xl text-blue-600 dark:text-blue-300">
                            →
                          </span>
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Redux Store
                            </span>
                          </div>
                          <span className="text-2xl text-blue-600 dark:text-blue-300">
                            →
                          </span>
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Redux Persist
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* API Layer */}
                      <div className="bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 p-6 rounded-lg border-2 border-green-300 dark:border-green-600">
                        <h3 className="font-bold text-xl mb-3 text-green-900 dark:text-green-100">
                          🔌 API Layer
                        </h3>
                        <div className="flex items-center justify-around flex-wrap gap-3">
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Express Server
                            </span>
                          </div>
                          <span className="text-2xl text-green-600 dark:text-green-300">
                            →
                          </span>
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              JWT Middleware
                            </span>
                          </div>
                          <span className="text-2xl text-green-600 dark:text-green-300">
                            →
                          </span>
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Route Handlers
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Business Logic Layer */}
                      <div className="bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-600">
                        <h3 className="font-bold text-xl mb-3 text-purple-900 dark:text-purple-100">
                          ⚙️ Business Logic
                        </h3>
                        <div className="flex items-center justify-around flex-wrap gap-3">
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Controllers
                            </span>
                          </div>
                          <span className="text-2xl text-purple-600 dark:text-purple-300">
                            ⟷
                          </span>
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Mongoose Models
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Data Layer */}
                      <div className="bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 p-6 rounded-lg border-2 border-orange-300 dark:border-orange-600">
                        <h3 className="font-bold text-xl mb-3 text-orange-900 dark:text-orange-100">
                          💾 Data Layer
                        </h3>
                        <div className="flex items-center justify-around flex-wrap gap-3">
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              MongoDB
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Cloudinary
                            </span>
                          </div>
                          <div className="bg-white dark:bg-gray-700 px-4 py-2 rounded-md shadow-md">
                            <span className="font-semibold text-gray-800 dark:text-gray-200">
                              Firebase
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Appointment Booking Flow */}
                <section className="bg-gradient-to-br from-cyan-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    📅 Appointment Booking Flow
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        step: 1,
                        actor: "Patient",
                        action: "Search for doctor by specialization",
                        color: "blue",
                      },
                      {
                        step: 2,
                        actor: "System",
                        action: "Show available doctors with time slots",
                        color: "green",
                      },
                      {
                        step: 3,
                        actor: "Patient",
                        action: "Select doctor & preferred time slot",
                        color: "blue",
                      },
                      {
                        step: 4,
                        actor: "System",
                        action:
                          "Check availability & create appointment request",
                        color: "green",
                      },
                      {
                        step: 5,
                        actor: "System",
                        action: "Send notification to Doctor & Hospital",
                        color: "purple",
                      },
                      {
                        step: 6,
                        actor: "Doctor",
                        action: "Review and Approve/Reject appointment",
                        color: "orange",
                      },
                      {
                        step: 7,
                        actor: "System",
                        action: "Update appointment status & notify patient",
                        color: "green",
                      },
                      {
                        step: 8,
                        actor: "Patient",
                        action: "Receive confirmation with appointment details",
                        color: "blue",
                      },
                    ].map((flow) => (
                      <div
                        key={flow.step}
                        className={`flex items-start gap-4 p-4 rounded-lg shadow-md border-l-4 bg-white dark:bg-gray-800 
                        ${
                          flow.color === "blue"
                            ? "border-blue-500 dark:border-blue-400"
                            : ""
                        }
                        ${
                          flow.color === "green"
                            ? "border-green-500 dark:border-green-400"
                            : ""
                        }
                        ${
                          flow.color === "purple"
                            ? "border-purple-500 dark:border-purple-400"
                            : ""
                        }
                        ${
                          flow.color === "orange"
                            ? "border-orange-500 dark:border-orange-400"
                            : ""
                        }
                      `}
                      >
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
                        ${flow.color === "blue" ? "bg-blue-500" : ""}
                        ${flow.color === "green" ? "bg-green-500" : ""}
                        ${flow.color === "purple" ? "bg-purple-500" : ""}
                        ${flow.color === "orange" ? "bg-orange-500" : ""}
                      `}
                        >
                          {flow.step}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 dark:text-white">
                            {flow.actor}
                          </div>
                          <div className="text-gray-700 dark:text-gray-300">
                            {flow.action}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Prescription Writing Flow */}
                <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    📝 Prescription Writing Flow
                  </h2>
                  <div className="space-y-4">
                    {[
                      {
                        step: 1,
                        actor: "Doctor",
                        action: "Search and select patient from database",
                        color: "blue",
                      },
                      {
                        step: 2,
                        actor: "System",
                        action:
                          "Display patient history & previous prescriptions",
                        color: "green",
                      },
                      {
                        step: 3,
                        actor: "Doctor",
                        action:
                          "Record chief complaints & examination findings",
                        color: "blue",
                      },
                      {
                        step: 4,
                        actor: "Doctor",
                        action: "Add diagnosis and treatment plan",
                        color: "blue",
                      },
                      {
                        step: 5,
                        actor: "Doctor",
                        action: "Prescribe medications with dosage details",
                        color: "blue",
                      },
                      {
                        step: 6,
                        actor: "Doctor",
                        action: "Add advice, follow-up date & submit",
                        color: "blue",
                      },
                      {
                        step: 7,
                        actor: "System",
                        action: "Save prescription to database",
                        color: "green",
                      },
                      {
                        step: 8,
                        actor: "System",
                        action: "Send notification to patient",
                        color: "purple",
                      },
                      {
                        step: 9,
                        actor: "System",
                        action: "Generate PDF prescription for printing",
                        color: "green",
                      },
                      {
                        step: 10,
                        actor: "Patient",
                        action: "Access & download prescription anytime",
                        color: "orange",
                      },
                    ].map((flow) => (
                      <div
                        key={flow.step}
                        className={`flex items-start gap-4 p-4 rounded-lg shadow-md border-l-4 bg-white dark:bg-gray-800 
                        ${
                          flow.color === "blue"
                            ? "border-blue-500 dark:border-blue-400"
                            : ""
                        }
                        ${
                          flow.color === "green"
                            ? "border-green-500 dark:border-green-400"
                            : ""
                        }
                        ${
                          flow.color === "purple"
                            ? "border-purple-500 dark:border-purple-400"
                            : ""
                        }
                        ${
                          flow.color === "orange"
                            ? "border-orange-500 dark:border-orange-400"
                            : ""
                        }
                      `}
                      >
                        <div
                          className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white
                        ${flow.color === "blue" ? "bg-blue-500" : ""}
                        ${flow.color === "green" ? "bg-green-500" : ""}
                        ${flow.color === "purple" ? "bg-purple-500" : ""}
                        ${flow.color === "orange" ? "bg-orange-500" : ""}
                      `}
                        >
                          {flow.step}
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-gray-900 dark:text-white">
                            {flow.actor}
                          </div>
                          <div className="text-gray-700 dark:text-gray-300">
                            {flow.action}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                {/* User Authentication Flow */}
                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🔐 User Authentication Flow
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Login Flow */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                        Login Process
                      </h3>
                      {[
                        "User enters credentials",
                        "Validate input format",
                        "Check user existence in DB",
                        "Verify hashed password",
                        "Generate JWT token",
                        "Set token expiry (24h)",
                        "Return token to client",
                        "Store in Redux & LocalStorage",
                        "Redirect to dashboard",
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-purple-200 dark:border-purple-700"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-800 dark:text-gray-200 text-sm">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Protected Route Access */}
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-4">
                        Protected Routes
                      </h3>
                      {[
                        "User requests protected route",
                        "Check token in storage",
                        "Verify token signature",
                        "Check token expiration",
                        "Validate user role/permissions",
                        "Grant/Deny access",
                        "Redirect to login if invalid",
                        "Load protected content if valid",
                      ].map((step, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-pink-200 dark:border-pink-700"
                        >
                          <div className="flex-shrink-0 w-6 h-6 rounded-full bg-pink-500 text-white flex items-center justify-center text-xs font-bold">
                            {index + 1}
                          </div>
                          <span className="text-gray-800 dark:text-gray-200 text-sm">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Database Schema Overview */}
                <section className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🗄️ Database Schema Overview
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        model: "Hospital",
                        icon: "🏥",
                        fields: [
                          "Name (Bangla/English)",
                          "Email & Phone",
                          "DGHS Registration",
                          "Address",
                          "Doctors List",
                          "Test Details",
                          "Medical Students",
                        ],
                      },
                      {
                        model: "Doctor",
                        icon: "👨‍⚕️",
                        fields: [
                          "Name (Bangla/English)",
                          "BMDC Registration",
                          "Specialization",
                          "Education",
                          "Affiliated Hospitals",
                          "Prescriptions",
                          "Unavailable Days",
                        ],
                      },
                      {
                        model: "Patient",
                        icon: "🧑‍⚕️",
                        fields: [
                          "Name & Contact",
                          "Blood Group",
                          "Date of Birth",
                          "Address",
                          "Prescriptions",
                          "Test Reports",
                          "Notifications",
                        ],
                      },
                      {
                        model: "Prescription",
                        icon: "📋",
                        fields: [
                          "Diagnosis",
                          "Chief Complaints",
                          "Treatment Plan",
                          "Medications",
                          "Examination Data",
                          "Follow-up Date",
                          "Doctor & Patient Refs",
                        ],
                      },
                      {
                        model: "Appointment",
                        icon: "📅",
                        fields: [
                          "Date & Time",
                          "Doctor Reference",
                          "Hospital Reference",
                          "Patient Reference",
                          "Approval Status",
                          "Serial Number",
                          "Visit Status",
                        ],
                      },
                      {
                        model: "Notification",
                        icon: "🔔",
                        fields: [
                          "Type (P/A)",
                          "Prescription Ref",
                          "Appointment Ref",
                          "User References",
                          "Read Status",
                          "Timestamp",
                        ],
                      },
                    ].map((schema, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-lg border-2 border-orange-200 dark:border-orange-700"
                      >
                        <div className="text-4xl mb-3 text-center">
                          {schema.icon}
                        </div>
                        <h3 className="font-bold text-lg text-center mb-3 text-gray-900 dark:text-white">
                          {schema.model}
                        </h3>
                        <ul className="space-y-1">
                          {schema.fields.map((field, idx) => (
                            <li
                              key={idx}
                              className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                            >
                              <span className="text-orange-500">•</span>
                              <span>{field}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Demo Tab */}
            {activeTab === "demo" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    🔑 Demo Credentials
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Try all features with these test accounts:
                  </p>
                  <div className="grid md:grid-cols-3 gap-6">
                    {demoCredentials.map((cred, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-300 dark:border-blue-700 shadow-lg hover:shadow-2xl transition-shadow"
                      >
                        <div className="text-4xl mb-3 text-center">
                          {cred.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                          {cred.role}
                        </h3>
                        <div className="space-y-3">
                          <div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                              Phone:
                            </span>
                            <div className="font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded mt-1 text-gray-900 dark:text-gray-100 font-semibold">
                              {cred.phone}
                            </div>
                          </div>
                          <div>
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                              Password:
                            </span>
                            <div className="font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded mt-1 text-gray-900 dark:text-gray-100 font-semibold">
                              {cred.password}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-yellow-100 dark:bg-yellow-900/30 border-2 border-yellow-400 dark:border-yellow-600 rounded-lg">
                    <p className="text-yellow-800 dark:text-yellow-300 font-semibold">
                      <strong>⚠️ Note:</strong> These are demo accounts for
                      testing purposes. Feel free to explore all features!
                    </p>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    📊 Quick Architecture Overview
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-blue-500">
                      <h4 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-2">
                        📱 Client Layer
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        React Frontend → Redux Store → Redux Persist
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-green-500">
                      <h4 className="font-bold text-lg text-green-700 dark:text-green-300 mb-2">
                        🔌 API Layer
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        Express.js Server → JWT Middleware → Route Handlers
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-purple-500">
                      <h4 className="font-bold text-lg text-purple-700 dark:text-purple-300 mb-2">
                        ⚙️ Business Logic
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        Controllers → Mongoose Models
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow-md border-l-4 border-orange-500">
                      <h4 className="font-bold text-lg text-orange-700 dark:text-orange-300 mb-2">
                        💾 Data Layer
                      </h4>
                      <p className="text-gray-800 dark:text-gray-200">
                        MongoDB → Cloudinary (Images) → Firebase (Auth)
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-green-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    🚀 Try It Out
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
                      Visit the live application and explore these workflows:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                          1.
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          <strong className="text-blue-700 dark:text-blue-300">
                            Patient Flow:
                          </strong>{" "}
                          Register → Search Doctors → Book Appointment → View
                          Prescriptions
                        </span>
                      </li>
                      <li className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-green-600 dark:text-green-400 font-bold text-lg">
                          2.
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          <strong className="text-green-700 dark:text-green-300">
                            Doctor Flow:
                          </strong>{" "}
                          Login → View Appointments → Write Prescription →
                          Generate PDF
                        </span>
                      </li>
                      <li className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">
                          3.
                        </span>
                        <span className="text-gray-800 dark:text-gray-200">
                          <strong className="text-purple-700 dark:text-purple-300">
                            Hospital Flow:
                          </strong>{" "}
                          Login → Manage Doctors → View Analytics → Handle Lab
                          Tests
                        </span>
                      </li>
                    </ul>
                    <a
                      href="https://mediappointcare.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-md font-semibold transition-colors"
                      >
                        🌐 Launch Application
                      </motion.button>
                    </a>
                  </div>
                </section>
              </div>
            )}
          </motion.div>

          {/* Footer CTA */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-800 dark:to-purple-800 rounded-xl p-8 text-center shadow-2xl border-2 border-blue-300 dark:border-blue-700"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Interested in This Project?
            </h2>
            <p className="text-gray-100 dark:text-gray-200 mb-6 text-lg">
              Check out the live demo or explore the source code on GitHub
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://mediappointcare.onrender.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md font-semibold transition-colors"
                >
                  View Live Demo
                </motion.button>
              </a>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-blue-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md font-semibold transition-colors shadow-lg"
                >
                  Contact Me
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default MediAppointCare;
