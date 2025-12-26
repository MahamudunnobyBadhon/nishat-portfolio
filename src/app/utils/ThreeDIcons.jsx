"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ThreeDIcon = ({ src, alt }) => {
  return (
    <motion.div
      className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
      whileHover={{
        // rotateX: 25,
        // rotateY: -25,
        scale: 1.1,
        transition: { type: "spring", stiffness: 300, damping: 15 },
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className=" bg-white rounded-full flex items-center justify-center"
        whileHover={{
          //   rotateX: -25,
          //   rotateY: 25,
          scale: 1.2,
          transition: { type: "spring", stiffness: 300, damping: 15 },
        }}
      >
        <motion.span
          className="text-xl text-black font-bold"
          whileHover={{
            rotateZ: 360,
            transition: { duration: 1, repeat: Infinity, ease: "linear" },
          }}
        >
          <Image
            src={src}
            alt={alt}
            width={120}
            height={120}
            className="rounded-full w-[60px] h-[60px]"
          />
        </motion.span>
      </motion.div>
    </motion.div>
  );
};

export default ThreeDIcon;
