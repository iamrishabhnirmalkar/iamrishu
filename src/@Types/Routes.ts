import { IconType } from "react-icons";

export interface IPageRoute {
  name: string;
  href: string;
  icon: IconType;
  size: number;
  hoverColor?: string;
}
