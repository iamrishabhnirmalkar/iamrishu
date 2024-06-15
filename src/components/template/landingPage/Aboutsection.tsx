import React from "react";
import Heading from "@/components/ui/Heading/Heading";
import Resume from "@/components/ui/Resume/Resume";

export default function Aboutsection() {
  return (
    <section className="lg:px-10 px-3">
      <Heading bgheading="About" heading="About" />
      <div className="glassmorphism w-full py-10 px-3 ">
        <p className="text-justify pb-4">
          I have a strong foundation in frontend technologies. My skills include
          JavaScript, Python, TypeScript, ReactJS, NextJS, Redux, ExpressJS,
          Laravel, SQL, NoSQL, and CMS platforms (WordPress, Wix, Shopify),
          along with tools like Git, Postman, and Figma. I also hold a digital
          marketing certification and one year of experience, allowing me to
          enhance user engagement through integrated marketing strategies. Thank
          you for considering my application. Please find my resume attached.
        </p>
        <Resume />
      </div>
    </section>
  );
}
