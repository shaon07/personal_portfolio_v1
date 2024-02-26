import { MacbookScroll } from "@/components/ui/macbook-scroll";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffectDemo } from "@/components/sub/GeminiEffect";

export default function About() {


  return (
    <div>
      <MacbookScroll
        src="/github-screen.png"
      />
      <GoogleGeminiEffectDemo />
    </div>
  );
}
