export interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  text?: string;
  startIcon?: any;
  endIcon?: any;
  onClick?: () => void;
}

const variantStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-200 text-purple-600",
};
const sizeStyles = {
  sm: "py-1 px-2",
  md: "py-2 px-4",
  lg: "py-4 px-6",
};
const defaultStyles = "rounded-md flex items-center justify-center font-light px-4 py-2";

export const Button = ({
  variant = "primary",
  text,
  size = "sm",
  startIcon,
  endIcon,
  onClick
}: ButtonProps) => {
  return (
    <button
      className={`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]}`}
      onClick={onClick}
    >
      {startIcon ? <div className="pr-2">{startIcon}</div> : null}
      {text}
      {endIcon ? <div className="pl-2">{endIcon}</div> : null}
    </button>
  );
};

{/* <Button variant="primary" size="lg" text="Click Me" onClick={() => {}} />; */}
