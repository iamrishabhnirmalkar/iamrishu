import React from "react";
import Image from "next/image";
import { IBoxprops } from "@/@Types/comman";
import { FaArrowRight } from "react-icons/fa6";

export default function SkillsBox({ heading, description, images }: IBoxprops) {
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="w-full h-full rounded glassmorphism px-3 py-5 ">
          <div className="flex justify-between item-center pb-6 ">
            <Image
              src={images}
              width={50}
              height={10}
              className="rounded-full glow-icon"
              alt="image"
            />

            <FaArrowRight className="glow-icon" size={25} />
          </div>
          <div className="flex flex-col space-y-2">
            <h4 className="text-xl text-custompurple02 font-bold">{heading}</h4>
            <p className="text-justify">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
