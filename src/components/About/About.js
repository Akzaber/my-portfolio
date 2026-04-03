import React from "react";

const About = () => {
  const about = `
    Hello, I am Zaber, a passionate Web Developer from Bangladesh. My journey began with simple curiosity about how websites are made, and over time, that curiosity turned into a dedication to learning and creating. I completed my B.Sc. in Computer Science & Engineering from the World University of Bangladesh, and since then, I have been focused on mastering front-end development, including HTML, CSS, Bootstrap, Tailwind CSS, Material UI, JavaScript, React.js, REST APIs, and DOM manipulation.

    As I built more projects, I realized that understanding the full picture mattered, so I started exploring full-stack development, learning Node.js, Express.js, MongoDB, and Firebase Authentication. Each project taught me something new—not just about code, but about problem-solving, creativity, and building solutions that truly work for users.

    I am a self-motivated and hard-working developer, always looking for opportunities to improve, experiment, and grow. My goal is to become a skilled and innovative web developer, creating applications that are not only functional but also engaging and user-friendly. Every line of code I write is a step toward that goal, and every project is a chance to learn, push my limits, and turn ideas into reality.
  `
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
          {about}
        </p>
      </div>
    </div>
  );
};

export default About;
