import React from 'react';

const AppButton = ({ text }) => {
  return (
    <button className="bg-[var(--color-primary)] uppercase cursor-pointer py-4 w-70 2xl:w-110 text-white text-sm 2xl:text-lg px-12 transition-colors duration-300 ease-in-out hover:bg-[#69b5ad] hover:shadow-md">
      {text}
    </button>
  );
};

export default AppButton;
