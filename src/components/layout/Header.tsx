import React from "react";
import { navpageRoute } from "./config";
import MobNav from "./MobNav";

export default function Header() {
  return (
    <>
      {/* Navlink for desktop */}
      <nav className="hidden lg:block py-4">
        <header className="flex justify-center items-center  ">
          <ul className="flex px-10 py-3 rounded space-x-10 bg-customblack border-r-4  border-b-2 border-custompurple02">
            {navpageRoute.map((route) => (
              <li
                className="uppercase text-xl hover:px-2 rounded hover:bg-custompurple02 transition-all duration-300"
                key={route.id}
              >
                <a href={route.href}>{route.name}</a>
              </li>
            ))}
          </ul>
        </header>
      </nav>
      <MobNav />
    </>
  );
}
