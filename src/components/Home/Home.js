import React from "react";
import heroImage2 from "../../Assets/images/heroImage2.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="md:h-screen w-full text-white bg-gradient-to-b from-black via-black  to-stone-700 pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto px-4 md:flex-row w-full h-full gap-4 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-6xl font-bold">
            Hello I am Zaber junior Front-end Developer
          </h1>
          <p className="text-lg">
            My confidence possitive attitude and self-belief are my biggest
            assets to take me a step closer to my success.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit hover:scale-105 my-2 px-6 py-3 hover:text-red-600 bg-gradient-to-r from-red-600 hover:from-white to-red-700 hover:to-white flex font-semibold justify-center duration-300 rounded items-center hover:cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight
                  className="ml-1"
                  size={25}
                ></MdKeyboardArrowRight>
              </span>
            </Link>
          </div>
        </div>
        <div className="w-1/2">
          <img src={heroImage2} alt="" className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
