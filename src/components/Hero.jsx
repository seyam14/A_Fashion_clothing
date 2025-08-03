import React from "react";
import { motion } from "framer-motion";
import hero from "../assets/hero.png"; 

const Hero = () => (
  <section className="text-center p-6 sm:p-10 md:p-16 lg:p-24">
    <motion.h1
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="
        text-3xl 
        sm:text-4xl 
        md:text-5xl 
        lg:text-6xl 
        font-bold 
        text-purple-700
        leading-tight
      "
    >
      Welcome to Clothing Fashion
    </motion.h1>
    <motion.img
      src={hero}
      alt="Hero"
      className="
        mx-auto 
        mt-6 
        w-64 
        sm:w-80 
        md:w-96 
        lg:w-[500px] 
        object-contain
      "
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    />
  </section>
);

export default Hero;
