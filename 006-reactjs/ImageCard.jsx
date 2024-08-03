"use client"
import { useState } from 'react';

const ImageCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative w-64 h-64 overflow-hidden rounded-lg shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img 
        src="https://media.istockphoto.com/id/1348951811/photo/profile-view-of-a-young-man-looking-away-over-gray-background.jpg?s=612x612&w=0&k=20&c=i8kEgQNqa5VHZEveF10m_Ljje7cJJm86uQ3fqg_3DO4=" 
        alt="Cover"
        className={`w-full h-full object-cover transition-all duration-500 ${isHovered ? 'brightness-100' : 'brightness-10'}`} 
      />
      {isHovered && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white text-lg font-semibold">
          <p>Name: Lingkon </p>
          <p>Age: 23</p>
          <p>Birth: 2001</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
