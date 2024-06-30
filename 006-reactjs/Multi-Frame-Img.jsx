import React from 'react';

const images = [
  'https://pbs.twimg.com/media/FGLnj_oXIAIfqvN.jpg:large',
  'https://images.oca.org/icons/lg/december/1221juliananicomedia.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOiGjtJqKAjk3Kx1o7QLK_tB4sGiWMp1OBw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYkn00q-wez6x5Sy_CnnxtPUBOUQgItfcwg&s',
  'https://img.freepik.com/premium-vector/vibrant-pop-art-gaming-soldier-military-hero-gaming-soldiers-mascot-style_969393-855.jpg'
];

const MartyrsGrid = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Martyrs List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((src, index) => (
          <div key={index} className={`p-2 ${index % 2 === 0 ? 'col-span-1' : 'col-span-2'} bg-gray-100 rounded-lg shadow-lg`}>
            <img src={src} alt={`Martyr ${index}`} className="w-full h-auto rounded-md" />
            <p className="text-center mt-2">Martyr {index + 1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MartyrsGrid;
