import Button from "@/app/components/Button/Button";
import Image from "next/image";
import React from "react";

function FeatureCard({ title, description, icon }) {
  return (
    <div className="bg-white h-[374px] px-6 max-w-[256px] rounded-3xl flex flex-col items-center justify-center pt-16 relative  border">
      <Image src={icon} width={40} height={40} alt="" />
      <p className="text-xl text-center whitespace-nowrap mt-6 mb-2 font-medium text-textBlack-11">
        {title}
      </p>
      <p className="mb-32 text-center text-sm text-black-10">{description}</p>
      <Button className={"p-6 absolute -bottom-8 "} variant={"primary"}>
        1
      </Button>
    </div>
  );
}

export default FeatureCard;
