"use client";
import React, { useRef, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "@/components/Logo";

export function HeaderTest() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const menuRef = useRef(null);

  const navigationItems2 = [
    {
      text: "Menu",
      className: "text-base text-stone-900 hover:text-stone-950 font-semibold",
      href: "/restauracja#MenuLink",
    },
    {
      text: "Pokoje",
      className: "text-base text-stone-900 hover:text-stone-950 font-semibold",
      href: "/pokoje",
    },
    {
      text: "Kontakt",
      className: "text-base text-stone-900 hover:text-stone-950 font-semibold",
      href: "/kontakt",
    },
  ];

  const navigationItems1 = [
    {
      text: "Wesela",
      className: "text-base text-stone-900 hover:text-stone-950 font-semibold",
      href: "/wesela",
    },
    {
      text: "Klub",
      className: "text-base text-stone-900 hover:text-stone-950 font-semibold",
      href: "/klub",
    },
    {
      text: "Restauracja",
      className: "text-base text-stone-900 hover:text-stone-950 font-semibold",
      href: "/restauracja",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuHidden((prev) => !prev);
  };

  useEffect(() => {
    // Add event listeners
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    backdrop.forEach((item) =>
      item.addEventListener("click", handleMenuToggle)
    );

    // Clean up event listeners on component unmount
    return () => {
      backdrop.forEach((item) =>
        item.removeEventListener("click", handleMenuToggle)
      );
    };
  }, []);

  return (
    <div className="font-josefin">
      <nav className="relative px-4 py-4 flex justify-between items-center align-items-center bg-white lg:mt-12 lg:mb-12">
        <div className="lg:hidden m-2">
          <Logo />
        </div>
        <div className="lg:hidden">
          <button
            className="flex items-center text-customBlue p-3"
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu size={30} />
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 gap-4`}
        >
          {navigationItems1.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <a className={item.className} href={item.href}>
                  {item.text}
                </a>
              </li>
            </React.Fragment>
          ))}
          <Logo />
          {navigationItems2.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <a className={item.className} href={item.href}>
                  {item.text}
                </a>
              </li>
            </React.Fragment>
          ))}
        </ul>
      </nav>

      <div
        className={`navbar-menu relative z-50 ${
          isMenuHidden
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-50"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex mb-8">
            <button className="navbar-close" onClick={handleMenuToggle}>
              <AiOutlineClose size={30} />
            </button>
          </div>
          <div>
            <ul>
              {navigationItems1.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-base font-semibold text-gray-400 hover:bg-cyan-50 hover:text-cyan-600 rounded"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </li>
                </React.Fragment>
              ))}
              {navigationItems2.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="mb-1">
                    <a
                      className="block p-4 text-base font-semibold text-gray-400 hover:bg-cyan-50 hover:text-cyan-600 rounded"
                      href={item.href}
                    >
                      {item.text}
                    </a>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderTest;
