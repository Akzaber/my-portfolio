import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b from-stone-700 via-stone-700 to-black p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h1 className="text-4xl text-white hover:text-red-600 font-bold inline border-b-4 duration-700 hover:border-white border-red-600">
            Contact
          </h1>
          <p className="py-2 text-xl">
            Submit the form below to get in touch with me
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/6668e713-9131-4041-80bd-970f4f3bbc1c"
            className="flex flex-col gap-4 w-full md:w-1/2"
            method="POST"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              required
            ></textarea>

            <button className="w-fit hover:scale-105 my-2 px-6 py-3 hover:text-red-600 bg-gradient-to-r from-red-600 hover:from-white to-red-700 hover:to-white flex font-semibold justify-center duration-300 rounded items-center hover:cursor-pointer">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
