import React from 'react';

const ProfileCard = () => {
  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-10">
      <div className="relative">
        <img 
          className="w-full h-48 object-cover" 
          src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" 
          alt="Cover" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <img 
            className="w-32 h-32 rounded-full border-4 border-white mt-24 shadow-lg" 
            src="https://media.istockphoto.com/id/1485546774/photo/bald-man-smiling-at-camera-standing-with-arms-crossed.jpg?s=612x612&w=0&k=20&c=9vuq6HxeSZfhZ7Jit_2HPVLyoajffb7h_SbWssh_bME=" 
            alt="Profile" 
          />
        </div>
      </div>
      <div className="text-center p-6">
        <h2 className="text-3xl font-bold text-gray-800">Khan Sakil</h2>
        <p className="text-gray-600">Web Developer</p>
        <div className="flex justify-center items-center mt-4 space-x-4">
          <span className="text-gray-500">Dhaka, Bangladesh</span>
        </div>
        <div className="flex justify-center items-center mt-2 space-x-4">
          <span className="text-gray-500">khan@example.com</span>
        </div>
        <div className="flex justify-center items-center mt-2 space-x-4">
          <span className="text-gray-500">+880 123 456 789</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
