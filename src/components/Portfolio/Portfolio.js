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
      demo: "https://used-products-resale-cli-c9941.web.app/",
      code: "https://github.com/Akzaber/resale-used-phone",
    },
    {
      id: 2,
      src: webSite2,
      demo: "https://assignment-11-client-sid-bacd6.web.app/",
      code: "https://github.com/Akzaber/service-review-client-site",
    },
    {
      id: 3,
      src: webSite3,
      demo: "https://assignment-10-client-side.web.app/",
      code: "https://github.com/Akzaber/learning-platform-client-site",
    },
    {
      id: 4,
      src: webSite4,
      demo: "https://akzaber.github.io/Assignment-3-edTech-website/",
      code: "https://github.com/Akzaber/Assignment-3-edTech-website",
    },
    {
      id: 5,
      src: webSite5,
      demo: "https://thriving-melomakarona-5374d7.netlify.app/",
      code: "https://github.com/Akzaber/react-dragon-news-client",
    },
    {
      id: 6,
      src: webSite6,
      demo: "https://cheery-queijadas-8237cb.netlify.app/",
      code: "",
    },
    {
      id: 7,
      src: webSite7,
      demo: "https://tiny-faloodeh-f08bae.netlify.app/",
      code: "https://github.com/Akzaber/quiz-qrackers-website",
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
          {portfolios.map(({ id, src, demo, code }) => (
            <div
              key={id}
              className="shadow-md shadow-red-600 rounded overflow-scroll overflow-x-hidden overflow-y-hidden h-[180px]"
            >
              <img src={src} alt="" className="rounded" />
              <div className="flex items-center justify-center sticky gap-2 bottom-[-1px]">
                <a
                  href={demo}
                  rel="noreferrer"
                  target="_blank"
                  className="w-1/2 px-4 py-2 duration-300 bg-black hover:bg-red-600"
                >
                  Demo
                </a>
                <a
                  href={code}
                  rel="noreferrer"
                  target="_blank"
                  className="w-1/2 px-4 py-2 duration-300 bg-black hover:bg-red-600"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
