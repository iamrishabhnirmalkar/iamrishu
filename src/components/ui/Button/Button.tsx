import React from "react";
import { IButtonType } from "@/@Types/Button";

export default function Button({ buttonText, onClick }: IButtonType) {
  return (
    <div>
      <button
        className="border-t-2 border-r-2 border-custompurple03 p-2"
        onClick={onClick}
      >
        <p className="font-bold hover:text-xl">{buttonText}</p>
      </button>
    </div>
  );
}
