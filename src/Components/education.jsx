import React from "react";

function Education({ Academy, course, period, degree }) {
  return (
    <div>
      <p className="text-xl text-cyan-200">{Academy} </p>
      <p className="text-lg text-slate-300"> {course} </p>
      <p className="text-sm text-slate-200"> {period} </p>
      <p className="text-sm text-slate-200"> {degree} </p>
    </div>
  );
}

export default Education;
