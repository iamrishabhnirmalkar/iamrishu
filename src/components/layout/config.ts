import { IPageRoute } from "@/@Types/Routes";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaBloggerB,
} from "react-icons/fa";

export const navpageRoute: IPageRoute[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
    size: 25,
  },
  {
    name: "About",
    href: "/about",
    icon: FaUser,
    size: 25,
  },
  {
    name: "Project",
    href: "/project",
    icon: FaBriefcase,
    size: 25,
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: FaBloggerB,
    size: 25,
  },
  {
    name: "Contact",
    href: "/contact",
    icon: FaEnvelope,
    size: 25,
  },
];
