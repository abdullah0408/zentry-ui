import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    // Button container with customizable styles
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {/* Optional left icon, if provided */}
      {leftIcon}

      {/* Title text with styling */}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>

      {/* Optional right icon, if provided */}
      {rightIcon}
    </button>
  );
};

export default Button;
