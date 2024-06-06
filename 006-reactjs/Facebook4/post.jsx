// src/Post.js
import React from 'react';

const Post = ({ name, post, author, caption, date, time, device }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden mb-6">
      <div className="px-6 py-4">
        <div className="flex items-center mb-4">
          <img
            className="w-10 h-10 rounded-full mr-4"
            src={`https://i.pravatar.cc/150?u=${name}`}
            alt={name}
          />
          <div>
            <div className="font-bold text-lg">{name}</div>
            <div className="text-gray-600 text-sm">@{author}</div>
            <div className="text-gray-400 text-xs">{date} at {time} • {device}</div>
          </div>
        </div>
        <div className="text-gray-800 text-base mb-4">{post}</div>
        <div className="text-gray-600 text-sm">{caption}</div>
      </div>
      <div className="px-6 py-2 bg-gray-100 border-t border-gray-200">
        <button className="text-blue-500 font-semibold hover:underline mr-4">Like</button>
        <button className="text-blue-500 font-semibold hover:underline">Comment</button>
      </div>
    </div>
  );
};

export default Post;
