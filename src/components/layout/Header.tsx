"use client";
import React, { useState } from "react";
import { navpageRoute } from "./config";
import MobNav from "./MobNav";

export default function Header() {
  return (
    <>
      {/* Navlink for desktop */}
      <nav className="hidden lg:block py-4">
        <header className="flex justify-center items-center">
          <ul className="flex px-10 py-3 rounded-full space-x-20 glassmorphism  ">
            {navpageRoute.map((route, index) => (
              <li className="uppercase text-xl" key={index}>
                <a href={route.href}>
                  <route.icon size={route.size} className={route.hoverColor} />
                  {/* {route.name} */}
                </a>
              </li>
            ))}
          </ul>
        </header>
      </nav>
      <MobNav />
    </>
  );
}
