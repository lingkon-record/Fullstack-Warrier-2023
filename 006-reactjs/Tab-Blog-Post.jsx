"use client"
import React, { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState("blog");

  const tabs = [
    { name: "Blog", id: "blog" },
    { name: "Gallery", id: "gallery" },
  ];

  const content = {
    blog: (
      <div>
        <h2 className="text-2xl font-bold">Blog</h2>
        <p className="mt-4">This is the blog content.</p>
        <p className="mt-4">This is the blog content.</p>
        <p className="mt-4">This is the blog content.</p>
        <p className="mt-4">This is the blog content.</p>
        <p className="mt-4">This is the blog content.</p>
      </div>
    ),
    gallery: (
      <div>
        <h2 className="text-2xl font-bold">Gallery</h2>
        <p className="mt-4">This is the gallery content.</p>
        <img src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg" alt="" />
        <img src="https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg" alt="" />
      </div>
    ),
  };

  return (
    <div className="p-4">
      <div className="flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 px-4 text-sm font-medium ${
              activeTab === tab.id
                ? "text-blue-500 border-b-2 border-blue-500"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
      <div className="mt-4">{content[activeTab]}</div>
    </div>
  );
};

export default Tabs;
