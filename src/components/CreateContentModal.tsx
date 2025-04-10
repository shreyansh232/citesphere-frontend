import { useEffect, useRef } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";

//controlled component
export const CreateContentModal = ({ isOpen, onClose }: {isOpen: boolean, onClose: () => void}) => {
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
                <Input placeholder="Title" onChange={() => console.log("Clicked") }/>
                <Input placeholder="Link" onChange={() => console.log("Clicked") }/>
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
}: {
  onChange: () => void;
  placeholder: string;
}) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        className="px-4 py-2 border border-gray-300 rounded-md"
        onChange={onChange}
      ></input>
    </div>
  );
}
