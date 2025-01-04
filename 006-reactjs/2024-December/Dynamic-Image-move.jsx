"use client"


import React, { useState, useEffect } from "react";

const DynamicImageCarousel = () => {
  const images = [
    "https://pixlr.com/images/generator/text-to-image.webp",
    "https://t3.ftcdn.net/jpg/06/87/23/04/360_F_687230468_RE94FphpxaiYC0mzkBVflRGg16JC1lNG.jpg",
    "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [position, setPosition] = useState({ top: "50%", left: "50%" });

  useEffect(() => {
    const interval = setInterval(() => {
      // Change image index
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

      // Generate random positions within viewport
      const randomTop = Math.random() * 80 + 10; // Between 10% and 90% (to avoid going out of bounds)
      const randomLeft = Math.random() * 80 + 10;

      setPosition({ top: `${randomTop}%`, left: `${randomLeft}%` });
    }, 1000); // Change every 1 second

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="relative w-screen h-screen bg-gray-100 overflow-hidden">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        style={{
          top: position.top,
          left: position.left,
          transform: "translate(-50%, -50%)",
        }}
        className="absolute w-48 h-48 object-cover rounded-full shadow-lg transition-all duration-700 ease-in-out"
      />
    </div>
  );
};

export default DynamicImageCarousel;
