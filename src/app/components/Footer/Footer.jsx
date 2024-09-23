import Image from "next/image";
import React from "react";
import logoIcon from "/public/icons/logo.svg";
import facebookIcon from "/public/icons/footer-facebook.svg";
import instagramIcon from "/public/icons/footer-instagram.svg";
import twitterIcon from "/public/icons/footer-twitter.svg";
import youtubeIcon from "/public/icons/footer-youtube.svg";
import { Input } from "postcss";
import Button from "../Button/Button";
function Footer() {
  return (
    <div
      className="flex flex-col justify-center items-end w-screen h-[500px] bg-cover "
      style={{
        backgroundImage: 'url("/images/hero-bg.svg")',
        backgroundPosition: "center",
      }}
    >
      <div className="flex w-full justify-around lg:flex-row flex-col ">
        {/*first  */}
        <div className="flex flex-col">
          <p className="flex text-white font-medium text-xl gap-2">
            <Image src={logoIcon} width={17} height={17} alt="logo" />
            Cabridge
          </p>
          <p className="text-white text-base mt-5 max-w-[326px]">
            convert your physical carbon credits into tradable tokens, earn
            great income, and join the movement for sustainable carbon
            conservation.
          </p>
          <div className="flex gap-4 mt-10">
            <div className="p-2 bg-white rounded-md border border-1">
              <Image src={instagramIcon} width={16} height={16} />
            </div>
            <div className="p-2 bg-white rounded-md border border-1">
              <Image src={youtubeIcon} width={16} height={16} />
            </div>
            <div className="p-2 bg-white rounded-md border border-1">
              <Image src={twitterIcon} width={16} height={16} />
            </div>
            <div className="p-2 bg-white rounded-md border border-1">
              <Image src={facebookIcon} width={16} height={16} />
            </div>
          </div>
        </div>
        {/* second */}
        <div className="text-white flex justify-around gap-32 flex-wrap">
          <ul className="flex flex-col gap-6">
            <li className="text-base font-bold ">Discover</li>
            <li className="text-sm font-normal">Profile</li>
            <li className="text-sm font-normal">Setting</li>
            <li className="text-sm font-normal">Wallet</li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="text-base font-bold ">Discover</li>
            <li className="text-sm font-normal">Profile</li>
            <li className="text-sm font-normal">Setting</li>
            <li className="text-sm font-normal">Wallet</li>
          </ul>
        </div>
        {/*third */}
        <div className="flex h-fit gap-2 ">
          <input
            className="bg-white rounded-md w-[236px] h-fit focus:outline-none py-1.5 px-3"
            placeholder="Enter Your Email"
            type={"email"}
          />
          <Button variant={"primary"} className={"px-4 py-1"}>
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
