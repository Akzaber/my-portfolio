import React from "react";
import heroImage2 from "../../Assets/images/heroImage2.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full text-white bg-gradient-to-b from-black via-black  to-stone-700 pt-60 md:pt-0"
    >
      <div className="max-w-screen-lg mx-auto px-4 md:flex-row h-full gap-4 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-5xl md:text-7xl font-bold">
            I am Junior Front-End-Developer
          </h1>
          <p className="text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non
            earum laudantium veritatis ab aspernatur perferendis, necessitatibus
            praesentium pariatur architecto in expedita cum temporibus
            recusandae quibusdam sunt corporis dicta fugiat.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group w-fit my-2 px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 flex font-semibold justify-center rounded items-center"
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
        <div className="md:w-[700px] w-1/2">
          <img src={heroImage2} alt="" className="rounded-lg w-full" />
        </div>
      </div>
    </div>
  );
};

export default Home;
