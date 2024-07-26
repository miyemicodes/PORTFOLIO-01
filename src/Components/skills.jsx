import React from "react";

function Skills(props) {
  return (
    <p className="text-slate-400 border border-solid border-slate-700 rounded-lg px-5 py-2 hover:shadow-lg hover:bg-slate-300 hover:text-slate-700">
      {props.expertise}
    </p>
  );
}

export default Skills;
