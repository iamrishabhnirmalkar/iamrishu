import Heading from "@/components/ui/Heading/Heading";
import SkillsBox from "@/components/ui/SkillsBox/SkillsBox";
import React from "react";
import { Skillsinfo } from "@/components/template/config";

export default function SkillSection() {
  return (
    <>
      <section className="lg:px-10 px-3">
        <Heading bgheading="Skills" heading="Skills" />
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 row-span-2">
          {Skillsinfo.map((info, index) => (
            <SkillsBox
              key={index}
              heading={info.heading}
              description={info.description}
              images={info.images}
            />
          ))}
        </div>
      </section>
    </>
  );
}
