import React from "react";
import { Iheadingprops } from "@/@Types/comman";

export default function Heading({ bgheading, heading }: Iheadingprops) {
  return (
    <div>
      <div className="py-10">
        <h3 className="lg:text-9xl text-4xl absolute opacity-5 pt-10  font-extrabold text-custompurple03">
          {bgheading}
        </h3>

        <h4 className="relative pt-20 lg:text-sm text-xs font-bold text-custompurple02">
          {heading}
        </h4>
        <h4 className="lg:text-2xl text-xl font-bold">{heading}</h4>
      </div>
    </div>
  );
}
