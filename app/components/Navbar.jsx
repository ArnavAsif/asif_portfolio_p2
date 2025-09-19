import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false);
  const sidebarRef = useRef();
  const openMenu = () => {
    sidebarRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sidebarRef.current.style.transform = "translateX(16rem)";
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const navLinks = [
    { name: "Home", path: "#top" },
    { name: "About", path: "#about" },
    { name: "Services", path: "#services" },
    { name: "Work", path: "#work" },
    { name: "Contact", path: "#contact" },
  ];
  return (
    <div>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
        <Image
          src={assets.header_bg_color}
          alt="header-bg"
          className="w-full "
        />
      </div>
      <nav
        className={`w-full fixed px-5 mx-auto lg:px-8 xl:px-[8%] py-4 flex justify-between items-center z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm " : ""
        }`}
      >
        <a href="#top" className="text-3xl mr-14">
          ASIF<span className="text-cyan-500">.</span>
        </a>
        <div
          className={`hidden lg:flex items-center text-sm lg:text-base gap-6 lg:gap-8 rounded-full px-12 py-3 font-ovo  ${
            isScroll ? "" : "bg-white/50 shadow-sm"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index}>
              <button className={`cursor-pointer`}>{link.name}</button>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} alt="moon" className="w-6" />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4"
          >
            <span>Contact</span>
            <Image src={assets.arrow_icon} alt="arrow" className="w-3" />
          </a>

          <button onClick={openMenu} className="block lg:hidden ml-3">
            <Image src={assets.menu_black} alt="menu" className="w-6" />
          </button>
        </div>
        {/* mobile nav */}
        <ul
          ref={sidebarRef}
          className="font-ovo flex lg:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500"
        >
          <div className="absolute right-6 top-6">
            <Image
              src={assets.close_black}
              alt="close"
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>
          <li>
            <a onClick={closeMenu} href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#about">
              About Me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
