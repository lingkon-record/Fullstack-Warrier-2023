"use client"

import React, { useState, useEffect } from 'react';

function GitHubProfileViewer() {
  const [username, setUsername] = useState('');
  const [profileData, setProfileData] = useState(null);
  const [reposData, setReposData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch user profile and repositories from GitHub API
  const fetchGitHubData = async () => {
    if (!username) return;

    setLoading(true);
    setError('');
    try {
      const profileResponse = await fetch(`https://api.github.com/users/${username}`);
      if (!profileResponse.ok) throw new Error('User not found');
      const profile = await profileResponse.json();

      const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=5`);
      if (!reposResponse.ok) throw new Error('Repositories not found');
      const repos = await reposResponse.json();

      setProfileData(profile);
      setReposData(repos);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (username) fetchGitHubData();
  }, [username]);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-3xl p-8 bg-white rounded-lg shadow-lg text-center">
      <h2>Don't type github.com</h2>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">GitHub Profile Viewer</h1>
    

        <div className="mb-6">
          <input
            type="text"
            placeholder="Enter GitHub username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border rounded-lg w-64 text-gray-700"
          />
          <button
            onClick={fetchGitHubData}
            className="ml-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
          >
            Search
          </button>
        </div>

        {loading && <p className="text-gray-500">Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}

        {profileData && !loading && !error && (
          <div>
            <div className="mb-6">
              <img src={profileData.avatar_url} alt="Avatar" className="w-32 h-32 rounded-full mx-auto" />
              <h2 className="text-xl font-bold text-gray-800 mt-4">{profileData.name}</h2>
              <p className="text-gray-500">{profileData.bio}</p>
              <p className="text-gray-500">{profileData.location}</p>
              <p className="text-gray-500">
                <a href={profileData.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                  View GitHub Profile
                </a>
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Repositories</h3>
            {reposData.length === 0 ? (
              <p className="text-gray-500">No repositories found.</p>
            ) : (
              <ul className="space-y-4">
                {reposData.map((repo) => (
                  <li key={repo.id} className="p-4 bg-gray-50 rounded-lg shadow-md">
                    <h4 className="text-xl font-semibold text-gray-800">{repo.name}</h4>
                    <p className="text-gray-600">{repo.description || 'No description'}</p>
                    <div className="mt-2 flex items-center">
                      <span className="text-gray-500 mr-4">⭐ {repo.stargazers_count} Stars</span>
                      <span className="text-gray-500">🍴 {repo.forks_count} Forks</span>
                    </div>
                    <div className="mt-2">
                      <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                        View Repository
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default GitHubProfileViewer;
