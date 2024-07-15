import React from 'react';

const files = [
  { name: 'Document1.txt', type: 'file' },
  { name: 'Picture1.png', type: 'file' },
  { name: 'Music1.mp3', type: 'file' },
  // Add more files as needed
];

const FileList = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Files</h2>
      <ul className="space-y-2">
        {files.map((file, index) => (
          <li key={index} className="p-4 border border-gray-300 rounded-md shadow-sm hover:bg-gray-100 cursor-pointer">
            {file.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileList;
