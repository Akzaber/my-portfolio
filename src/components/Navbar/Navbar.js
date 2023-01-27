import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [icon, setIcon] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "blog",
    },
    {
      id: 6,
      link: "contact",
    },
  ];
  return (
    <div className="flex justify-between items-center h-20 w-full fixed bg-black text-white px-4">
      <div>
        <h1 className="text-5xl pl-4 font-signature hover:cursor-pointer">
          <span className="hover:text-red-600 duration-300">A</span>
          <span className="hover:text-red-600 duration-300">k</span>
          <span className="hover:text-red-600 duration-300">.</span>
          <span className="hover:text-red-600 duration-300">Z</span>
          <span className="hover:text-red-600 duration-300">a</span>
          <span className="hover:text-red-600 duration-300">b</span>
          <span className="hover:text-red-600 duration-300">e</span>
          <span className="hover:text-red-600 duration-300">r</span>
          <span className="hover:text-red-600 duration-300">s</span>
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => (
          <li
            key={id}
            className="px-4 hover:text-white capitalize text-gray-500 hover:scale-105 duration-300 cursor-pointer"
          >
            <Link to={link} smooth duration={500}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setIcon(!icon)}
        className="md:hidden cursor-pointer pr-4 z-10 text-stone-700 hover:text-white"
      >
        {icon ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
      </div>

      {icon && (
        <>
          <ul className="md:hidden flex flex-col mx-auto items-center absolute top-0 left-0 w-[200px] bg-gradient-to-b from-black to-stone-700 mt-20 h-screen">
            {links.map(({ link, id }) => (
              <li
                key={id}
                className="py-4 text-xl hover:text-white capitalize text-stone-700 hover:scale-105 duration-300 cursor-pointer"
              >
                <Link
                  onClick={() => setIcon(!icon)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
