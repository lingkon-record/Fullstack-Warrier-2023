import React from 'react';

const Card = ({ title }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 text-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <img
        src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Room Door"
        className="w-full h-48 object-cover"
      />
    </div>
  );
};

const App = () => {
  return (
    <div className="container mx-auto p-4">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card title="Room 1" />
        <Card title="Room 2" />
        <Card title="Room 3" />
      </section>
    </div>
  );
};

export default App;
