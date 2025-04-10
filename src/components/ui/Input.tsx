interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reference?: any;
  placeholder: string;
  className?: string;
  id?: string;
  type?: string;
  fullWidth?: boolean;
}
export function Input({
  onChange,
  reference,
  placeholder,
  className,
  id,
  type,
  fullWidth,
}: InputProps) {
  return (
    <div>
      <input
        type={type}
        ref={reference}
        placeholder={placeholder}
        className={`px-4 py-2 border border-gray-300 rounded-md ${className} ${fullWidth ? " w-full flex justify-center items-center" : ""}`}
        onChange={onChange}
        id={id}
      ></input>
    </div>
  );
}
