import React from 'react';

const BloggerHelp = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <div className="w-full max-w-5xl p-4 bg-white shadow-md mt-8 rounded-lg">
        <div className="border-b pb-4 mb-4">
          <h1 className="text-2xl font-semibold">Create a blog</h1>
          <p className="mt-2 text-gray-600">
            You can create and manage your own blog with Blogger.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Create a blog</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Sign in to Blogger.</li>
            <li>On the left, click the Down arrow.</li>
            <li>Click New blog.</li>
            <li>Enter a name for your blog.</li>
            <li>Click Next.</li>
            <li>Choose a blog address or URL.</li>
            <li>Click Save.</li>
          </ol>
          <p className="mt-4 text-sm text-gray-500">
            Note: Make sure you comply with the Blogger Content Policy and Terms of Service.
          </p>
        </div>
      </div>
      <div className="w-full max-w-xs p-4 mt-8 bg-white shadow-md rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Help</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Create a blog</li>
          <li>Add pages to your blog</li>
          <li>Create, edit, manage, or delete a post</li>
          <li>Add images & videos to your blog</li>
          <li>Manage your comments</li>
          <li>Sign in to multiple accounts</li>
          <li>Updates to image storage on Blogger</li>
          <li>Ensure readers can report inappropriate content</li>
        </ul>
      </div>
    </div>
  );
};

export default BloggerHelp;
