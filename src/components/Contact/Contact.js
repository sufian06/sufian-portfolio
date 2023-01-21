import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import { contacts } from "../../Data";
import SectionTitle from "../SectionTitle/SectionTitle";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dh4auqk",
        "template_0jjtyjs",
        form.current,
        "yaLzkLW3H6f53_ncO"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent")
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="pt-16">
      <div className="text-center mb-4">
        <SectionTitle title="contact me" subTitle="get in touch" />
      </div>
      <div className="bg-white grid lg:grid-cols-2 rounded-2xl gap-8 mx-auto p-8">
        <div className="">
          <h3 className="capitalize text-2xl font-bold mb-4">just say hi!</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias
            iste minus officiis atque debitis. Culpa a reprehenderit at illo
            dolor omnis quisquam ut vero consequuntur sequi ea delectus,
            assumenda modi.
          </p>
          {contacts.map((contact) => (
            <div key={contact.id} className="flex items-center mt-4">
              <div className="bg-green-500 w-12 h-12 text-white flex items-center justify-center rounded-full mr-4">
                {contact.icon}
              </div>
              <p>{contact.infoText}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-2xl capitalize font-bold mb-4">get in touch</h3>
          <form ref={form} onSubmit={sendEmail}>
            <div className="grid lg:grid-cols-2 gap-2 mb-2">
              <input
                type="text"
                name="user_name"
                className="bg-zinc-100 outline-none border-none py-4 px-6 rounded-md placeholder:capitalize"
                placeholder="your name"
              />
              <input
                type="email"
                name="user_email"
                className="bg-zinc-100 outline-none border-none py-4 px-6 rounded-md placeholder:capitalize"
                placeholder="email address"
              />
            </div>
            <div className="grid h-36">
              <textarea
                type="text"
                name="message"
                className="bg-zinc-100 resize-none outline-none border-none py-4 px-6 rounded-md placeholder:capitalize"
                placeholder="message"
              />
            </div>

            <div className="flex bg-green-500 text-white mt-4 items-center gap-2 rounded-md w-28 justify-center ">
              <input type="submit" value="send" className="capitalize cursor-pointer py-2 px-4 inline-block" />
              {/* <FaPaperPlane /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
