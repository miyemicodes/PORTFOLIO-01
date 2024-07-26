import React from "react";

function Experience({ duration, role, organization, description }) {
  return (
    <div className=" grid p-4 md:grid-cols-3 gap-4 opacity-90 hover:bg-gray-700 hover:border border-gray-500 rounded-tr-3xl">
      <div className="col-span-1 text-slate-300">{duration}</div>

      <div className="col-span-2 ">
        <h2 className="text-base text-slate-300">{role}</h2>

        <div>
          <p className="pb-2 text-slate-400">{organization}</p>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Experience;
