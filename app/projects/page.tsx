import { HeroParallaxDemo } from "@/components/sub/HeroParallaxSkills";
import { LampDemo } from "@/components/ui/lamp";
import React from "react";
import ProjectCard from "@/components/main/Projects";

export default function Projects() {
  return (
    <div className="relative bottom-16  z-[998]">
      <HeroParallaxDemo />
      <LampDemo />
      <ProjectCard />
    </div>
  );
}
