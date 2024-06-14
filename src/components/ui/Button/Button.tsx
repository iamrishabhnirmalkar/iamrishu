import React from "react";
import "./style.css";
import { IButtonType } from "@/@Types/Button";

export default function Button({ buttonText, onClick, type }: IButtonType) {
  return (
    <button className="button" onClick={onClick} type={type}>
      {buttonText}
    </button>
  );
}
