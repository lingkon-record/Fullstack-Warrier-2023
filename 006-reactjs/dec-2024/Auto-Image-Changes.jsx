"use client"
import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = [
    "https://pixlr.com/images/generator/text-to-image.webp",
    "https://t3.ftcdn.net/jpg/06/87/23/04/360_F_687230468_RE94FphpxaiYC0mzkBVflRGg16JC1lNG.jpg",
    "https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg",
    "https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 1 second
    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <img
        src={images[currentIndex]}
        alt={`Image ${currentIndex + 1}`}
        className="w-96 h-96 object-cover rounded shadow-lg"
      />
    </div>
  );
};

export default ImageCarousel;
