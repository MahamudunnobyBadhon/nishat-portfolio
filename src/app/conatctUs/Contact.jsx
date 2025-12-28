"use client";
import React, { useRef } from "react";
import { TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com"; // Make sure to install emailjs-com
import { motion } from "framer-motion";
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8">
        <div className="flex justify-start items-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-[600] tracking-wide text-[#FD6F00] opacity-90">
            Let's Connect Together
          </p>
        </div>
        <div>
          <Box
            component="form"
            ref={formRef} // Attach form reference here
            sx={{
              mt: 3,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              color: "white",
            }}
            onSubmit={formik.handleSubmit}
          >
            {/* Name Input */}
            <TextField
              variant="filled"
              fullWidth
              id="userName"
              name="userName"
              label="Name"
              placeholder="Enter your name"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "gray" },
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#111827",
                  "&:hover": { backgroundColor: "#444" },
                },
                "& .MuiFormHelperText-root": {
                  color: "white",
                },
              }}
            />

            {/* Email Input */}
            <TextField
              variant="filled"
              fullWidth
              id="userEmail"
              name="userEmail"
              label="Email"
              placeholder="Enter your email"
              value={formik.values.userEmail}
              onChange={formik.handleChange}
              error={
                formik.touched.userEmail && Boolean(formik.errors.userEmail)
              }
              helperText={formik.touched.userEmail && formik.errors.userEmail}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "gray" },
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#111827",
                  "&:hover": { backgroundColor: "#444" },
                },
                "& .MuiFormHelperText-root": {
                  color: "white",
                },
              }}
            />

            {/* Message TextArea */}
            <TextField
              variant="filled"
              fullWidth
              id="message"
              name="message"
              label="Message"
              placeholder="Type your message"
              multiline
              rows={4}
              value={formik.values.message}
              onChange={formik.handleChange}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              InputProps={{
                style: { color: "white" },
              }}
              InputLabelProps={{
                style: { color: "gray" },
              }}
              sx={{
                "& .MuiFilledInput-root": {
                  backgroundColor: "#111827",
                  "&:hover": { backgroundColor: "#444" },
                },
                "& .MuiFormHelperText-root": {
                  color: "white",
                },
              }}
            />

            {/* Submit Button */}
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
              type="submit"
              className="px-6 py-2 rounded-md relative radial-gradient hover:bg-opacity-80"
            >
              <span className="text-lg  text-white font-[400] tracking-wide h-full w-full block relative linear-mask">
                Submit
              </span>
              <span className="block absolute inset-0 rounded-md p-px linear-overlay" />
            </motion.button>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Contact;
