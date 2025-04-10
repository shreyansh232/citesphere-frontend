import { useEffect, useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

//controlled component
export const CreateContentModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const [type, setType] = useState(ContentType.Youtube);

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

  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        title,
        link,
        type,
      },
      {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      }
    );
    alert("Content Added");
  };

  return (
    <div>
      {isOpen ? (
        <div>
          <div className="w-screen h-screen fixed top-0 left-0 bg-gray-200 opacity-60 flex justify-center"></div>
          <div
            className="flex justify-center items-center w-screen h-screen fixed top-0 left-0"
            ref={modalRef}
          >
            <span className="bg-white opacity-100 p-4 rounded-xl fixed min-h-[350px] min-w-[350px]">
              <div className="flex justify-end">
                <div onClick={onClose} className="cursor-pointer">
                  <CrossIcon size="md" />
                </div>
              </div>
              <div className="flex flex-col justify-center items-center gap-2 w-full">
                <Input
                  type="text"
                  placeholder="Title"
                  reference={titleRef}
                  fullWidth={true}
                />
                <Input type="text" placeholder="Link" reference={linkRef} />
              </div>
              <div>
                <h1>Type</h1>
                <div className="flex gap-1 justify-center pb-2">
                  {/* Button to select YouTube type */}
                  <Button
                    text="Youtube"
                    variant={
                      type === ContentType.Youtube ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Youtube)}
                  />
                  {/* Button to select Twitter type */}
                  <Button
                    text="Twitter"
                    variant={
                      type === ContentType.Twitter ? "primary" : "secondary"
                    }
                    onClick={() => setType(ContentType.Twitter)}
                  />
                </div>
              </div>
              <div className="flex justify-center mt-2">
                <Button
                  onClick={addContent}
                  text="Submit"
                  size="md"
                  variant="primary"
                />
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
