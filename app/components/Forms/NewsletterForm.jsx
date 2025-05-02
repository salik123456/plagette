import React from "react";

const NewsletterForm = () => {
  return (
    <form className="flex w-full flex-col md:flex-row justify-between items-center gap-4 lg:gap-8 mb-6 px-4">
      <input
        type="text"
        placeholder="Name*"
        className="px-4 lg:text-md text-mobile py-3 w-full md:w-1/3 text-[#838383] bg-white   focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email*"
        className="px-4 py-3 lg:text-md text-mobile  w-full md:w-1/3 bg-white text-[#838383]  focus:outline-none"
      />
      <button
        type="submit"
        className="bg-[#9FD9D1] lg:text-md text-mobile  text-white px-6 py-3 w-full md:w-1/3 "
      >
        SUBSCRIBE
      </button>
    </form>
  );
};

export default NewsletterForm;
