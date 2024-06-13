import React from "react";
import { footerIcons } from "./config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 px-3 ">
      <div className="flex justify-center items-center  ">
        <div className="flex justify-center items-center p-2 glassmorphism lg:space-x-16 space-x-3 ">
          {footerIcons.map((item) => (
            <a href={item.href}>
              <item.icon size={item.size} className={item.hoverColor} />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center ">
        <p className="text-justify text-xs pt-4 ">
          © {currentYear} All rights reserved | Designed and developed by
          Rishabh Nirmalkar
        </p>
      </div>
    </footer>
  );
}
