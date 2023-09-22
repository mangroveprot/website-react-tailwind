import React from "react";
import Typed from "react-typed";

const hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="text-[#00df90] font-bold p-2">PROGRAMMING</h1>
        <p className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          The only way to do great work is to love what you do mean.
        </p>
        <div className="flex justify-center">
          <p className="md:text-5x sm:text-4xl text-xl font-bold mt-2">
            Cycle of daily life
          </p>
          <Typed
            className="md:text-5x sm:text-4xl text-xl font-bold mt-2 md:pl-4 pl-2 text-[#00df90]"
            strings={["-Eat;", "-Code;", "-Debug;", "-Sleep"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          ></Typed>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600">
          "Life's journey: Code to innovate, rest to rejuvenate, continue to
          thrive."
        </p>
      </div>
    </div>
  );
};

export default hero;
