import React from "react";
import { contact_content } from "./content";

const Contact = () => {
  return (
    <div id="contact" style={{ height: "400px" }}>
      <div>
        <h1>{contact_content.right_content.title}</h1>
        <h2>{contact_content.right_content.sub_heading}</h2>
      </div>
      <div>
        <label>{contact_content.left_content.first_input.label}</label>
        <input
          type="text"
          placeholder={`${contact_content.left_content.first_input.placeholder}`}
          onChange={() => {}}
        />
        <label>{contact_content.left_content.second_input.label}</label>

        <input
          type="text"
          placeholder={`${contact_content.left_content.second_input.placeholder}`}
          onChange={() => {}}
        />
        <label>{contact_content.left_content.third_input.label}</label>
        <textarea
          placeholder={`${contact_content.left_content.third_input.placeholder}`}
        ></textarea>
        <button>{contact_content.left_content.button_text}</button>
      </div>
    </div>
  );
};

export default Contact;
