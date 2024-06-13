import { IPageRoute } from "@/@Types/Routes";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaEnvelope,
  FaBloggerB,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaGithub,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

export const navpageRoute: IPageRoute[] = [
  {
    name: "Home",
    href: "/",
    icon: FaHome,
    size: 20,
    hoverColor:
      "transition-transform duration-300 hover:text-custompurple02  ease-in-out transform hover:scale-125 cursor-pointer",
  },
  {
    name: "About",
    href: "/about",
    icon: FaUser,
    size: 20,
    hoverColor:
      "transition-transform duration-300 hover:text-custompurple02  ease-in-out transform hover:scale-125 cursor-pointer",
  },
  {
    name: "Project",
    href: "/project",
    icon: FaBriefcase,
    size: 20,
    hoverColor:
      "transition-transform duration-300 hover:text-custompurple02  ease-in-out transform hover:scale-125 cursor-pointer",
  },
  {
    name: "Blogs",
    href: "/blogs",
    icon: FaBloggerB,
    size: 20,
    hoverColor:
      "transition-transform duration-300 hover:text-custompurple02  ease-in-out transform hover:scale-125 cursor-pointer",
  },
  {
    name: "Contact",
    href: "/contact",
    icon: FaEnvelope,
    size: 20,
    hoverColor:
      "transition-transform duration-300 hover:text-custompurple02  ease-in-out transform hover:scale-125 cursor-pointer",
  },
];

export const footerIcons: IPageRoute[] = [
  {
    name: "Facebook",
    icon: FaFacebookF,
    href: "",
    size: 25,
    hoverColor:
      "transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer hover:text-blue-500",
  },
  {
    name: "Instagram",
    icon: FaInstagram,
    href: "",
    size: 25,
    hoverColor:
      "transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer hover:text-[#bc2a8d]",
  },
  {
    name: "Twitter",
    icon: FaXTwitter,
    href: "",
    size: 25,
    hoverColor:
      "transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer hover:text-gray-500",
  },
  {
    name: "Youtube",
    icon: FaYoutube,
    href: "",
    size: 25,
    hoverColor:
      "transition-transform duration-300 ease-in-out transform hover:scale-90 cursor-pointer hover:text-red-600",
  },
  {
    name: "Github",
    icon: FaGithub,
    href: "",
    size: 25,
    hoverColor:
      "transition-transform duration-300 ease-in-out transform hover:scale-90 hover:text-purple-700 cursor-pointer",
  },
];
