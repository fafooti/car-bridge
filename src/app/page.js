import About from "@/modules/Landing/About";
import Features from "@/modules/Landing/Features";
import GetInTouch from "@/modules/Landing/GetInTouch";
import Hero from "@/modules/Landing/Hero";
import SwapSection from "@/modules/Landing/SwapSection";

export default function Home() {
  return (
    <div className="relative flex flex-col w-screen bg-backgroundWhite -z-20">
      <Hero />
      <Features />
      <SwapSection />
      <About/>
      <GetInTouch/>
    </div>
  );
}
