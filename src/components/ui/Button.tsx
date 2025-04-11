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
}

const variantStyles = {
  primary: "bg-yellow-400 text-white hover:bg-yellow-700",
  secondary: "bg-yellow-200 text-yellow-600 hover:bg-yellow-300",
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
}: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]} ${className} ${fullWidth ? " w-full flex justify-center items-center" : ""} ${loading ? "opacity-45" : ""}`}
      onClick={onClick}
      type={type}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null}
      {text}
      {endIcon ? <div className="pl-2">{endIcon}</div> : null}
    </button>
  );
};
