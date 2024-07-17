import React from 'react';

const Content = ({ selected }) => {
  const contentData = {
    Home: 'Welcome to the Home page!',
    Profile: 'Here is your profile information.',
    Settings: 'Adjust your preferences in the Settings page.',
  };

  return (
    <main className="p-4">
      <h2 className="text-xl font-bold mb-4">{selected}</h2>
      <p>{contentData[selected]}</p>
    </main>
  );
};

export default Content;
