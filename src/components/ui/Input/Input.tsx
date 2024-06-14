import React from "react";
import { Iinputprops } from "@/@Types/comman";

export default function Input({
  id,
  label,
  type,
  className,
  onChange,
  value,
}: Iinputprops) {
  return (
    <>
      <div className="py-2">
        <label
          htmlFor={id}
          className="text-custompurple02 block capitalize text-sm font-bold mb-2 mx-1 "
        >
          {label}
        </label>
        <input
          id={id}
          type={type}
          className={`focus:outline-none focus:shadow-outline py-2 px-3 w-full inputglasseffect ${className}`}
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
}
