import React from "react";
import Image from "next/image";
import img from "../../../../public/svg/01.gif";
import { FaArrowRight } from "react-icons/fa6";

export default function SkillsBox() {
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="w-[22rem] rounded border border-blue-800">
          <div className="flex">
            <Image src={img} width={200} height={200} alt="image" />
            <FaArrowRight size={25} />
          </div>
          <h4>Heading</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
            molestias, adipisci amet vitae possimus provident sit tempora quis,
            omnis rem et illo enim eius asperiores nostrum doloribus illum,
            consectetur maiores!
          </p>
        </div>
      </div>
    </>
  );
}
