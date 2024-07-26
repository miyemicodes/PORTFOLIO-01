import React from "react";
import Socials from "./socials";
import Nav from "./portfolio-nav";

function Introduction() {
  return (
    <div className="flex flex-col align-center justify-between px-6 py-12 md:px-12 md:py-20">
      <div className="flex flex-col gap-3">
        <h1 className="text-5xl font-bold tracking-wide text-cyan-200">
          Godfrey Elizabeth
        </h1>
        <h2 className="text-xl font-bold text-slate-300">Frontend Developer</h2>
        <p className="text-lg text-slate-400">
          I build Responsive,pixel perfect and highly functional websites.
        </p>
      </div>

      <Nav />

      <Socials />
    </div>
  );
}

export default Introduction;
