import React from "react";

const PersonalDiary = () => {
  return (
    <div className="p-16">
     
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 opacity-50"></div>
          <div className="relative p-8">
            <h3 className="text-3xl font-semibold mb-6 text-white">Diary Entry</h3>
            <p className="mb-6 text-white">
              Today was a great day! I spent my time doing things I love and
              enjoyed every moment of it.
            </p>
            <textarea
              rows="5"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your diary entry here..."
            ></textarea>
            <img
              src="https://static.remove.bg/sample-gallery/graphics/bird-thumbnail.jpg"
              alt="Bird"
              className="absolute bottom-0 right-0 w-32 h-32 object-cover rounded-full m-4 opacity-70"
            />
          </div>
        </div>

      
     
      
    </div>
  );
};

export default PersonalDiary;
