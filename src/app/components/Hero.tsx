"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const images = ["/18.jpg", "/19.jpg", "/20.jpg"];

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full py-30 px-6 md:px-20 bg-gradient-to-b from-blue-400 via-blue-200 to-gray-200 dark:from-blue-900 dark:via-zinc-800 dark:to-zinc-900 text-zinc-900 dark:text-white overflow-hidden">
      {/* Stars background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="w-full h-full animate-pulse bg-[url('/stars.svg')] bg-repeat opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            custom={0}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            ಸ್ವಾಗತ <br /> ನಮ್ಮ ಸಹಕಾರಿ ಸಂಘಕ್ಕೆ
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6"
            custom={1}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            ಸಮೃದ್ಧಿ ಮತ್ತು ಸಹಕಾರದ ದಾರಿಯಲ್ಲಿ ನಾವು ನಿಮ್ಮೊಂದಿಗೆ ಬೆಳೆಯುತ್ತೇವೆ.
          </motion.p>
          <motion.button
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md shadow hover:bg-green-700 transition"
            custom={2}
            initial="hidden"
            animate="visible"
            variants={textVariants}
          >
            ಸಂಪರ್ಕಿಸಿ
          </motion.button>
        </div>

        {/* Slideshow Images */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg"
        >
          <Image
            src={images[currentIndex]}
            alt="Hero Slide"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20 dark:bg-black/40" />
        </motion.div>
      </div>
    </section>
  );
}
