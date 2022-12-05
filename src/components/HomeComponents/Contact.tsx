import React from "react";

export default function Contact() {
  const [success, setSuccess] = React.useState(false);
  const [button, setButton] = React.useState(false);

  function test() {
    alert("test");
  }

  const sendEmail = async (e: any) => {
    e.preventDefault();

    await fetch(`${import.meta.env.PUBLIC_API_URL}/send_email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.success === true) {
          setButton(true);
          setSuccess(true);
        } else {
          setButton(true);
          setSuccess(false);
        }
      })
      .catch((err) => {
        setButton(true);
        setSuccess(false);
      });
  };

  return (
    <div>
      <div className="text-4xl my-7">
        Contact me if you have any questions or want to collaborate on a
        project!
      </div>
      <form className="flex flex-col" onSubmit={sendEmail}>
        <label className="mt-4 mb-2 flex flex-row font-murecho">
          Your Name<p className="text-red">*</p>
        </label>
        <input
          className="dark:bg-darkish-cyan bg-white text:black dark:text-white text-3xl border-b-half border-faded-grey mb-4"
          type="text"
          name="name"
          required
          placeholder="John Doe"
        />
        <label className="mt-4 mb-2 flex flex-row font-murecho">
          Your Email<p className="text-red">*</p>
        </label>
        <input
          className="dark:bg-darkish-cyan bg-white text:black dark:text-white text-3xl border-b-half border-faded-grey mb-4"
          type="email"
          name="email"
          required
          placeholder="johndoe@gmail.com"
        />
        <label className="mt-4 mb-2  flex flex-row font-murecho">
          Message<p className="text-red">*</p>
        </label>
        <textarea
          className="dark:bg-darkish-cyan bg-white text:black dark:text-white text-3xl border-b-half border-faded-grey mb-4"
          name="message"
          required
          placeholder="Hi! I'm interested in working with you on a project."
        />
        <button
          className="mt-4 text-2xl w-28 text-center rounded-full leading-10 border-[2px] border-sea-foam-green hover:bg-sea-foam-green dark:border-dark-grayish-red dark:hover:bg-dark-grayish-red"
          type="submit"
        >
          Send
        </button>
        {button ? (
          success && button ? (
            <div className="mt-4 text-xl text-actual-green">
              Email has been sent!
            </div>
          ) : (
            <div className="mt-4 text-xl text-actual-red">
              There has been an error
            </div>
          )
        ) : (
          ""
        )}
      </form>
    </div>
  );
}
