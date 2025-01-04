"use client";


import React from "react";

const PortfolioTemplate = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6 bg-gray-800 shadow-lg sticky top-0 z-50">
        <h1 className="text-3xl font-extrabold text-yellow-400">MyPortfolio</h1>
        <nav>
          <button className="text-white hover:text-yellow-400 mx-4">About</button>
          <button className="text-white hover:text-yellow-400 mx-4">Projects</button>
          <button className="text-white hover:text-yellow-400 mx-4">Contact</button>
          <button className="bg-yellow-400 px-5 py-2 rounded-md font-bold hover:bg-yellow-500">
            Hire Me
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center px-8 mt-16">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-5xl font-extrabold leading-snug">
            Hello, I'm <span className="text-yellow-400">Tomal Khan</span>
          </h2>
          <p className="mt-6 text-gray-300 text-lg">
            A passionate Frontend Developer with a focus on creating modern and
            user-friendly web applications.
          </p>
          <div className="mt-8">
            <button className="bg-yellow-400 px-6 py-3 rounded-md font-bold hover:bg-yellow-500">
              View Resume
            </button>
            <button className="ml-4 bg-gray-800 px-6 py-3 rounded-md hover:bg-gray-700">
              Contact Me
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
            alt="Profile"
            className="w-full rounded-full shadow-lg"
          />
        </div>
      </section>

      {/* About Section */}
      {/* <section className="mt-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="https://t3.ftcdn.net/jpg/03/54/07/18/360_F_354071892_GZNLJBUcOEAogSyl3iLZjlLGvLPHCT5I.jpg"

              alt="About"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 text-gray-300">
            <p className="text-lg">
              I specialize in building responsive and visually appealing web
              applications using modern technologies like ReactJS, TailwindCSS,
              and Next.js. With over 2 years of experience in the field, I’ve
              worked on diverse projects, from small businesses to enterprise
              solutions.
            </p>
            <p className="mt-4">
              Let’s create something incredible together!
            </p>
          </div>
        </div>
      </section> */}

{/* <section className="mt-20 px-8">
  <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
  <div className="flex flex-col md:flex-row items-center md:space-x-8">
    <div className="md:w-1/2 w-full mb-6 md:mb-0">
      <img
        src="https://t3.ftcdn.net/jpg/03/54/07/18/360_F_354071892_GZNLJBUcOEAogSyl3iLZjlLGvLPHCT5I.jpg"
        // src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
        // src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/469713779_122129615522449258_7244499149050760228_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG42YuodsmwKRIctuEOfJrQRNXOebxICKFE1c55vEgIoRAcjJZZev-UOL_dH5dV6K6zgYKWoN7uEf1UxW4fojg3&_nc_ohc=usDl-CC4ROkQ7kNvgEW0H9E&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AFtchREUe3iGm3ODL89fl4S&oh=00_AYDLx5EHNbI9gpxwT4lC8dxXkTZPnq9n-YemZMqvFEJ9LQ&oe=6776C11F"
        alt="About"
        className="w-full h-auto rounded-lg shadow-lg object-cover"
      />
    </div>
    <div className="md:w-1/2 w-full text-gray-300">
      <p className="text-lg">
        I specialize in building responsive and visually appealing web
        applications using modern technologies like ReactJS, TailwindCSS,
        and Next.js. With over 2 years of experience in the field, I’ve
        worked on diverse projects, from small businesses to enterprise
        solutions.
      </p>
      <p className="mt-4">
        Let’s create something incredible together!
      </p>
    </div>
  </div>
</section> */}

<section className="mt-20 px-8">
  <h3 className="text-3xl font-bold text-center mb-12">About Me</h3>
  <div className="flex flex-col md:flex-row items-center md:space-x-8">
    <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center">
      <img
        src="https://scontent.fdac24-5.fna.fbcdn.net/v/t39.30808-6/469713779_122129615522449258_7244499149050760228_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeG42YuodsmwKRIctuEOfJrQRNXOebxICKFE1c55vEgIoRAcjJZZev-UOL_dH5dV6K6zgYKWoN7uEf1UxW4fojg3&_nc_ohc=usDl-CC4ROkQ7kNvgEW0H9E&_nc_zt=23&_nc_ht=scontent.fdac24-5.fna&_nc_gid=AFtchREUe3iGm3ODL89fl4S&oh=00_AYDLx5EHNbI9gpxwT4lC8dxXkTZPnq9n-YemZMqvFEJ9LQ&oe=6776C11F"
        alt="About"
        className="w-48 h-48 rounded-full border-4 border-gray-300 shadow-lg object-cover"
      />
    </div>
    <div className="md:w-1/2 w-full text-gray-300 flex justify-center items-center">
      <p className="text-lg text-center">
        I specialize in building responsive and visually appealing web
        applications using modern technologies like ReactJS, TailwindCSS,
        and Next.js. With over 2 years of experience in the field, I’ve
        worked on diverse projects, from small businesses to enterprise
        solutions.

      </p>
    </div>
  </div>
</section>








      {/* Projects Section */}
      <section className="mt-20 px-8">
        <h3 className="text-3xl font-bold text-center mb-12">My Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <img
               src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
              alt="Project 1"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Project One</h4>
            <p className="text-gray-300">A modern e-commerce web app.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <img
               src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
              alt="Project 2"
              className="w-full h-40 object-cover rounded-md mb-4"
              />
            <h4 className="text-xl font-semibold mb-2">Project Two</h4>
            <p className="text-gray-300">A portfolio site for a client.</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl">
            <img
              src="https://itc.gov.my/v1/wp-content/uploads/2019/03/Meaning-of-travelling.jpg"
              alt="Project 3"
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h4 className="text-xl font-semibold mb-2">Project Three</h4>
            <p className="text-gray-300">
              A data visualization dashboard.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 py-8 bg-gray-800 text-center">
        <p className="text-gray-400">
          © 2025 Tomal. All rights reserved. | Built with React & TailwindCSS
        </p>
      </footer>
    </div>
  );
};

export default PortfolioTemplate;
