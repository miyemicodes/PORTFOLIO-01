import React from "react";

function Nav() {
  return (
    <div className="port-Nav hidden lg:block">
      <nav className="text-slate-300 text-xl flex flex-col gap-2">
        <a
          href="#about"
          className="transition ease-in-out delay-150 hover:scale-112 hover:text-slate-200 hover:translate-x-6 duration-300"
        >
          About
        </a>
        <a
          href="#experience"
          className="transition ease-in-out delay-150 hover:scale-112 hover:text-slate-200 hover:translate-x-6 duration-300"
        >
          Experience
        </a>
        <a
          href="#skill"
          className="transition ease-in-out delay-150 hover:scale-112 hover:text-slate-200 hover:translate-x-6 duration-300"
        >
          Skill
        </a>
        <a
          href="#education"
          className="transition ease-in-out delay-150 hover:scale-112 hover:text-slate-200 hover:translate-x-6 duration-300"
        >
          Education
        </a>
        <a
          href="#project"
          className="transition ease-in-out delay-150 hover:scale-112 hover:text-slate-200 hover:translate-x-6 duration-300"
        >
          Project
        </a>
      </nav>
    </div>
  );
}

export default Nav;
