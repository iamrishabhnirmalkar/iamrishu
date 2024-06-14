import React from "react";
import { Iinputprops } from "@/@Types/comman";

export default function Textarea({
  id,
  label,
  className,
  onChange,
}: Iinputprops) {
  return (
    <>
      <div>
        <label
          htmlFor={id}
          className="text-custompurple02 block capitalize text-sm font-bold mb-2 mx-1 "
        >
          {label}
        </label>
        <textarea
          name={id}
          id={id}
          className={`focus:outline-none focus:shadow-outline py-2 px-3 w-full inputglasseffect resize-none	 ${className}`}
          onChange={onChange}
        ></textarea>
      </div>
    </>
  );
}
