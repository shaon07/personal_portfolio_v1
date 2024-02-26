import { MacbookScroll } from "@/components/ui/macbook-scroll";
import React from "react";
import { useScroll, useTransform } from "framer-motion";
import { GoogleGeminiEffectDemo } from "@/components/sub/GeminiEffect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { CardHoverEffectDemo } from "@/components/sub/CardHoverEffect";
import { TextGenerateEffectDemo } from "@/components/sub/TextGenerateEffect";

export default function About() {
  return (
    <div>
      <MacbookScroll src="/github-screen.png" />
      <GoogleGeminiEffectDemo />
      <div className="mt-16">
        <TextGenerateEffectDemo />
        <CardHoverEffectDemo />
      </div>
    </div>
  );
}
