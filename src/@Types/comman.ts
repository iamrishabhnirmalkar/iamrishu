import { StaticImageData } from "next/image";
import { ChangeEventHandler } from "react";

export interface Iheadingprops {
  bgheading: string;
  heading: string;
}

export interface IBoxprops {
  heading: string;
  description: string;
  images: StaticImageData;
}

export interface Iinputprops {
  id: string;
  label: string;
  type?: "text" | "password" | "email";
  className?: string;
  onChange?: ChangeEventHandler;
  value?: string;
}
