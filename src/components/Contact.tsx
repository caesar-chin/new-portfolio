import React from "react";
import nodemailer from "nodemailer";

export default function Contact() {
  function sendEmail(e) {
    console.log(e);
  }

  return (
    <div>
      <div className="text-4xl my-7">
        Contact me if you have any questions or want to collaborate on a
        project!
      </div>
      <form className="flex flex-col">
        <label className="mt-4 mb-2 flex flex-row font-murecho">
          Your Name<p className="text-red">*</p>
        </label>
        <input
          className="dark:bg-darkish-cyan bg-white text-white text-3xl border-b-half border-faded-grey mb-4"
          type="text"
          name="name"
          required
          placeholder="John Doe"
        />
        <label className="mt-4 mb-2 flex flex-row font-murecho">
          Your Email<p className="text-red">*</p>
        </label>
        <input
          className="dark:bg-darkish-cyan bg-white text-white text-3xl border-b-half border-faded-grey mb-4"
          type="text"
          name="email"
          required
          placeholder="johndoe@gmail.com"
        />
        <label className="mt-4 mb-2  flex flex-row font-murecho">
          Message<p className="text-red">*</p>
        </label>
        <textarea
          className="dark:bg-darkish-cyan bg-white text-white text-3xl border-b-half border-faded-grey mb-4"
          name="email"
          required
          placeholder="Hi! I'm interested in working with you on a project."
        />
        <button
          className="mt-4 text-3xl w-28 text-center rounded-full leading-10 border-[2px] border-sea-foam-green hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red"
          type="button"
        >
          Send
        </button>
      </form>
    </div>
  );
}
