"use client";

import { motion } from "framer-motion";

export default function WhyUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const cards = [
    {
      title: "Trusted Brand",
      text: "Karnataka State Co-operative Societies Association is a well known Association Since 2000.",
    },
    {
      title: "Best Service",
      text: 'We Are "All About You". We believe in complete satisfaction to our clients.',
    },
    {
      title: "Our Vision",
      text: "To consistently enhance our competitiveness and deliver profitable growth.",
    },
  ];

  return (
    <section className="py-12 bg-gray-100 text-center">
      <motion.h2
        className="text-5xl md:text-5xl font-bold mb-10 text-blue-800"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
      >
        Why Us?
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-blue-700">
              {card.title}
            </h3>
            <p className="text-gray-700">{card.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
