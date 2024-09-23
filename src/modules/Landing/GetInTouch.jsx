import React from "react";
import twitter from "/public/icons/twitter.svg";
import facebook from "/public/icons/facebook.svg";
import instagram from "/public/icons/instagram.svg";
import youtube from "/public/icons/youtube.svg";
import Image from "next/image";
function GetInTouch() {
  return (
    <div className="w-full flex flex-col justify-center items-center py-10">
      <p className="text-primaryGreen font-bold text-2xl">
        Get In Touch With Us
      </p>
      <div className="flex md:flex-row flex-col gap-4 items-center justify-center ">
        <div className="border border-1 p-2.5 rounded-lg border-secondaryGreen">
          <Image src={instagram} width={16} height={16} alt="instagram" />
        </div>
        <div className="border p-2.5 rounded-lg border-secondaryGreen">
          <Image src={youtube} width={16} height={16} alt="instagram" />
        </div>
        <div className="border p-2.5 rounded-lg border-secondaryGreen">
          <Image src={twitter} width={16} height={16} alt="instagram" />
        </div>
        <div className="border p-2.5 rounded-lg border-secondaryGreen">
          <Image src={facebook} width={16} height={16} alt="instagram" />
        </div>
      </div>
    </div>
  );
}

export default GetInTouch;
