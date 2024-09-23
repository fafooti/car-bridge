"use client";

import Image from "next/image";

const Button = ({
  fullWidth,
  backgroundColor,
  background,
  loading,
  icon,
  type,
  onClick,
  className,
  disabled,
  children,
  style,
  variant,
  ...props
}) => {
  var baseStyle = "flex align-middle gap-2.5 w-fit items-center";
  var variantStyle = `rounded-lg `;
  switch (variant) {
    case "primary":
      variantStyle = `${variantStyle} bg-primaryGreen text-white`;
      break;
    // case "secondary":
    //   variantStyle = `${variantStyle} bg-white rounded-md border border-primaryBlue text-primaryBlue`;
    //   break;
    case "ghost":
      variantStyle = ` px-5 py-4 border text-white`;
      break;
  }
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
      className={`${baseStyle} ${variantStyle} justify-center text-center disabled:opacity-60 disabled:text-darkGrey disabled:border-darkGrey ${
        className ?? ""
      }`}
      {...props}
      style={style}
    >
      {icon && <Image alt="" src={icon} />}
      {children}
    </button>
  );
};

export default Button;
