import React,{useEffect} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import resume from '../assets/Resume/Subhadip_resume.pdf';


const Home = () => {
  const homeRef = React.useRef(null);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(homeRef.current, {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: 'power2.out',
    });

    tl.from(homeRef.current.querySelector('h1'), {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: 'back.out(1.7)',
    }, '<');

    tl.from(homeRef.current.querySelector('p'), {
      opacity: 0,
      y: 30,
      duration: 0.3,
      ease: 'power2.out',
    }, '<');

    tl.from(homeRef.current.querySelector('a'), {
      opacity: 0,
      delay: 2,
      y: 30,
      duration: 0.3,
      ease: 'power2.out',
    }, '<');
  }, []);
  
  return (
    <div ref={homeRef} name="Home" className='h-screen w-full bg-yellow-300 flex flex-col justify-center items-center text-center px-4 md:px-8 lg:px-16'>
      <h1 className='font-extrabold uppercase text-[50px] md:text-[70px] lg:text-[100px] leading-tight text-black relative' style={{ textShadow: '2px 0px 0px rgb(255, 255, 255)' }}>
        I'm Subhadip <br />
        Creative 
        {/* Capsule Wrapper */}
        <span className="relative inline-block mx-2 md:mx-4">
          {/* Capsule Background */}
          <span className="absolute inset-1 bg-black w-full h-full rounded-full -z-8 rotate-[-5deg]"></span>
          {/* Capsule Text */}
          <span className='px-3 py-1 md:px-5 md:py-2 lg:px-7 lg:py-3 bg-blue-300 border border-b border-r border-black rounded-full rotate-[-5deg] inline-block'>
            MERNStack
          </span>
        </span>
        <br /> Developer
      </h1>
      <p className='text-base md:text-lg lg:text-xl mt-4 md:mt-6 lg:mt-8'>
        I develop accessible, responsive, interactive, and animated <br className='hidden md:block' /> websites with a strong focus on performance.
      </p>
      <a
      href={resume}
      download="Subhadip_resume.pdf"
      className='px-3 py-1 md:px-4 md:py-2 lg:px-6 lg:py-3 bg-pink-400 rounded-full mt-6 md:mt-8 lg:mt-10 border-b-3 border-r-3 border-black cursor-pointer uppercase font-bold hover:border-b-6 hover:border-r-6'>
        Download CV
      </a>
    </div>
  );
};

export default Home;
