import React, { useState } from 'react';

// Sidebar Component
const Sidebar = ({ onSelect }) => {
  return (
    <div className="bg-gray-200 p-4 w-1/4">
      <ul>
        {['Blog', 'Product', 'Policy'].map((item) => (
          <li key={item}>
            <button
              className="block w-full text-left p-2 hover:bg-gray-300"
              onClick={() => onSelect(item)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// ContentSidebar Component
const ContentSidebar = ({ selected }) => {
  const contentData = {
    Blog: ['Blog Post 1', 'Blog Post 2', 'Blog Post 3'],
    Product: ['Product 1', 'Product 2', 'Product 3'],
    Policy: ['Policy 1', 'Policy 2', 'Policy 3'],
  };

  return (
    <div className="bg-gray-100 p-4 w-1/4">
      <h3 className="font-bold text-xl mb-2">{selected}</h3>
      <ul>
        {contentData[selected].map((contentItem) => (
          <li key={contentItem} className="p-2 hover:bg-gray-200">
            {contentItem}
          </li>
        ))}
      </ul>
    </div>
  );
};

// Content Component
const Content = ({ selected }) => {
  return (
    <div className="bg-white p-4 flex-1">
      <h2 className="text-2xl font-bold mb-4">{selected} Content</h2>
      <p>This is the content area for {selected}.</p>
    </div>
  );
};

// App Component
const App = () => {
  const [selected, setSelected] = useState('Blog');

  return (
    <div className="flex h-screen">
      <Sidebar onSelect={setSelected} />
      <ContentSidebar selected={selected} />
      <Content selected={selected} />
    </div>
  );
};

export default App;
