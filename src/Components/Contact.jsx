import React from 'react';

const Contact = () => {
  return (
    <div name="Contact" className='min-h-screen w-full bg-blue-300 flex flex-col justify-center items-center px-4 py-12 md:px-8 lg:px-16'>
      <h1 className='uppercase font-extrabold text-5xl md:text-6xl lg:text-8xl text-white text-center' style={{ textShadow: '2px 0px 0px rgb(0, 0, 0)' }}>
        Contact Me
      </h1>
      
      <form
        action="https://formspree.io/f/xrbpwrpd" // Replace with your Formspree endpoint or backend
        method="POST"
        className='bg-white rounded-2xl shadow-xl mt-10 p-6 md:p-10 lg:p-12 border border-b-4 border-r-4 border-[#2A2A2A] w-full max-w-2xl'
      >
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
            className="p-3 rounded-md border border-black focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="uppercase font-bold bg-pink-400 border-[#2A2A2A] border-b-3 border-r-3 rounded-full px-6 py-3 hover:bg-pink-500 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
