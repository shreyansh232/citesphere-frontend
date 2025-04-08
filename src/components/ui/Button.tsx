export interface ButtonProps {
    variant?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
    text?: string;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;

}

const variantStyles = {
    "primary" : "bg-indigo-600 text-white",
    "secondary" : "bg-indigo-200 text-indigo-600"
}
const sizeStyles = {
    "sm" : "py-1 px-2",
    "md" : "py-2 px-4",
    "lg" : "py-4 px-6",
    
    
}
const defaultStyles = "rounded-md flex";    

export const Button = ({variant = "primary", text, size = "sm", startIcon, endIcon}: ButtonProps) => {
    return <button className={`${variantStyles[variant]} ${defaultStyles} ${sizeStyles[size]}`}>{startIcon ? <div className="pr-2">{startIcon}</div> : null}{text}{endIcon}</button>
}

<Button variant="primary" size="lg" text="Click Me" onClick={() => {}} />