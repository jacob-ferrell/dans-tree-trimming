import "../styles/Contact.css";
import ContactForm from "./ContactForm";
import { useState } from "react";

const Contact = (props) => {
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(null);

  return (
    <div className="content contact container-fluid" id="contact">
      {message ? (
        <p className={success ? "text-success" : "text-danger"}>{message}</p>
      ) : null}

      <h2 className="text-center">Contact Us</h2>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <ContactForm
            success={success}
            setSuccess={(success) => setSuccess(success)}
            setMessage={(message) => setMessage(message)}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
