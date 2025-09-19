import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <a href="#top" className="text-3xl mx-auto mb-2">
          ASIF<span className="text-cyan-500">.</span>
        </a>
        <div className="flex items-center w-max gap-2 mx-auto">
          <Image src={assets.mail_icon} alt="icon" className="w-6" />
          <span>ifas092@gmail.com</span>
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Arnav Asif. All Rights Reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/arnavasif">
              Github
            </a>
          </li>
          <li>
            <a target="_blank" href="https://web.facebook.com/arnav.asif.7">
              Facebook
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/arnav-asif-a74894259/"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
