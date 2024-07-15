import React from 'react';
import Sidebar from './Sidebar';
import FileList from './FileList';

const FileManager = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <FileList />
      </div>
    </div>
  );
}

export default FileManager;
