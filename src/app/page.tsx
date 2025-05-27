"use client";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";
import GalleryComponent from "./components/Gallery";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function Home() {
  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Hero />
      </motion.div>

      <div>
        <WhyUs />
      </div>
      <div>
        <GalleryComponent />
      </div>
    </div>
  );
}
