import React from 'react';
import tranquilo from '../assets/tranquilo.png';
import bookShelf from '../assets/bookShelf.png';
import quizCreaft from '../assets/quizCraft.png';

const Project = () => {
  const projects = [
    {
      name: 'BookSelf',
      description: 'An online bookstore application.',
      image: bookShelf,
      repo: 'https://github.com/Subhadip1001/BookShelf'
    },
    {
      name: 'Uber Clone',
      description: 'Similar to an Uber mobile app, featuring a real-time tracking system.',
      image: 'https://www.apurple.co/wp-content/uploads/2024/04/Uber-Clone-App-For-Higher-ROI.webp',
      repo: 'https://github.com/Subhadip1001/Uber-clone'
    },
    {
      name: 'Tranquilo',
      description: 'Designed a user-friendly website for a mental health chatbot that supports natural conversations and multiple languages.',
      image: tranquilo,
      repo: 'https://github.com/Subhadip1001/Tranquilo'
    },
    {
      name: 'QuizCraft',
      description: 'A full-stack quiz app with user roles, AI-generated questions, scoring, analytics, and an interactive chatbot assistant.',
      image: quizCreaft,
      repo: 'https://github.com/Subhadip1001/QuizCraft.git'
    }
  ];
  return (
    <div name="Project" className='min-h-screen w-full px-2 md:px-4 lg:px-8 bg-[#2A2A2A] flex flex-col justify-center items-center py-8'>
      <h1 className='uppercase font-extrabold text-5xl sm:text-4xl md:text-5xl lg:text-7xl text-yellow-300 text-center mb-6' style={{ textShadow: '2px 0px 0px rgb(255, 255, 255)' }}>
        Projects
      </h1>
      <div className='w-full flex justify-center'>
        <div className='grid gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-4 w-full max-w-7xl'>
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => window.open(project.repo, '_blank')}
              className='relative group cursor-pointer rounded-2xl overflow-hidden border-2 border-yellow-300 shadow-md hover:shadow-yellow-300 transition-transform transform hover:scale-105 bg-yellow-300 w-full'
            >
              <div>
                <img
                  src={project.image}
                  alt={project.name}
                  className='w-full h-40 sm:h-44 md:h-48 lg:h-56 object-fill rounded-t-2xl'
                />
              </div>
              <div className='px-3 py-2 sm:px-4 sm:py-3'>
                <h2 className='text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-1'>{project.name}</h2>
                <p className='text-xs sm:text-sm md:text-base'>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={() => window.open('https://github.com/Subhadip1001?tab=repositories', '_blank')}
        className="mt-10 px-6 py-2 rounded-full border-2 border-yellow-300 text-yellow-300 font-bold text-base sm:text-lg hover:bg-yellow-300 hover:text-black transition duration-300"
      >
        View More Projects
      </button>
    </div>
  );
};

export default Project