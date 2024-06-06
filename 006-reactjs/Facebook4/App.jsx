// src/App.js
import React from 'react';
import Post from './post';
import { posts } from './data';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 shadow-md py-4 text-white fixed w-full z-10">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold">Facebook</div>
          <div className="flex space-x-4">
            <button className="hover:text-blue-300">Home</button>
            <button className="hover:text-blue-300">Messages</button>
            <button className="hover:text-blue-300">Notifications</button>
            <button className="hover:text-blue-300">Profile</button>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-200 rounded-full px-4 py-2 focus:outline-none"
          />
        </div>
      </header>
      <div className="flex flex-1 pt-16">
        <aside className="w-1/5 hidden min-h-full lg:block fixed top-16 bottom-16 bg-white p-4 shadow-md overflow-auto">
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-4">Navigation</h2>
            <ul>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Profile</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Find Friends</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Groups</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Pages</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Videos</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Podcasts</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Feed</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Events</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Shortcuts</button></li>
            </ul>
          </div>
        </aside>
        <main className="flex-1 lg:ml-[20%] overflow-auto">
          <div className="container mt-4 mx-auto px-6">
            {posts.map((post, index) => (
              <Post
                key={index}
                name={post.name}
                post={post.post}
                author={post.author}
                caption={post.caption}
                date={post.date}
                time={post.time}
                device={post.device}
              />
            ))}
          </div>
        </main>
        <aside className="w-1/5 min-h-full hidden lg:block fixed top-16 bottom-16 right-0 bg-white p-4 shadow-md overflow-auto">
          <div className="mb-6">
            <h2 className="font-bold text-lg mb-4">Contacts</h2>
            <ul>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Lingkon Record</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">HM Nayeem</button></li>
              <li className="mb-2"><button className="text-blue-500 hover:underline">Summit Saha</button></li>
            </ul>
          </div>
        </aside>
      </div>
      {/* <footer className="bg-blue-600 text-white py-4 mt-6  bottom-0 w-full">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between">
            <div>
              <h3 className="font-bold text-lg mb-2">Contact Us</h3>
              <p>Email: support@facebookclone.com</p>
              <p>Address: 123 Facebook Clone St, Internet City</p>
              <p>Location: Somewhere on Earth</p>
            </div>
            <div className="mt-4 lg:mt-0">
              <h3 className="font-bold text-lg mb-2">Policy</h3>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookie Policy</p>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default App;
