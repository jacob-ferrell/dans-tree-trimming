import { useState } from "react";

const ContactForm = (props) => {
  const {setMessage, success, setSuccess} = props;

  async function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.elements.name.value;
    const message = form.elements.message.value;
    const subject = form.elements.subject.value;
    const email = form.elements.email.value;
    const res = await fetch(
      "https://formsubmit.co/ajax/boomkablamo@gmail.com",
      {
        method: "POST",
        header: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          message,
          subject,
          email,
        }),
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
