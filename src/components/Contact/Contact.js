import React from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import ContactCSS from "./Contact.module.css";
import ReactJsAlert from "reactjs-alert";
import { useState } from "react";

export const Contact = () => {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is an alert");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ne8oh8b",
        "template_jljdteg",
        form.current,
        "tjenohueneaAtV6wd"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact">
      <div className={ContactCSS.contact__container}>
        <div className={ContactCSS.contact__content}>
          <div className={ContactCSS.text}>
            <h1>Let's talk.</h1>
            <p>My inbox is always open.</p>
          </div>
          <div className={ContactCSS.lrcontainer}>
            <div className={ContactCSS.cleftpane}>
              <div className={ContactCSS.contact_form}>
                <form ref={form} onSubmit={sendEmail}>
                  <div className={ContactCSS.cinfo}>
                    <div className={ContactCSS.contactlabel}>
                      <label>Full Name</label>
                      <input type="text" name="from_name" required />
                    </div>
                    <div className={ContactCSS.contactlabel}>
                      <label>Email</label>
                      <input type="email" name="email" required />
                    </div>
                  </div>
                  <div className={ContactCSS.cmessage}>
                    <div className={ContactCSS.contactlabel}>
                      <label>Message</label>
                    </div>
                    <textarea name="message" />
                  </div>
                  <div className={ContactCSS.contactsubmit}>
                    <button
                      type="submit"
                      value="Send"
                      onClick={() => {
                        setStatus(true);
                        setType("info");
                        setTitle("Thank you for your message.");
                      }}
                    >
                      {" "}
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className={ContactCSS.crightpane}>
              {" "}
              <h3>Contact</h3>
              <p>
                For any kind of inquiries or help, please feel free to contact
                me and I will get back to you the soonest.
              </p>
              <h3>Quick Links</h3>
              <div className={ContactCSS.links}>
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/in/reymar-dela-paz-0a26a0196/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/rymrdp"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a href="mailto: contactme.reymar@gmail.com">Email</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        quotes={true}
        quote="Your message was sent succesfully."
        Close={() => setStatus(false)}
      />
    </section>
  );
};

export default Contact;
