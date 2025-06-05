import React from 'react';
import { Element } from 'react-scroll';
import tranquilo from '../assets/tranquilo.png';

const Project = () => {
  const projects = [
    {
      name: 'BookSelf',
      description: 'An online bookstore application.',
      image: 'https://images.photowall.com/products/52923/bookshelf-black-brown-1.jpg?h=699&q=85',
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
      name: 'Dictionary',
      description: 'An online dictionary application using a dictionary API.',
      image: 'https://www.collinsdictionary.com/images/thumb/dictionary_168552845_250.jpg',
      repo: 'https://github.com/Subhadip1001/JavaScript_Projects/tree/main/Dictionary'
    }
  ];
  return (
    <div name="Project" className='h-screen w-full px-4 bg-black flex flex-col justify-center items-center'>
      <h1 className='uppercase font-extrabold text-5xl md:text-6xl lg:text-8xl text-yellow-300 text-center' style={{ textShadow: '2px 0px 0px rgb(255, 255, 255)' }}>
        Projects
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-10 mt-8 md:mt-8 lg:mt-10'>
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => window.open(project.repo, '_blank')}
            className='border border-yellow-300 bg-black p-2 md:p-4 lg:p-6 rounded-lg text-yellow-300 hover:scale-105 transition duration-500 ease-in-out hover:shadow-lg hover:shadow-yellow hover:bg-yellow-300 hover:text-black cursor-pointer'
          >
            <img
              src={project.image}
              alt={project.name}
              className='w-full h-32 md:h-40 lg:h-48 object-cover rounded-md mb-4 border border-b-2 border-r-2 border-yellow-300'
            />
            <h2 className='text-lg md:text-xl lg:text-2xl font-bold mb-2'>{project.name}</h2>
            <p className='text-xs md:text-base lg:text-lg'>{project.description}</p>
          </div>
        ))}
      </div>
      <button 
        onClick={() => window.open('https://github.com/Subhadip1001?tab=repositories', '_blank')} 
        className='px-12 py-2 font-bold border border-yellow-300 rounded-full mt-10 text-yellow-300 hover:text-black hover:bg-yellow-300 transition duration-500 ease-in-out cursor-pointer'>
        More
      </button>
    </div>
  );
};

export default Project;
