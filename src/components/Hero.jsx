import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png"; 

const Hero = () => (
  <section className="text-center p-10">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="text-4xl mt-3 md:text-6xl font-bold text-purple-700"
    >Welcome to  Clothing Fashion
    </motion.h1>
    <motion.img
      src={hero}
      alt="Hero"
      className="mx-auto mt-6 max-w-md"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </section>
);

export default Hero;
