"use client"

import React, { useState } from "react";

const TravelBlog = () => {
  const [posts, setPosts] = useState([
    {
      title: "Revenge Travel: Exploring the World Post-Pandemic",
      content:
        "After a long hiatus due to the pandemic, revenge travel is trending as people are eager to explore the world again. From beaches to mountains, this is the time to make up for lost travel time!",
      image:
        "https://images.summitmedia-digital.com/spotph/images/2021/01/12/revenge-travel-640-1610450263.jpg",
      itinerary: ["Day 1: Visit the beach", "Day 2: Explore the local markets", "Day 3: Hiking in the mountains"],
    },
    {
      title: "Budget-Friendly Travel Tips for 2021",
      content:
        "Traveling on a budget is possible! Here are some tips to help you save money while exploring new places. From finding cheap flights to staying in budget-friendly accommodations, we've got you covered.",
      image:
        "https://www.bria.com.ph/wp-content/uploads/2021/03/Cheap-travel.jpg",
      itinerary: ["Day 1: Free walking tours", "Day 2: Local street food", "Day 3: Visit museums with free entry"],
    },
    {
      title: "Famous Landmarks Around the World",
      content:
        "From the Eiffel Tower to the Great Wall of China, the world is filled with iconic landmarks that are a must-visit for any traveler. Here’s a list of the top landmarks you should include in your itinerary.",
      image:
        "https://thumbs.dreamstime.com/b/famous-landmarks-around-world-travel-background-ai-generative-famous-landmarks-around-world-travel-background-design-324007031.jpg",
      itinerary: ["Day 1: Eiffel Tower, Paris", "Day 2: Great Wall of China", "Day 3: Colosseum, Rome"],
    },
  ]);

  const addPost = (title, content, image, itinerary) => {
    setPosts([
      ...posts,
      { title, content, image, itinerary },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-500 text-white p-4 text-center text-3xl font-bold">
        Travel Blog
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-56 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
                <p className="text-gray-700 mt-2">{post.content}</p>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-gray-800">Itinerary:</h3>
                  <ul className="list-disc pl-5 text-gray-600">
                    {post.itinerary.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Add Your Travel Post</h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const title = e.target.title.value;
              const content = e.target.content.value;
              const image = e.target.image.value;
              const itinerary = e.target.itinerary.value.split(",");
              addPost(title, content, image, itinerary);
              e.target.reset();
            }}
          >
            <input
              type="text"
              name="title"
              placeholder="Post Title"
              className="p-2 w-full mb-4 border border-gray-300 rounded-lg"
              required
            />
            <textarea
              name="content"
              placeholder="Post Content"
              rows="4"
              className="p-2 w-full mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="image"
              placeholder="Image URL"
              className="p-2 w-full mb-4 border border-gray-300 rounded-lg"
              required
            />
            <input
              type="text"
              name="itinerary"
              placeholder="Itinerary (comma separated)"
              className="p-2 w-full mb-4 border border-gray-300 rounded-lg"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700"
            >
              Add Post
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-blue-500 text-white text-center p-4">
        <p>&copy; 2024 Travel Blog. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TravelBlog;


