import Button from "@/app/components/Button/Button";
import React from "react";

function Hero() {
  return (
    <div
      className="flex flex-col text-center justify-center items-center w-screen h-screen bg-cover -z-10 pb-56 mb-10"
      style={{ backgroundImage: 'url("/images/hero-bg.svg")' }}
    >
      <h1 className="text-white leading-78 text-64">Bridge</h1>
      <p className="text-white leading-78 text-64">
        {" "}
        the gap to a greener future
      </p>
      <Button className={`px-16 py-2 mt-6`} variant={"primary"}>
        Lets Bridge
      </Button>
    </div>
  );
}

export default Hero;
