import React, { useState, useRef } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");
  const list = ["Home", "Education", "Project", "Skills", "Contact"];

  const listRef = useRef(null);

  // GSAP animation for the navbar
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.from(".navbar", {
      y: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    tl.from(".navbar h1", {
      scale: 0.5,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    }, "<");

    tl.from(listRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.3,
      ease: "power2.out",
    }); 
  }, []);

  return (
    <div className="navbar w-[96%] px-8 bg-[#7562AB] flex justify-between items-center rounded-full border-b-3 border-r-3 border-[#2A2A2A] z-10 fixed top-2 md:top-3 lg:top-5 left-[2%] h-16">
      
      {/* Logo */}
      <div className="text-white ml-4 text-2xl font-bold flex justify-center items-center">
        <h1 className="font-bold uppercase lg:text-xl md:text-lg text-base ">Subhadip Mandal <span className="text-yellow-300 lg:text-lg text-sm font-thin">&lt; / &gt;</span></h1>
      </div>

      {/* Desktop Menu */}
      <div ref={listRef} className="hidden md:flex justify-evenly w-1/2">
        {list.map((item) => (
          <Link
            key={item}
            to={`${item}`}
            smooth={true}
            duration={900}
            onClick={() => setActive(item)} // Set active menu item on click
            className={`h-8 px-4 rounded-full flex justify-center items-center font-semibold text-white cursor-pointer uppercase
              ${active === item ? "bg-pink-400 border-[#2A2A2A] border-b-3 border-r-3 border" : "hover:border"}`}
          >
            {item}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <AiOutlineClose size={28} className="text-white" />
          ) : (
            <AiOutlineMenu size={28} className="text-white" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-full bg-purple-600 md:hidden flex flex-col items-center py-4 shadow-lg border-b-4 border-black rounded-b-lg">
          {list.map((item) => (
            <Link
              key={item}
              to={`${item}`} // Match section name
              smooth={true}
              duration={900}
              onClick={() => {
                setActive(item);
                setIsOpen(false); // Close menu after selection
              }}
              className={`py-2 w-full text-center text-white font-semibold uppercase cursor-pointer 
                ${active === item ? "bg-pink-400 border-black border-b-4 border-r-4 border" : "hover:bg-pink-400"}`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
