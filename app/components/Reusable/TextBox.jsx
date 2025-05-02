import React from 'react';

const TextBox = ({ title, content }) => {
  return (
    <div className="rounded-md p-6 text-center bg-white shadow-sm">
      <h3 className="text-md text-black uppercase tracking-wider">
        {title}
      </h3>
      <p className="mt-1 text-[50px] font-bold text-[var(--color-primary)]">
        {content}
      </p>
    </div>
  );
};

export default TextBox;