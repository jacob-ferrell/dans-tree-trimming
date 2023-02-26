import { useState } from "react";

const ContactForm = (props) => {
  const {setMessage, success, setSuccess} = props;

  async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const res = await fetch(
      "https://formsubmit.co/ajax/a46892e5c8e5826148eac34ea69d79e6",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(e.target))),
      }
    );
    const data = await res.json();
    if (data.success != "true") {
      setMessage("Your message failed to send.  Please try again shortly.");
      return setSuccess(false);
    }
    setMessage(
      "Your message has been received.  We will reach out to you shortly through the contact information you have provided."
    );
    setSuccess(true);
    form.reset();
  }
  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* Honeypot */}
        <input type="text" name="_honey" style={{ display: "none" }} />

        {/* Disable Captcha */}
        <input type="hidden" name="_captcha" value="false" />

        <div className="form-group">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Your Name"
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Your Email"
          />
        </div>
        <div className="form-group">
          <input
            name="subject"
            type="text"
            className="form-control"
            placeholder="Subject"
          />
        </div>
        <div className="form-group">
          <textarea
            name="message"
            className="form-control"
            placeholder="Your Message"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">
          {success == false ? "Try Again" : "Submit"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
