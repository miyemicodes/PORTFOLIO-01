import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaMediumM } from "react-icons/fa";

function Socials() {
  return (
    <div className="port-Socials">
      <ul className="flex gap-3 text-slate-400">
        <li className="text-2xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-112 hover:text-slate-200 duration-300">
          <a href="https://github.com/miyemicodes">
            <FaGithub />
          </a>
        </li>

        <li className="text-2xl transition ease-in-out delay-180 hover:-translate-y-1 hover:scale-112 hover:text-slate-200 duration-300">
          <a href="https://www.instagram.com/oritsemiyemi?igsh=OHA0djU2NDczZXZv">
            <FaInstagram />
          </a>
        </li>

        <li className="text-2xl transition ease-in-out delay-200 hover:-translate-y-1 hover:scale-112 hover:text-slate-200 duration-300">
          <a href="https://x.com/Elizabe85838502?t=zXG_nKWUzPrbMBV2G0nddw&s=35">
            <FaXTwitter />
          </a>
        </li>

        <li className="text-2xl transition ease-in-out delay-220 hover:-translate-y-1 hover:scale-112 hover:text-slate-200 duration-300">
          <a href="https://www.linkedin.com/in/elizabeth-godfrey-180a11199?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
            <FaLinkedin />
          </a>
        </li>

        <li className="text-2xl transition ease-in-out delay-250 hover:-translate-y-1 hover:scale-112 hover:text-slate-200 duration-300">
          <a href="https://github.com/miyemicodes">
            <FaMediumM />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Socials;
