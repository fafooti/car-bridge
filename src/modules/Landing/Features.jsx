import React from "react";
import FeatureCard from "./FeatureCard";
import coinIcon from "/public/icons/coin-icon.svg";
import awardIcon from "/public/icons/award.svg";
import tradeIcon from "/public/icons/trade-icon.svg";
import bitcoinIcon from "/public/icons/bitcoin-refresh-icon.svg";

const features = [
  {
    title: "Mint Token",
    description: "Connect with wallet, mint an empty Cabridge token.",
    icon: coinIcon,
  },
  {
    title: "Retire carbon certificate",
    description: "Retire your carbon certificate with the minted token.",
    icon: awardIcon,
  },
  {
    title: "Update Cabridge token",
    description:
      "Update your Cabridge token to include certificate information.",
    icon: bitcoinIcon,
  },
  {
    title: "Start trading",
    description:
      "Convert your Cabridge token into other tradable tokens and start trading.",
    icon: tradeIcon,
  },
];

function Features() {
  return (
    <div className="md:flex-row items-center justify-center w-full gap-20 mx-auto flex flex-col md:flex-wrap backdrop-blur-sm bg-transparent pb-20 -mt-20">
      {features.map((item, index) => (
        <FeatureCard
          key={index}
          title={item.title}
          icon={item.icon}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default Features;
