"use client";
import React, { useRef } from "react";
import { TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com"; // Make sure to install emailjs-com
import { motion } from "framer-motion";
import EmailIcon from "@mui/icons-material/Email";
import SendIcon from "@mui/icons-material/Send";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import "./Contact.css";

const validationSchema = Yup.object({
  userName: Yup.string().required("Name is required"),
  userEmail: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const formRef = useRef(); // Ref to capture the form

  const formik = useFormik({
    initialValues: {
      userName: "",
      userEmail: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { resetForm }) => {
      emailjs
        .sendForm(
          "service_bjugeua", // Your EmailJS service ID
          "template_ux5eiko", // Your EmailJS template ID
          formRef.current, // Pass the form reference
          "gVku00cn1JiTacdPT" // Your EmailJS user ID
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Email sent successfully!");
            resetForm(); // Reset form after submission
          },
          (error) => {
            console.log(error.text);
            alert("Failed to send the email.");
          }
        );
    },
  });

  return (
    <div className="md:w-[600px] lg:w-full mx-auto pt-32 lg:pt-48">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {/* Left Side - Enhanced with Animations */}
        <motion.div
          className="flex flex-col justify-center items-start space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Header */}
          <div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-[600] tracking-wide text-[#FD6F00] opacity-90 mb-4">
              Let's Connect Together
            </p>
            <p className="text-lg font-[500] text-gray-700 dark:text-gray-300">
              Have a project in mind? Let's discuss how we can work together.
            </p>
          </div>

          {/* Animated Illustration */}
          <div className="relative w-full max-w-md">
            {/* Background Circles */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Main SVG Container */}
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
              {/* Animated Email Icon */}
              <motion.div
                className="flex justify-center mb-6"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="relative">
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-[#FD6F00] to-purple-500 rounded-full blur-xl opacity-50"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  <div className="relative w-24 h-24 bg-gradient-to-br from-[#FD6F00] to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                    <EmailIcon className="text-white text-5xl" />
                  </div>
                </div>
              </motion.div>

              {/* Flying Messages Animation */}
              <div className="relative h-32 overflow-hidden">
                <motion.div
                  className="absolute left-0 top-0"
                  animate={{
                    x: [0, 250],
                    y: [0, -30],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <SendIcon className="text-blue-500 text-3xl" />
                </motion.div>

                <motion.div
                  className="absolute right-0 top-10"
                  animate={{
                    x: [0, -250],
                    y: [0, 30],
                    opacity: [1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 1,
                    delay: 1.5,
                  }}
                >
                  <ConnectWithoutContactIcon className="text-purple-500 text-3xl" />
                </motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <motion.div
                  className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg border border-blue-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-[700] text-blue-600 dark:text-blue-400">
                    3+
                  </div>
                  <div className="text-sm font-[500] text-gray-600 dark:text-gray-400">
                    Years Experience
                  </div>
                </motion.div>
                <motion.div
                  className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-2xl font-[700] text-green-600 dark:text-green-400">
                    10+
                  </div>
                  <div className="text-sm font-[500] text-gray-600 dark:text-gray-400">
                    Projects Built
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="mailto:your@email.com"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <EmailIcon />
              <span className="font-[500]">Email Me</span>
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <ConnectWithoutContactIcon />
              <span className="font-[500]">LinkedIn</span>
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center"
        >
          <div className="w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-[600] tracking-wide text-gray-800 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form ref={formRef} onSubmit={formik.handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="userName" className="block text-sm font-[600] text-gray-700 dark:text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="userName"
                  name="userName"
                  placeholder="John Doe"
                  value={formik.values.userName}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent outline-none transition-all text-gray-800 dark:text-white"
                />
                {formik.touched.userName && formik.errors.userName && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.userName}</p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="userEmail" className="block text-sm font-[600] text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  placeholder="john@example.com"
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent outline-none transition-all text-gray-800 dark:text-white"
                />
                {formik.touched.userEmail && formik.errors.userEmail && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.userEmail}</p>
                )}
              </div>

              {/* Message TextArea */}
              <div>
                <label htmlFor="message" className="block text-sm font-[600] text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#FD6F00] focus:border-transparent outline-none transition-all resize-none text-gray-800 dark:text-white"
                />
                {formik.touched.message && formik.errors.message && (
                  <p className="text-red-500 text-sm mt-1">{formik.errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full px-6 py-4 bg-gradient-to-r from-[#FD6F00] to-purple-600 hover:from-[#FD6F00] hover:to-purple-700 text-white font-[600] tracking-wide rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                <SendIcon />
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
