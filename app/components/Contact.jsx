"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "0abf28b6-6ed4-4340-94d2-74c66cdc8c55");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      setShowModal(true); // ✅ show modal
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message || "Something went wrong!");
      setShowModal(true); // ❌ still show modal with error
    }
  };

  return (
    <div
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-ovo">Connect With Me</h4>
      <h2 className="text-center text-5xl font-ovo">Get in Touch</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        I'd love to hear from you! If you have any questions, comments or
        feedback please use the form below.
      </p>

      <form onSubmit={onSubmit} className="max-w-2xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10 mb-8">
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <input
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            type="email"
            name="email"
            placeholder="Enter Your email"
            required
          />
        </div>
        <textarea
          rows="6"
          name="message"
          placeholder="Enter Your Message"
          required
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
        ></textarea>
        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          <span>Submit Now</span>
          <Image src={assets.right_arrow_white} alt="arrow" className="w-4" />
        </button>
      </form>

      {/* ✅ Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center  bg-black/50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-xl font-bold mb-4">Message</h2>
            <p className="mb-4">{result}</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
