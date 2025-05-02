import React from "react";

const RegistrationForm = () => {
  return (
    <form className="w-full lg:space-y-7 space-y-5 shadow-lg bg-white p-4 lg:p-10">
      <input
        type="text"
        placeholder="Name*"
        className="w-full lg:text-[20px] text-mobile poppins font-light    px-5 py-3 shadow-md  placeholder:text-[#838383] focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email*"
        className="w-full lg:text-[20px] text-mobile poppins font-light    px-5 py-3 shadow-md  placeholder:text-[#838383] focus:outline-none "
      />
      <input
        type="tel"
        placeholder="Mobile*"
        className="w-full lg:text-[20px] text-mobile poppins font-light    px-5 py-3 shadow-md  placeholder:text-[#838383] focus:outline-none "
      />
      <input
        type="text"
        placeholder="Preferred Language*"
        className="w-full lg:text-[20px] text-mobile poppins font-light    px-5 py-3 shadow-md  placeholder:text-[#838383] focus:outline-none "
      />
      <textarea
        placeholder="Message (Optional)"
        rows={6}
        className="w-full lg:text-[20px] text-mobile poppins font-light    px-5 py-3 shadow-md  placeholder:text-[#838383] focus:outline-none"
      />
      <button
        type="submit"
        className="w-full bg-primary lg:text-[20px] text-mobile text-white  py-2 px-4 poppins "
      >
        SUBMIT
      </button>
    </form>
  );
};

export default RegistrationForm;
