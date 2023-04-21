import React from "react";

function Button({ children, variant = "default", type = "button", className = "", ...rest }) {
  const btnSize =
    "px-[16px] md:px-[52px] py-3 rounded-2xl md:rounded-3xl focus:ring-4 focus:outline-none text-xs font-medium";

  const btnVariant =
    variant === "primary"
      ? "bg-primary  text-white  hover:bg-[#664FC2]  focus:ring-[#6F55DA] border border-primary text-primary"
      : variant === "outlined"
        ? "border border-primary bg-white text-primary "
        : "bg-[#373837] hover:bg-[#232323]  focus:ring-[#373837] text-white ";

  return (
    <button
      className={`font-semibold ${btnSize}   ${btnVariant} ${className}`}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}

export default Button;
