import React, { useState } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import Content from './Content';

const App = () => {
  const [selected, setSelected] = useState('Home');

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Content selected={selected} />
      </div>
      <Navbar onSelect={setSelected} />
    </div>
  );
};

export default App;
