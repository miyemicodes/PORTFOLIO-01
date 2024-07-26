import React, { useRef } from "react";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

const Getintouch = () => {
  const form = useRef();

  const ClickBtn = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vn4m2wy",
        "template_nby1zxi",
        form.current,
        "odqxMzShT4Kn9gyjf"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
          console.log(error.text);
        }
      );
  };

  return (
    <div className="py-12">
      <h2 className="text-4xl py-6 font-bold tracking-wide text-cyan-200">
        Get in Touch
      </h2>
      <form className="flex flex-row w-full" ref={form} onSubmit={ClickBtn}>
        <input
          type="email"
          name="user_email"
          placeholder="Your email Address"
          className="px-4 py-2 w-58 w-[70%] outline-none"
        />
        <button
          className="bg-slate-600 text-white px-5  text-base font-bold hover:border-white"
          type="submit"
          value="Send"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Getintouch;
