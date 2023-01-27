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
        <div>
          <h1 className="text-5xl">Blogs are comming soon....</h1>
        </div>
      </div>
    </div>
  );
};

export default Blog;
