import React from 'react'

const Skills = () => {
  const skills = [
    { id: 1, name: 'C', level: 'Advanced' },
    { id: 2, name: 'C++', level: 'Advanced' },
    { id: 3, name: 'JAVA', level: 'Advanced' },
    { id: 4, name: 'Python', level: 'Basic' },
    { id: 5, name: 'JavaScript', level: 'Advanced' },
    { id: 6, name: 'HTML', level: '' },
    { id: 7, name: 'CSS', level: '' },
    { id: 9, name: 'MERN Stack', level: '' },
    { id: 10, name: 'React', level: 'Advanced' },
    { id: 11, name: 'Node.js', level: 'Advanced' },
    { id: 12, name: 'Express.js', level: 'Advanced' },
    { id: 13, name: 'MongoDB', level: '' },
    { id: 14, name: 'GSAP', level: '' },
    { id: 15, name: 'Socket.io', level: '' },
    { id: 16, name: 'PostgreSQL', level: '' }
  ]
  return (
    <div name="Skills" className='h-screen w-full px-2 md:px-4 lg:px-8 bg-yellow-300 flex flex-col justify-center items-center shadow-lg'>
      <h1 className='uppercase position-relative text-[#2A2A2A] font-extrabold text-5xl md:text-6xl lg:text-8xl' style={{ textShadow: '2px 0px 0px rgb(255, 255, 255)' }}>Skills</h1>
      <div className='w-[80%] border border-[#2A2A2A] border-b-4 border-r-4 rounded-xl grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mt-8 md:mt-10 lg:mt-12 p-4 md:p-6 lg:p-8 shadow-md' style={{ backgroundColor: 'rgba(249, 245, 245, 0.57)' }}>
        {
          skills.map((skill) => {
            return (
              <div key={skill.id}>
                <h2 className='font-semibold text-base md:text-lg lg:text-xl'>{skill.name}</h2>
                <h3 className='text-xs md:text-base lg:text-sm'>{skill.level}</h3>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Skills
