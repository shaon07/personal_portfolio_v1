import { AnimatedPinDemo } from "@/components/sub/AnimatedPinCard";
import React from "react";

export default function GitHub() {
  return (
    <div>
      <h1 className="text-white text-2xl text-center py-16">My GitHub Accounts</h1>
      <div className="flex items-center justify-center gap-0 mb-16">
        <AnimatedPinDemo title="SHaon" link="https://github.com/shaon07" github="https://portfolio-jirihofman.vercel.app/?customUsername=shaon07" />
        <AnimatedPinDemo title="md shamirul islam shaon" link="https://github.com/shaon07softic" github="https://portfolio-jirihofman.vercel.app/?customUsername=shaon07softic" />
      </div>
    </div>
  );
}
