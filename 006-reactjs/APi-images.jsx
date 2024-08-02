"use client"


import React, { useEffect, useState } from 'react';

const RandomImage = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomImage = async () => {
      const response = await fetch('https://picsum.photos/800/600');
      setImageUrl(response.url);
    };

    fetchRandomImage();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {imageUrl ? (
        <img src={imageUrl} alt="Random" className="rounded-lg shadow-lg" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RandomImage;

