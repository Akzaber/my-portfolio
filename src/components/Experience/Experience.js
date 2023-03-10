import React from "react";
import html from "../../Assets/technologies/html.png";
import css from "../../Assets/technologies/css.png";
import react from "../../Assets/technologies/react.png";
import nodejs from "../../Assets/technologies/nodejs.png";
import tailwind from "../../Assets/technologies/tailwind.png";
import bootstrap from "../../Assets/technologies/bootstrap.png";
import firebase from "../../Assets/technologies/firebase.png";
import mongodb from "../../Assets/technologies/mongodb.png";
import express from "../../Assets/technologies/express.png";

const Experience = () => {
  const tecs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-cyan-600",
    },
    {
      id: 4,
      src: bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-violet-500",
    },
    {
      id: 5,
      src: react,
      title: "REACT JS",
      style: "shadow-teal-600",
    },
    {
      id: 6,
      src: nodejs,
      title: "NODE JS",
      style: "shadow-green-600",
    },
    {
      id: 7,
      src: express,
      title: "EXPRESS JS",
      style: "shadow-yellow-500",
    },

    {
      id: 8,
      src: mongodb,
      title: "MONGODB",
      style: "shadow-white",
    },
    {
      id: 9,
      src: firebase,
      title: "FIREBASE",
      style: "shadow-amber-700",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-stone-700 via-stone-700 to-black w-full md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <h1 className="text-4xl text-white hover:text-red-600 font-bold inline border-b-4 duration-700 hover:border-white border-red-600">
            Experience
          </h1>
          <p className="py-2 text-xl">
            These are the technologies i have worked with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {tecs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
