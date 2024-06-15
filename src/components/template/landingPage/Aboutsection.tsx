import React from "react";
import Heading from "@/components/ui/Heading/Heading";
import Resume from "@/components/ui/Resume/Resume";

export default function Aboutsection() {
  return (
    <section className="lg:px-10 px-3">
      <Heading bgheading="About" heading="About" />
      <div className="glassmorphism w-full py-10 px-3 ">
        <p className="text-justify pb-4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum
          quam est nostrum illo nam, ratione quae quibusdam non iusto
          repellendus perferendis architecto dolores officia ullam eveniet ipsum
          sit similique ipsa! Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Aliquam pariatur incidunt quasi nihil et dolores
          repellat voluptatum, aperiam fugiat modi explicabo aliquid, tenetur
          ratione doloremque temporibus eveniet voluptas labore vero.
        </p>
        <Resume />
      </div>
    </section>
  );
}
