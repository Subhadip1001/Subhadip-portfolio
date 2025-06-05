import React from 'react';
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="w-full bg-black text-yellow-300 border-t border-yellow-300 py-6 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col justify-between items-center space-y-4 lg:space-y-5">
        <div className="text-center lg:text-left text-sm md:text-base font-semibold">
          © {new Date().getFullYear()} Subhadip Mandal. All rights reserved.
        </div>

        <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-base">
          <a
            href="mailto:subhadipmandal98833@gmail.com"
            className="flex items-center gap-2 hover:text-white transition duration-300"
          >
            <FiMail /> Email
          </a>
          <a
            href="https://github.com/Subhadip1001"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition duration-300"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/subhadip-mandal-110270257/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition duration-300"
          >
            <FiLinkedin /> LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
