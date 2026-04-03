import React from "react";

const Blog = () => {
  return (
    <div
      name="blog"
      className="md:h-screen w-full bg-gradient-to-b from-black  via-black to-stone-700 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl text-white hover:text-red-600 font-bold inline border-b-4 duration-700 hover:border-white border-red-600">
            Blog
          </p>
        </div>
        <div className="text-white text-justify">
          <h1 className="text-4xl font-bold mb-6">Why I Chose React.js for Modern Web Applications</h1>
          <p className="text-xl mb-6">
            <span>React.js has become my go-to library for building modern, responsive, and interactive web apps. What I love about React is its component-based architecture, which allows me to reuse code and organize projects efficiently.</span>
          <br></br>
          <br></br>
            <span>With React, I can manage application state effectively and build projects that are fast and scalable. Integrating APIs and Firebase with React also makes it easier to create real-world applications, like user authentication systems, dynamic dashboards, and interactive forms.</span>
          <br></br>
          <br></br>
          <span>React has made my learning journey exciting, and I believe mastering it is a key step toward becoming a skilled full-stack developer.</span>
            </p>
          <h1 className="text-4xl font-bold mb-6">Top 5 Tools Every Web Developer Should Know</h1>
          <ul className="list-decimal">
            <li><span className="font-bold">VS Code</span> – My main code editor for writing HTML, CSS, JavaScript, and React.</li>
            <br></br>
            <li><span className="font-bold">Git & GitHub</span> – For version control and collaboration on projects</li>
            <br></br>
            <li><span className="font-bold">Chrome DevTools</span> – To debug, test, and optimize websites quickly.</li>
            <br></br>
            <li><span className="font-bold">Figma</span> – For designing layouts and prototypes before coding.</li>
            <br></br>
            <li><span className="font-bold">Firebase</span> – For authentication, database management, and hosting.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
