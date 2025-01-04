"use client"


import React from 'react';

// Dummy Data Object for Social Media Stats
const dashboardData = {
  followers: {
    total: 12000,
    increase: 250,
    percentage: 2.1,
  },
  engagement: {
    rate: 4.5,
    increase: 1.2,
  },
  posts: [
    {
      id: 1,
      title: 'Post 1',
      image: 'https://cdn.prod.website-files.com/5b7f24cc900973de13d7beb4/65b0a35d978a57a12b8837b6_Gross%20Sales%201.svg',
      likes: 800,
      comments: 45,
      shares: 120,
      engagement: 4.8,
    },
    {
      id: 2,
      title: 'Post 2',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSusWcN60dEj952b4lzcN-StYAYmrlWT8eLQ&s',
      likes: 1200,
      comments: 80,
      shares: 200,
      engagement: 5.5,
    },
    {
      id: 3,
      title: 'Post 3',
      image: 'https://cdn.prod.website-files.com/5b7f24cc900973de13d7beb4/65b0a35d978a57a12b8837b6_Gross%20Sales%201.svg',
      likes: 950,
      comments: 50,
      shares: 180,
      engagement: 4.2,
    },
  ],
};

const SocialMediaDashboard = () => {
  const { followers, engagement, posts } = dashboardData;

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-6 text-center text-4xl font-bold">
        Social Media Dashboard
      </header>

      <main className="p-6 space-y-6">
        {/* Followers Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Total Followers</h3>
              <p className="text-2xl font-bold text-gray-900">{followers.total}</p>
              <p className="text-sm text-gray-500">{followers.percentage}% increase</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-green-500">+{followers.increase}</p>
            </div>
          </div>

          {/* Engagement Rate */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Engagement Rate</h3>
              <p className="text-2xl font-bold text-gray-900">{engagement.rate}%</p>
              <p className="text-sm text-gray-500">+{engagement.increase}% increase</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-green-500">+{engagement.increase}%</p>
            </div>
          </div>

            {/* Engagement Rate */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-gray-700">Engagement Rate</h3>
              <p className="text-2xl font-bold text-gray-900">{engagement.rate}%</p>
              <p className="text-sm text-gray-500">+{engagement.increase}% increase</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-green-500">+{engagement.increase}%</p>
            </div>
          </div>
        </div>

        {/* Posts Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <h4 className="text-xl font-semibold text-gray-800 mt-4">{post.title}</h4>
              <div className="mt-4">
                <p className="text-gray-600">Likes: {post.likes}</p>
                <p className="text-gray-600">Comments: {post.comments}</p>
                <p className="text-gray-600">Shares: {post.shares}</p>
                <p className="text-gray-600">Engagement: {post.engagement}%</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-blue-600 text-white text-center p-4">
        <p>&copy; 2024 Social Media Dashboard. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SocialMediaDashboard;





