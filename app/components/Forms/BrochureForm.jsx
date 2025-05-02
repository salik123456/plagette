"use client";
import React from "react";

const BrochureForm = () => {
  return (
    <form className="bg-white p-6 md:px-6 md:py-12 2xl:py-20 shadow-lg rounded w-full max-w-md lg:absolute">
      <h3 className="lg:text-lg text-md text-center  mb-8">
        Download Brochure Now
      </h3>
      <input
        type="text"
        placeholder="Name*"
        className="w-full border border-[#1E2739] lg:text-[20px] text-mobile px-4 py-3 2xl:py-4 mb-4 2xl:mb-5"
        required
      />
      <input
        type="email"
        placeholder="Email*"
        className="w-full border border-[#1E2739] lg:text-[20px] text-mobile px-4 py-3 2xl:py-4 mb-4 2xl:mb-5"
        required
      />
      <input
        type="tel"
        placeholder="+971 — ——— ——— *"
        className="w-full border border-[#1E2739] lg:text-[20px] text-mobile px-4 py-3 2xl:py-4 mb-5"
        required
      />
      <button
        type="submit"
        className="bg-primary text-mobile lg:text-[20px] text-white w-full py-3  "
      >
        DOWNLOAD
      </button>
    </form>
  );
};

export default BrochureForm;
