import React, { useState } from "react";
import "../styles/contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (event) => {
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;

    if (inputName === "Name") {
      setName(inputValue);
    }
    if (inputName === "Email") {
      setEmail(inputValue);
    }
    if (inputName === "Message") {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    setName("");
    setEmail("");
    setMessage("");
  };
  const handleOnBlur = (event) => {
    const { target } = event;
    const inputName = target.name;
    const inputValue = target.value;
    console.log("handleOnBlur");
    if (inputValue === "") {
      alert(`${inputName} is required`);
    }
  };

  return (
    <div className="contact">
      <h1 className="contactHeader">Contact</h1>
      <form onSubmit={handleFormSubmit}>
        <div>
          <p>Name:</p>
          <input
            onBlur={handleOnBlur}
            onChange={handleInputChange}
            value={name}
            name="Name"
            type="text"
          />
        </div>
        <div>
          <p>Email:</p>
          <input
            onBlur={handleOnBlur}
            onChange={handleInputChange}
            value={email}
            name="Email"
            type="email"
          />
        </div>
        <div>
          <p>Message:</p>
          <textarea
            onBlur={handleOnBlur}
            onChange={handleInputChange}
            value={message}
            name="Message"
            type="text"
            rows="12"
            cols="45"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
