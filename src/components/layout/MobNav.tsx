"use client";
import React, { useState } from "react";
import { navpageRoute } from "./config";
import { RiMenu2Line } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../ui/Button/Button";

export default function MobNav() {
  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const redirectToWhatsApp = () => {
    window.location.href = "https://alvo.chat/4yox";
  };

  return (
    <>
      {/* Navlink for Tablet and Mobile */}
      <nav className="lg:hidden block py-4 px-3">
        <header className="flex justify-between items-center">
          <div
            className=" bg-custompurple02 p-3 rounded-full relative z-50 cursor-pointer"
            onClick={toggleMobileMenu}
          >
            {mobileMenu ? (
              <AiOutlineClose size={25} />
            ) : (
              <RiMenu2Line size={25} />
            )}
          </div>
          <Button buttonText="Hire me" onClick={redirectToWhatsApp} />
        </header>
        <AnimatePresence>
          {mobileMenu && (
            <motion.div
              className="fixed inset-0 flex justify-center items-center z-40"
              initial={{ clipPath: "circle(30px at 10% 10%)" }}
              animate={{ clipPath: "circle(150% at 50% 50%)" }}
              exit={{ clipPath: "circle(30px at 10% 10%)" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="bg-custompurple02 w-full h-full flex justify-center items-center">
                <ul className="flex-col text-center space-y-2">
                  {navpageRoute.map((route, index) => (
                    <li
                      className="uppercase text-xl hover:px-2 rounded hover:bg-custompurple02 transition-all duration-300"
                      key={index}
                    >
                      <a href={route.href}>{route.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
