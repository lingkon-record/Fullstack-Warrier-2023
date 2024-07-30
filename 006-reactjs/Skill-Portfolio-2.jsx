import React from 'react';

const PortfolioPage = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen p-6">
      {/* Header */}
      <header className="bg-white shadow-lg py-4 px-6 mb-10 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-800">Lingkon's Portfolio</h1>
      </header>

      {/* Main Content */}
      <main className="space-y-12">
        {/* Job Experience */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Job Experience</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
            <JobExperience
              role="Software Engineer"
              company="Tech Company A"
              duration="Jan 2020 - Dec 2021"
              description="Worked on various full-stack development projects using React, Node.js, and MongoDB."
            />
            <JobExperience
              role="Frontend Developer"
              company="Web Solutions B"
              duration="Feb 2018 - Dec 2019"
              description="Focused on developing responsive web interfaces using React and Tailwind CSS."
            />
            {/* Add more JobExperience components as needed */}
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Skills</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-wrap gap-2">
            <Skill name="React" />
            <Skill name="Tailwind CSS" />
            <Skill name="JavaScript" />
            <Skill name="Node.js" />
            <Skill name="MongoDB" />
            {/* Add more Skill components as needed */}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Projects</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg space-y-6">
            <Project
              title="Project A"
              description="A web application developed using React and Node.js to manage tasks and projects."
              duration="3 months"
            />
            <Project
              title="Project B"
              description="An e-commerce website built with React and MongoDB, featuring a responsive design and payment integration."
              duration="6 months"
            />
            {/* Add more Project components as needed */}
          </div>
        </section>
      </main>
    </div>
  );
};

const JobExperience = ({ role, company, duration, description }) => (
  <div className="border-b pb-4">
    <h3 className="text-lg font-semibold text-gray-800">{role}</h3>
    <p className="text-gray-600">{company}</p>
    <p className="text-gray-500">{duration}</p>
    <p className="text-gray-700 mt-2">{description}</p>
  </div>
);

const Skill = ({ name }) => (
  <span className="inline-block bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow">
    {name}
  </span>
);

const Project = ({ title, description, duration }) => (
  <div>
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-gray-700 mt-2">{description}</p>
    <p className="text-gray-500 mt-1">Duration: {duration}</p>
  </div>
);

export default PortfolioPage;
