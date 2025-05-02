import React from 'react';

const AppButton = ({ text }) => {
  return (
    <button className="bg-[var(--color-primary)] uppercase cursor-pointer py-4 w-70 2xl:w-110 text-white text-sm 2xl:text-lg px-12 hover:bg-[var(--color-primary-dark)] transition duration-300 ease-in-out">
      {text}
    </button>
  );
};

export default AppButton;