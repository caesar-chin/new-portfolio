import React from "react";
// import nodemailer from "nodemailer";

export default function Contact() {
  const [success, setSuccess] = React.useState(false);
  const [button, setButton] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  function test() {
    alert("test");
  }

  // const sendEmail = () => {
  //   setButton(true);
  //   var transporter = nodemailer.createTransport({
  //     service: "gmail",
  //     auth: {
  //       user: import.meta.env.EMAIL_USER,
  //       pass: import.meta.env.EMAIL_PASS,
  //     },
  //   });

  //   let mailOptions = {
  //     from: email,
  //     to: "caesarc.1628@gmail.com",
  //     subject: `Message from ${name} via caesarchin.com`,
  //     html: message,
  //   };

  //   transporter.sendMail(mailOptions, (error: any, info: any) => {
  //     if (error) {
  //       console.log(error);
  //       setSuccess(false);
  //     } else {
  //       console.log("Email sent: " + info.response);
  //       setSuccess(true);
  //     }
  //   });
  // };

  function changeEmail(e: any) {
    setEmail(e.target.value);
  }

  function changeName(e: any) {
    setName(e.target.value);
  }

  function changeMessage(e: any) {
    console.log(e.target.value);
    setMessage(e.target.value);
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
          className="dark:bg-darkish-cyan bg-white text:black dark:text-white text-3xl border-b-half border-faded-grey mb-4"
          type="text"
          name="name"
          required
          value={name}
          onChange={changeName}
          placeholder="John Doe"
        />
        <label className="mt-4 mb-2 flex flex-row font-murecho">
          Your Email<p className="text-red">*</p>
        </label>
        <input
          className="dark:bg-darkish-cyan bg-white text:black dark:text-white text-3xl border-b-half border-faded-grey mb-4"
          type="text"
          name="email"
          required
          value={email}
          onChange={changeEmail}
          placeholder="johndoe@gmail.com"
        />
        <label className="mt-4 mb-2  flex flex-row font-murecho">
          Message<p className="text-red">*</p>
        </label>
        <textarea
          className="dark:bg-darkish-cyan bg-white text:black dark:text-white text-3xl border-b-half border-faded-grey mb-4"
          name="message"
          required
          value={message}
          onChange={changeMessage}
          placeholder="Hi! I'm interested in working with you on a project."
        />
      </form>
      <button
        className="mt-4 text-2xl w-28 text-center rounded-full leading-10 border-[2px] border-sea-foam-green hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red"
        onClick={test}
      >
        Send
      </button>
      {button ? (
        success && button ? (
          <div className="mt-4 text-xl">Email has been sent!</div>
        ) : (
          <div className="mt-4 text-xl">There has been an error</div>
        )
      ) : (
        ""
      )}
    </div>
  );
}
