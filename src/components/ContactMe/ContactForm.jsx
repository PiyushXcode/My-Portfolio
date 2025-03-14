import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
const ContactForm = () => {
  const [name, setName] = useState("");
  const[email,setEmail] = useState("");
  const[message,setMessage] = useState("");
  const[success,setSuccess] = useState("");

  const handleName = (e)=>{
    setName(e.target.value)
  }
  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }
  const handleMessage = (e)=>{
    setMessage(e.target.value)
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_k1w9ksj", "template_i4rzykn", form.current, {
        publicKey: "iGYbl2OlvYgy-aikT",
      })
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSuccess("Message Sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
        <p className="text-cyan-300">{success}</p>
      <form
        className="flex flex-col gap-4 mt-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="from_name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-gray-500 px-4"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-gray-500 px-4"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          type="text"
          placeholder="Message"
          cols="50"
          rows="9"
          required
          className="p-4 rounded-lg bg-gray-500"
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button
          type="submit"
          className="w-full rounded-lg bg-cyan-500 border border-cyan-300 h-12  font-bold text-xl hover:bg-cyan-400 transition-all duration-500 text-white cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
