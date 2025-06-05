import React,{ useRef } from 'react';

const Education = () => {
  const education = [
    {
      id: 1,
      name: 'B.Tech',
      year: '2022-2026',
      college: 'Sister Nivedita University',
      percentage: 'CGPA: 8.2',
      img : "https://static.vecteezy.com/system/resources/thumbnails/040/549/631/small_2x/graduation-hat-with-certificate-3d-icon-png.png"
    },
    {
      id: 3,
      name: 'High School',
      year: '2021-2022',
      college: 'K. M. High School',
      percentage: '82%',
      img: "https://png.pngtree.com/png-vector/20230823/ourmid/pngtree-school-building-illustration-vector-png-image_6866875.png"
    },
    {
      id: 2,
      name: 'Intermediate',
      year: '2019-2020',
      college: 'Jujur High School',
      percentage: '79%',
      img: "https://cdn3d.iconscout.com/3d/premium/thumb/book-and-pencil-3d-icon-download-in-png-blend-fbx-gltf-file-formats--srudy-learning-pack-school-education-icons-6704017.png"
    }
  ];
  
  return (
    <div name="Education" className='h-screen w-full bg-blue-300 flex flex-col justify-center items-center px-4'>
      <h1 className='uppercase font-extrabold text-5xl md:text-6xl lg:text-8xl text-white text-center' style={{ textShadow: '2px 0px 0px rgb(0, 0, 0)' }}>
        Education
      </h1>
      <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-6 md:mt-8 lg:mt-10'>
        {education.map((item) => (
          <div key={item.id} className='bg-white py-6 px-4 md:py-8 md:px-6 lg:py-10 lg:px-8 rounded-lg shadow-lg border border-b-3 border-r-3 border-black hover:scale-105 hover:bg-yellow-300 transition duration-500 ease-in-out'>
            <img
              src={`${item.img}`}
              alt={item.name}
              className='w-full h-30 md:h-40 lg:h-48 object-cover rounded-md mb-4 border border-b-2 border-r-2 border-black'
            />
            <h2 className='text md:text-xl lg:text-2xl font-bold mb-2'>{item.name}</h2>
            <p className='text-gray-700 font-bold text-xs md:text-base'>Year: {item.year}</p>
            <p className='text-gray-700 font-bold text-xs md:text-base'>College: {item.college}</p>
            <p className='text-gray-700 font-bold text-xs md:text-base'>{item.percentage}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
