import React from "react";
import { motion } from "framer-motion";
import Button from "../Button";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaVuejs,
  FaJava,
  FaPhp,
  FaRust,
  FaSwift,
  FaDocker,
  FaAws,
  FaGithub,
} from "react-icons/fa";

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: [0, 1.2, 1], 
    opacity: 1,
    rotate: [0, 180, 0], 
    transition: { duration: 0.5 },
  },
};

const icons = [
  FaReact,
  FaNodeJs,
  FaPython,
  FaAngular,
  FaVuejs,
  FaJava,
  FaPhp,
  FaRust,
  FaSwift,
  FaDocker,
  FaAws,
  FaGithub,
];

const Banner = () => {
  return (
    <div className="flex items-center h-screen lg:h-full justify-center flex-col mb-[100px]">
      <div className="flex justify-center items-center flex-col">
        <h1
          className="font-bold mb-5"
          style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
        >
          Framer{" "}
          <span className="gradient-text">
            Motion<span className="gradient-dot"></span>
          </span>
        </h1>
       
      </div>
      <motion.div
        className="mockup-phone m-0 hidden sm:inline-block z-50"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="camera"></div>
        <div className="display" style={{ height: "540px" }}>
          <motion.div
            style={{
              height: "530px",
              backgroundImage:
                "url('https://iphoneswallpapers.com/wp-content/uploads/2023/06/iPhone-15-Pro-Max-Dark-Blue-Gradient-Wallpaper.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="artboard artboard-demo phone-1 grid grid-cols-3 gap-2 p-5"
            variants={container}
          >
            {Array.from({ length: 12 }).map((_, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  className="h-20 w-full p-2 rounded-md mt-4 flex items-center justify-center"
                  variants={item}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(1px)",
                  }}
                >
                  <Icon size="3em" />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Banner;
