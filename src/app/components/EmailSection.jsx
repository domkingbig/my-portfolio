"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";
const EmailSection = () => {
  const [emailSubmmited, setEmailSubmmited] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault;
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log("🚀 ~ handleSubmit ~ resData:", resData);
    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmmited(true);
    }
  };
  return (
    <section className="relative my-12 grid gap-4 py-24 md:my-12 md:grid-cols-2 z-0" id="contact">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="my-2 text-xl font-bold text-white">{""}Let's Connect</h5>
        <p className="mb-4 max-w-md text-[#ADB7BE] ">
          {""}I'm currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you soon!
        </p>
        <div className="socials flex flex-row gap-2">          
          <Link href="https://www.linkedin.com/in/huytuwork/">
            <Image src={LinkedinIcon} alt="Linkedin Icon"></Image>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" mb-2 block text-sm font-medium text-white "
            >
              {" "}
              My email
            </label>

            <input
              name="email"
              type="email"
              id="email"
              required
              placeholder="huytuwork@gmail.com"
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder-[#9CA2A9]"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className=" mb-2 block text-sm font-medium text-white "
            >
              {" "}
              Subject
            </label>

            <input
              name="subject"
              type="text"
              id="subject"
              required
              placeholder="Front end developer hiring"
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder:text-[#9CA2A9]"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className=" mb-2 block text-sm font-medium text-white "
            >
              {" "}
              Message
            </label>

            <textarea
              name="message"
              id="message"
              required
              placeholder="Let's talk about new position on..."
              className="block w-full rounded-lg border border-[#33353F] bg-[#18191E] p-2.5 text-sm text-gray-100 placeholder:text-[#9CA2A9]"
            />
          </div>
          {/* <button
            type="submit"
            className="w-full rounded-lg bg-primary-500 px-5 py-2.5 font-medium text-white hover:bg-primary-600"
          >
            {" "}
            Send Message
          </button> */}
          {emailSubmmited && (
            <p className="mt-2 text-sm text-green-500">
              Email was sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
