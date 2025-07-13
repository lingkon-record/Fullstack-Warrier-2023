import React, { useState } from "react";

const videosData = [
     {
    name: "Food Delivery Test",
    uploadDate: "2025-07-08",
    duration: 3,
    image: "https://images.deliveryhero.io/image/darkstores-bd/food/846656001240.jpg?height=480",
  },
  {
    name: "PRAN Snacks Review",
    uploadDate: "2025-07-10",
    duration: 5,
    image: "https://www.pranfoods.net/sites/default/files/2023-08/SNACKS_0.jpeg",
  },
  {
    name: "BSS News Coverage",
    uploadDate: "2025-07-12",
    duration: 10,
    image: "https://www.bssnews.net/assets/news_photos/2024/07/14/image-200187-1720961313.jpg",
  }
 
];

export default function App() {
  const [filter, setFilter] = useState("");
  const [filteredVideos, setFilteredVideos] = useState(videosData);

  const handleFilter = () => {
    let sorted = [...videosData];
    if (filter === "new") {
      sorted.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
    } else if (filter === "old") {
      sorted.sort((a, b) => new Date(a.uploadDate) - new Date(b.uploadDate));
    } else if (filter === "longer") {
      sorted.sort((a, b) => b.duration - a.duration);
    } else if (filter === "shorter") {
      sorted.sort((a, b) => a.duration - b.duration);
    }
    setFilteredVideos(sorted);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">YouTube Home Page UI</h1>
      <div className="flex gap-4 mb-6 flex-wrap">
        <button onClick={() => setFilter("new")} className="bg-blue-500 text-white px-4 py-2 rounded-xl">New</button>
        <button onClick={() => setFilter("old")} className="bg-blue-500 text-white px-4 py-2 rounded-xl">Old</button>
        <button onClick={() => setFilter("longer")} className="bg-green-500 text-white px-4 py-2 rounded-xl">Longer</button>
        <button onClick={() => setFilter("shorter")} className="bg-green-500 text-white px-4 py-2 rounded-xl">Shorter</button>
        <button onClick={handleFilter} className="bg-black text-white px-4 py-2 rounded-xl">Submit</button>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {filteredVideos.map((video, index) => (
          <div key={index} className="bg-white p-4 rounded-2xl shadow-md">
            <img src={video.image} alt={video.name} className="w-full h-40 object-cover rounded-xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">{video.name}</h2>
            <p className="text-gray-600 text-sm">Upload Date: {video.uploadDate}</p>
            <p className="text-gray-600 text-sm">Duration: {video.duration} mins</p>
          </div>
        ))}
      </div>
    </div>
  );
}
