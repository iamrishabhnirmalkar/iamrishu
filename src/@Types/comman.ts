import { StaticImageData } from "next/image";

export interface Iheadingprops {
  bgheading: string;
  heading: string;
}

export interface IBoxprops {
  heading: string;
  description: string;
  images: StaticImageData;
}
