import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="h-screen w-full bg-gradient-to-b from-stone-700  via-stone-700 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-600">
            About
          </p>
        </div>
        <p className="text-xl mt-10">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
          laudantium sint quisquam voluptatum, iste repudiandae maiores unde
          repellendus non labore voluptas dolore distinctio odit tempore commodi
          necessitatibus culpa accusantium delectus reiciendis eius, quaerat
          quidem ipsum eligendi alias? Eos, eius? Recusandae laudantium labore
          ut perspiciatis, autem explicabo ipsam sapiente ab laboriosam?
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          labore id inventore consequuntur nihil! Laboriosam sapiente
          accusantium cum esse aliquam aliquid distinctio ab odio perferendis,
          placeat eum veniam expedita minus mollitia inventore iusto porro vel,
          quae sint odit ut. Esse dignissimos ea aliquid quam ut, perferendis ex
          expedita nam, corrupti hic veniam vitae reiciendis autem alias
          praesentium! Sint, earum dignissimos?
        </p>
      </div>
    </div>
  );
};

export default About;
