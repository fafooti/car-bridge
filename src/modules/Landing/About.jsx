import React from "react";

function About() {
  return (
    <div className="relative md:justify-around flex-col items-center justify-start text-left flex w-screen h-fit -z-10 mb-10">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url("/images/about-bg.jpg")' }}
      ></div>

      {/* Dark overlay to darken the image */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content overlay */}
      <div className="relative z-10 bg-opacity-50 pr-64 pt-10">
        <p className="text-white text-left text-4xl font-bold">
          About Cabridge
        </p>
      </div>
      <div className="relative z-10  max-w-[558px] w-fit bg-opacity-50 p-10">
        <p className="text-white leading-6 text-xl font-medium text-left">
          Cabridge is a platform designed to simplify the process of converting
          carbon credits into tradable tokens, empowering users to actively
          participate in the carbon market. By offering a seamless and secure
          bridge between traditional carbon credits and the
          blockchain, Cabridge enables individuals and businesses to tokenize
          their environmental efforts and trade them in a transparent and
          efficient marketplace, fostering a more sustainable future
        </p>
      </div>
    </div>
  );
}

export default About;
