import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="md:h-screen w-full bg-gradient-to-b from-stone-700  via-stone-700 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-white hover:text-red-600 font-bold inline border-b-4 duration-700 hover:border-white border-red-600">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Hello, I am Zaber. I am doing B.Sc. in computer science & engineering
          from World University of Bangladesh. I am self motivated hard-working
          person. Recently I am doing the web development course from
          programming hero. Now I am well known about html, CSS, Bootstrap,
          Tailwind CSS, Material UI, JavaScript, React.js, Rest API, DOM
          manupolation for front-end development.
        </p>
        <br />
        <p className="text-xl">
          I also try to grab the full stack development. Now I am familiar with
          Node.js, Express.js, MongoDB, Firebase Authentication. I have been
          making myself as a Web developer. I have a dream I want to become a
          Good Web developer in future. I have to become more fashonable about
          Programming. I have extensive knowledge about development tools,
          Excellent problem solving skills and ability to perform well in a
          team.
        </p>
      </div>
    </div>
  );
};

export default About;
