"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const images = ["/18.jpg", "/19.jpg", "/20.jpg"]; // Add more paths as needed

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[100vh] overflow-hidden mt-20">
      {/* Background Image */}
      <Image
        src={images[currentIndex]}
        alt="Hero Image"
        fill
        className="object-cover transition-opacity duration-1000"
        priority
      />

      {/* Overlayed Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white bg-black/30 pb-16 px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">
          ಸ್ವಾಗತ <br /> ನಮ್ಮ ಸಹಕಾರಿ ಸಂಘಕ್ಕೆ
        </h1>
        <p className="text-lg md:text-2xl text-center">
          ಸಮೃದ್ಧಿ ಮತ್ತು ಸಹಕಾರದ ದಾರಿಯಲ್ಲಿ
        </p>
      </div>
    </div>
  );
}
