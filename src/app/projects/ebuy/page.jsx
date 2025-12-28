"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../../component/Header";
import EBuyLanding from "../../assests/projectSS/eBuy-landing.png";

const EBuy = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const features = {
    user: [
      "User Registration and Authentication",
      "Browse Product Catalog with detailed descriptions",
      "Shopping Cart Management",
      "Advanced Product Search by keywords",
      "Filter Products by price and categories",
      "View Purchase History",
      "Update Personal Information",
      "Checkout Process",
    ],
    admin: [
      "Admin Dashboard Access",
      "Create New Products",
      "Update Product Information",
      "Delete Products",
      "Manage Product Categories",
      "View All Products",
      "Product Inventory Management",
    ],
  };

  const techStack = {
    frontend: [
      { name: "React.js", version: "Latest" },
      { name: "Tailwind CSS", version: "Styling Framework" },
      { name: "DaisyUI", version: "Component Library" },
      { name: "React Router DOM", version: "Routing" },
      { name: "Heroicons", version: "Icon Library" },
      { name: "React Toastify", version: "Notifications" },
      { name: "React Loader Spinner", version: "Loading States" },
      { name: "React Paginate", version: "Pagination" },
    ],
    backend: [
      { name: "Fake Store API", version: "RESTful API" },
      { name: "Axios", version: "HTTP Client" },
      { name: "JWT Decode", version: "Token Handling" },
      { name: "LocalStorage", version: "State Persistence" },
      { name: "Context API", version: "State Management" },
    ],
  };

  const keyHighlights = [
    {
      title: "Fast Search",
      description: "Implemented optimized search algorithm for quick product discovery",
      icon: "🔍",
    },
    {
      title: "Real-time Updates",
      description: "LocalStorage integration for immediate UI updates",
      icon: "⚡",
    },
    {
      title: "Reusable Components",
      description: "Built with modular, reusable React components",
      icon: "🧩",
    },
    {
      title: "Popular Products",
      description: "Displays top 3 rated products based on ratings and count",
      icon: "⭐",
    },
    {
      title: "Categorical Search",
      description: "Advanced filtering by categories and price range",
      icon: "📂",
    },
    {
      title: "JWT Authentication",
      description: "Secure user authentication with JWT token decode",
      icon: "🔐",
    },
  ];

  const adminCredentials = {
    username: "johnd",
    password: "m38rmF$",
    note: "UserId 1 is treated as admin",
  };

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
            <div className="bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 rounded-2xl p-8 md:p-12 shadow-2xl border-2 border-orange-200 dark:border-orange-800 mb-8">
              <div className="text-center">
                {/* Project Type Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4"
                >
                  <span className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full text-sm font-bold shadow-lg">
                    🛒 E-Commerce Platform
                  </span>
                </motion.div>

                {/* Main Title */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4"
                >
                  <span className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 bg-clip-text text-transparent">
                    eBuy
                  </span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl md:text-2xl text-gray-800 dark:text-gray-200 mb-3 font-semibold"
                >
                  Modern E-Commerce Shopping Platform
                </motion.p>

                {/* Stack Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-full shadow-md border border-gray-200 dark:border-gray-700 mb-6"
                >
                  <span className="text-orange-600 dark:text-orange-400 font-bold">●</span>
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    React.js + Tailwind CSS
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
                    <span className="text-2xl">🛍️</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Shopping</div>
                      <div className="font-bold text-gray-900 dark:text-white">Full Featured</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">⚡</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Search</div>
                      <div className="font-bold text-gray-900 dark:text-white">Ultra Fast</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <span className="text-2xl">📱</span>
                    <div className="text-left">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Design</div>
                      <div className="font-bold text-orange-600 dark:text-orange-400">Responsive</div>
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
                  <span className="px-5 py-2.5 bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-200 rounded-full text-sm font-bold shadow-md border-2 border-blue-300 dark:border-blue-700">
                    React.js
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-cyan-100 to-cyan-200 dark:from-cyan-900 dark:to-cyan-800 text-cyan-800 dark:text-cyan-200 rounded-full text-sm font-bold shadow-md border-2 border-cyan-300 dark:border-cyan-700">
                    Tailwind CSS
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800 text-purple-800 dark:text-purple-200 rounded-full text-sm font-bold shadow-md border-2 border-purple-300 dark:border-purple-700">
                    DaisyUI
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-green-100 to-green-200 dark:from-green-900 dark:to-green-800 text-green-800 dark:text-green-200 rounded-full text-sm font-bold shadow-md border-2 border-green-300 dark:border-green-700">
                    Context API
                  </span>
                  <span className="px-5 py-2.5 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 text-orange-800 dark:text-orange-200 rounded-full text-sm font-bold shadow-md border-2 border-orange-300 dark:border-orange-700">
                    Fake Store API
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
                    href="https://lucky-sawine-aaafe6.netlify.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(249, 115, 22, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl font-bold text-lg shadow-xl transition-all duration-300 flex items-center gap-2"
                    >
                      <span className="text-2xl">🌐</span>
                      View Live Demo
                    </motion.button>
                  </a>
                  <a
                    href="https://github.com/RownokNishat/eCommerce"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)" }}
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
                      <span className="text-green-500">✓</span>
                      Fully Responsive
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-blue-500">🎨</span>
                      Modern UI/UX
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <span className="text-orange-500">⚡</span>
                      Fast Performance
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
              src={EBuyLanding}
              alt="eBuy Landing Page"
              width={1400}
              height={800}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Tabs Navigation */}
          <div className="flex flex-wrap gap-4 mb-8 border-b-2 border-gray-300 dark:border-gray-700">
            {["overview", "features", "tech", "demo"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-semibold capitalize transition-colors ${
                  activeTab === tab
                    ? "border-b-4 border-orange-600 text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20"
                    : "text-gray-700 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                } rounded-t-lg`}
              >
                {tab}
              </button>
            ))}
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
                <section className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    🎯 Overview
                  </h2>
                  <p className="text-gray-800 dark:text-gray-200 text-lg leading-relaxed mb-6">
                    eBuy is a modern e-commerce platform that provides a seamless shopping experience for customers. 
                    Built with React.js and styled with Tailwind CSS, it offers a feature-rich interface for browsing, 
                    searching, and purchasing products. The platform includes an admin dashboard for product management 
                    and uses LocalStorage for real-time UI updates despite API limitations.
                  </p>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {keyHighlights.map((highlight, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-6 rounded-lg hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 dark:border-gray-700 hover:border-orange-400 dark:hover:border-orange-500"
                      >
                        <div className="text-4xl mb-3">{highlight.icon}</div>
                        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                          {highlight.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{highlight.description}</p>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    ✨ Key Accomplishments
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-orange-500">
                      <h3 className="font-bold text-lg text-orange-700 dark:text-orange-300 mb-3">
                        Smart LocalStorage Implementation
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Since Fake Store API doesn't persist changes, implemented LocalStorage 
                        to sync all CRUD operations and provide real-time UI updates.
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
                      <h3 className="font-bold text-lg text-blue-700 dark:text-blue-300 mb-3">
                        Context API Integration
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Utilized useContext hook for seamless communication between components 
                        throughout the entire application.
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-green-500">
                      <h3 className="font-bold text-lg text-green-700 dark:text-green-300 mb-3">
                        Reusable Components
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Built multiple reusable components including modals, loading states, 
                        product cards, and more for maintainable code.
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
                      <h3 className="font-bold text-lg text-purple-700 dark:text-purple-300 mb-3">
                        Advanced Features
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300">
                        Implemented top 3 rated products calculation, categorical search, 
                        price filtering, and comprehensive user purchase history tracking.
                      </p>
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
                    👤 User Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.user.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-blue-200 dark:border-blue-800 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-blue-600 dark:text-blue-400 text-xl">✅</span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    👨‍💼 Admin Features
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {features.admin.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-shadow"
                      >
                        <span className="text-purple-600 dark:text-purple-400 text-xl">✅</span>
                        <span className="text-gray-800 dark:text-gray-200 font-medium">{feature}</span>
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
                    ⚛️ Frontend Technologies
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techStack.frontend.map((tech, index) => (
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

                <section className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    🔧 Backend & Tools
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {techStack.backend.map((tech, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-5 rounded-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200 dark:border-green-800 hover:border-green-400 dark:hover:border-green-500"
                      >
                        <div className="font-bold text-lg text-green-700 dark:text-green-300">
                          {tech.name}
                        </div>
                        <div className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                          {tech.version}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <section className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                    📦 NPM Packages Used
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {[
                      "react-router-dom",
                      "heroicons",
                      "jwt-decode",
                      "react-toastify",
                      "react-loader-spinner",
                      "react-paginate",
                      "axios",
                    ].map((pkg, index) => (
                      <div
                        key={index}
                        className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md border border-orange-200 dark:border-orange-800 text-center"
                      >
                        <span className="text-orange-700 dark:text-orange-300 font-semibold">
                          {pkg}
                        </span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            )}

            {/* Demo Tab */}
            {activeTab === "demo" && (
              <div className="space-y-8">
                <section className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    🔑 Admin Credentials
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
                    Access the admin dashboard with these credentials:
                  </p>
                  <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-purple-300 dark:border-purple-700 shadow-lg">
                    <div className="text-4xl mb-3 text-center">👨‍💼</div>
                    <h3 className="text-xl font-bold mb-4 text-center text-gray-900 dark:text-white">
                      Admin Account
                    </h3>
                    <div className="space-y-3">
                      <div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                          Username:
                        </span>
                        <div className="font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded mt-1 text-gray-900 dark:text-gray-100 font-semibold">
                          {adminCredentials.username}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-700 dark:text-gray-300 text-sm font-semibold">
                          Password:
                        </span>
                        <div className="font-mono bg-gray-100 dark:bg-gray-900 p-3 rounded mt-1 text-gray-900 dark:text-gray-100 font-semibold">
                          {adminCredentials.password}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 p-3 bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-300 dark:border-blue-600 rounded-lg">
                      <p className="text-blue-800 dark:text-blue-300 text-sm font-semibold">
                        ℹ️ {adminCredentials.note}
                      </p>
                    </div>
                  </div>
                </section>

                <section className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-900 rounded-xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                    🚀 Try It Out
                  </h2>
                  <div className="space-y-4">
                    <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold">
                      Explore different features of the platform:
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-orange-600 dark:text-orange-400 font-bold text-lg">1.</span>
                        <span className="text-gray-800 dark:text-gray-200">
                          <strong className="text-orange-700 dark:text-orange-300">Sign Up / Login:</strong>{" "}
                          Create an account or login to browse products
                        </span>
                      </li>
                      <li className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">2.</span>
                        <span className="text-gray-800 dark:text-gray-200">
                          <strong className="text-blue-700 dark:text-blue-300">Browse & Search:</strong>{" "}
                          Search products by keywords or filter by categories
                        </span>
                      </li>
                      <li className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-green-600 dark:text-green-400 font-bold text-lg">3.</span>
                        <span className="text-gray-800 dark:text-gray-200">
                          <strong className="text-green-700 dark:text-green-300">Shopping Cart:</strong>{" "}
                          Add products to cart and proceed to checkout
                        </span>
                      </li>
                      <li className="flex items-start gap-3 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md">
                        <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">4.</span>
                        <span className="text-gray-800 dark:text-gray-200">
                          <strong className="text-purple-700 dark:text-purple-300">Admin Dashboard:</strong>{" "}
                          Login with admin credentials to manage products
                        </span>
                      </li>
                    </ul>
                    <a
                      href="https://lucky-sawine-aaafe6.netlify.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-4 px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-md font-semibold transition-colors shadow-lg"
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
            className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 dark:from-orange-800 dark:to-red-800 rounded-xl p-8 text-center shadow-2xl border-2 border-orange-300 dark:border-orange-700"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">
              Interested in This Project?
            </h2>
            <p className="text-gray-100 dark:text-gray-200 mb-6 text-lg">
              Check out the live demo or explore the source code on GitHub
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://lucky-sawine-aaafe6.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-orange-700 hover:bg-gray-100 rounded-md font-semibold transition-colors shadow-lg"
                >
                  View Live Demo
                </motion.button>
              </a>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-white text-orange-700 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 rounded-md font-semibold transition-colors shadow-lg"
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

export default EBuy;
