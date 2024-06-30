import React from 'react';

const images = [
  { url: 'https://pbs.twimg.com/media/FGLnj_oXIAIfqvN.jpg:large', name: 'Martyr 1' },
  { url: 'https://images.oca.org/icons/lg/december/1221juliananicomedia.jpg', name: 'Martyr 2' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOiGjtJqKAjk3Kx1o7QLK_tB4sGiWMp1OBw&s', name: 'Martyr 3' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYkn00q-wez6x5Sy_CnnxtPUBOUQgItfcwg&s', name: 'Martyr 4' },
  { url: 'https://img.freepik.com/premium-vector/vibrant-pop-art-gaming-soldier-military-hero-gaming-soldiers-mascot-style_969393-855.jpg', name: 'Martyr 5' },
  { url: 'https://pbs.twimg.com/media/FGLnj_oXIAIfqvN.jpg:large', name: 'Martyr 6' },
  { url: 'https://images.oca.org/icons/lg/december/1221juliananicomedia.jpg', name: 'Martyr 7' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxOiGjtJqKAjk3Kx1o7QLK_tB4sGiWMp1OBw&s', name: 'Martyr 8' },
  { url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxYkn00q-wez6x5Sy_CnnxtPUBOUQgItfcwg&s', name: 'Martyr 9' },
  { url: 'https://img.freepik.com/premium-vector/vibrant-pop-art-gaming-soldier-military-hero-gaming-soldiers-mascot-style_969393-855.jpg', name: 'Martyr 10' },
  { url: 'https://pbs.twimg.com/media/FGLnj_oXIAIfqvN.jpg:large', name: 'Martyr 11' },
  { url: 'https://images.oca.org/icons/lg/december/1221juliananicomedia.jpg', name: 'Martyr 12' }
];

const MartyrsGrid = () => {
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Martyrs List</h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
        {images.map((image, index) => (
          <div key={index} className="border-2  p-2 bg-gray-100 rounded-lg shadow-lg">
            <img src={image.url} alt={image.name} className="w-full h-40 object-cover rounded-md" />
            <p className="text-center mt-2 text-sm font-medium">{image.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MartyrsGrid;
