import Image from "next/image";
import React from "react";
import Img01 from "/public/images/01.png";

export default function HeroSection() {
  return (
    <section className="flex justify-center items-center ">
      <div className="flex flex-col justify-end items-end">
        <p className="text-5xl font-bold text-end opacity-5">My</p>
        <p className="text-5xl font-bold  text-end opacity-10">Name</p>
        <p className="text-5xl font-bold  text-end opacity-15">is</p>
        <p className="text-5xl font-bold  text-end">Rishabh</p>
      </div>
      <div className="flex justify-center items-center">
        <Image src={Img01} width={100} height={100} alt="Picture of me" />
      </div>
    </section>
  );
}
