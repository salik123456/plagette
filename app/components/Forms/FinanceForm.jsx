"use client";
import React, { useState } from "react";

const FinanceForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [language, setLanguage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted:", { name, email, mobile, language });
  };

  return (
    <div className=" lg:p-6 bg-white shadow-lg">
      <h2 className="text-2xl font-bold uppercase mb-6 text-black">
        Need <br />
        <span className="text-[40px]">Financial Information?</span>{" "}
      </h2>
      <div
        style={{
          backgroundImage: "url('/form-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className=" pl-2 pt-2 bg-white shadow-lg"
      >
        <form
          onSubmit={handleSubmit}
          className="space-y-4 shadow-md bg-white p-5 lg:p-10"
        >
          <div>
            <input
              id="name"
              type="text"
              placeholder="Name *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full placeholder:text-[#838383] lg:text-md text-mobile  shadow-md  text-black px-4 py-3 2xl:py-4"
              style={{ color: "#838383" }}
            />
          </div>
          <div>
            <input
              id="email"
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-5 block w-full placeholder:text-[#838383] lg:text-md text-mobile  shadow-md  text-black px-4 py-3 2xl:py-4 "
              style={{ color: "#838383" }}
            />
          </div>
          <div>
            <input
              id="mobile"
              placeholder="Mobile *"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              className="mt-5 block w-full placeholder:text-[#838383] lg:text-md text-mobile  shadow-md  text-black px-4 py-3 2xl:py-4 "
              style={{ color: "#838383" }}
            />
          </div>

          <div>
            <input
              id="language"
              placeholder="Preferred Language "
              type="text"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="mt-5 block w-full placeholder:text-[#838383] lg:text-md text-mobile  shadow-md  text-black px-4 py-3 2xl:py-4"
              style={{ color: "#838383" }}
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-5 px-4 border border-transparent  shadow-sm text-md font-medium text-white bg-[var(--color-primary)]   "
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default FinanceForm;
