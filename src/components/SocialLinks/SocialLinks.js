import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30}></FaLinkedin>
        </>
      ),
      href: "https://www.linkedin.com/in/ak-zaber/",
      style: "rounded-tr",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30}></FaGithub>
        </>
      ),
      href: "https://github.com/Akzaber",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30}></HiOutlineMail>
        </>
      ),
      href: "mailto:foo@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, download, style, href, child }) => (
          <li
            key={id}
            className={
              "flex justify-center items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded duration-300 bg-gradient-to-r from-black via-stone-700 to-stone-700" +
              " " +
              style
            }
          >
            <a
              href={href}
              download={download}
              target="_blank"
              rel="noreferrer"
              className="flex justify-between items-center font-semibold w-full text-white"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
