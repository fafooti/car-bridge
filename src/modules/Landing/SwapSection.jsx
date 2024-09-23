import Button from "@/app/components/Button/Button";
import React from "react";
import Image from "next/image";
import repeat from "/public/images/repeat.svg";
function SwapSection() {
  return (
    <div className="bg-white z-10 relative md:gap-0 gap-10 w-full px-10 md:px-0 py-8 justify-center flex-col items-center flex md:flex-row">
      {/* right side */}
      <div className="md:w-1/2 md:pr-36 w-full flex">
        <div className="flex items-center flex-col justify-start">
          <p className="text-primaryGreen text-2xl mb-6">Let's Swap</p>
          <p className="text-xl text-textBlack-10 mb-16 font-medium">
            Cabridge is a platform designed to simplify the process of
            converting carbon credits into tradable tokens, empowering users to
            actively participate in the carbon market.{" "}
          </p>
          <Button variant={"primary"} className={"w-full py-2"}>
            Swap her
          </Button>
        </div>
      </div>
      <div className="md:pl-64">
        <Image width={301} height={276} src={repeat} />
      </div>
    </div>
  );
}

export default SwapSection;
