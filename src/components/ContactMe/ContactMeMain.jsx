import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";
import ContactForm from "./ContactForm";

const ContactMeMain = () => {
  return (
    <div
      className="flex flex-col justify-center items-center max-w-[1200px] mx-auto"
      id="contacts"
    >
      <h2 className="text-6xl text-cyan-300 mt-10 ">Contact Me</h2>
      <div className="flex justify-between gap-26 bg-gray-700 p-8 rounded-2xl lg:flex-row sm:flex-col">
        <div>
          <ContactMeLeft />
          <ContactForm />
        </div>
          <ContactMeRight />
      </div>
    </div>
  );
};

export default ContactMeMain;
