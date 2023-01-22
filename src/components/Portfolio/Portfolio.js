import React from "react";
import webSite1 from "../../Assets/images/site-1.jpg";
import webSite2 from "../../Assets/images/site-2.jpg";
import webSite3 from "../../Assets/images/site-3.jpg";
import webSite4 from "../../Assets/images/site-4.jpg";
import webSite5 from "../../Assets/images/site-5.jpg";
import webSite6 from "../../Assets/images/site-6.jpg";
import webSite7 from "../../Assets/images/site-7.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: webSite1,
    },
    {
      id: 2,
      src: webSite2,
    },
    {
      id: 3,
      src: webSite3,
    },
    {
      id: 4,
      src: webSite4,
    },
    {
      id: 5,
      src: webSite5,
    },
    {
      id: 6,
      src: webSite6,
    },
    {
      id: 7,
      src: webSite7,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black via-black to-stone-700 w-full text-white md:h-screen min-h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-white hover:text-red-600 font-bold inline border-b-4 duration-700 hover:border-white border-red-600">
            Portfolio
          </p>
          <p className="py-2 text-xl">Check Out Some Of My Work Right Here</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-12 md:px-0">
          {portfolios.map(({ id, src }) => (
            <div
              key={id}
              className="shadow-md shadow-red-600 rounded overflow-scroll overflow-x-hidden overflow-y-hidden h-[180px] hover:cursor-pointer"
            >
              <img
                src={src}
                alt=""
                className="rounded duration-300 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center sticky gap-2 bottom-[-1px]">
                <button className="w-1/2 px-4 py-2 hidden duration-200 bg-black rounded-lg hover:bg-red-600 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-4 py-2 hidden duration-200 bg-black rounded-lg hover:bg-red-600 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
