import React from "react";

const Contacts = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b from-black via-black to-stone-700 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-red-600">
            Contact
          </h1>
          <p className="py-6">Submit the form below to get in touch with me</p>
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

            <button className="text-white bg-gradient-to-b from-red-600 to-red-700 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
