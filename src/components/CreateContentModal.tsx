import { useEffect, useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";

//controlled component
export const CreateContentModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  return (
    <div>
      {isOpen ? (
        <div className="w-screen h-screen fixed top-0 left-0 bg-gray-200 opacity-50 flex justify-center items-center">
          <div className="flex flex-col justify-center" ref={modalRef}>
            <span className="bg-white opacity-100 p-4 rounded-lg">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon size="md" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2">
                <Input
                  type="text"
                  placeholder="Title"
                  onChange={() => console.log("Clicked")}
                />
                <Input
                  type="text"
                  placeholder="Link"
                  onChange={() => console.log("Clicked")}
                />
              </div>
              <div className="flex justify-center mt-2">
                <Button text="Submit" size="md" variant="primary" />
              </div>
            </span>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export function Input({
  onChange,
  placeholder,
  className,
  id,
  type,
  fullWidth,
}: {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  className?: string;
  id?: string;
  type?: string;
  fullWidth?: boolean;
}) {
  return (
    <div>
      <input
        type={type}
        placeholder={placeholder}
        className={`px-4 py-2 border border-gray-300 rounded-md ${className} ${fullWidth ? " w-full flex justify-center items-center" : ""}`}
        onChange={onChange}
        id={id}
      ></input>
    </div>
  );
}
