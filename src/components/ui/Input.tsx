interface InputProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  reference?: any;
  placeholder: string;
  className?: string;
  id?: string;
  type?: string;
  fullWidth?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
}
export function Input({
  onChange,
  reference,
  placeholder,
  className,
  id,
  type,
  fullWidth,
  onBlur,
}: InputProps) {
  return (
    <div>
      <input
        type={type}
        ref={reference}
        placeholder={placeholder}
        className={`px-4 py-2 border border-gray-300 rounded-xl ${className} ${fullWidth ? " w-full flex justify-center items-center" : ""}`}
        onChange={onChange}
        id={id}
        onBlur={onBlur}
      ></input>
    </div>
  );
}
