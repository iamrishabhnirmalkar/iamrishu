import Heading from "@/components/ui/Heading/Heading";
import SkillsBox from "@/components/ui/SkillsBox/SkillsBox";
import React from "react";

export default function SkillSection() {
  return (
    <>
      <section className="lg:px-10 px-3">
        <Heading bgheading="Skills" heading="Skills" />
        <div className="grid grid-cols-3 gap-4 row-span-2">
          <SkillsBox />
          <SkillsBox />
          <SkillsBox />

          <SkillsBox />
          <SkillsBox />
          <SkillsBox />
        </div>
      </section>
    </>
  );
}
