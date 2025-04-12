export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text?: string;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;
  className?: string;
  type?: "submit" | "reset" | "button";
  fullWidth?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const variantStyles = {
  primary: "bg-yellow-400 hover:bg-yellow-700 text-black",
  secondary: "bg-gray-900 text-yellow-400 hover:bg-yellow-300 hover:text-black rounded-full border border-yellow-400",
};
const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-2 px-6",
};
const defaultStyles =
  "rounded-md flex items-center justify-center font-light px-4 py-2 transition-all duration-200 cursor-pointer";

export const Button = ({
  variant = "primary",
  text,
  size = "sm",
  startIcon,
  endIcon,
  onClick,
  className = "",
  type,
  fullWidth,
  loading,
  disabled,
}: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]} ${className} ${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" : ""} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null}
      {text}
      {endIcon ? <div className="pl-2">{endIcon}</div> : null}
    </button>
  );
};
