import { useEffect, useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";

enum ContentType {
  Youtube = "youtube",
  Twitter = "twitter",
}

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
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Re-enable scrolling when modal is closed
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.body.style.overflow = "auto"; // Ensure scrolling is re-enabled if component unmounts
    };
  }, [isOpen, onClose]);

  const addContent = async () => {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    if (!title || !link) {
      alert("Please fill in all fields");
      return;
    }

    try {
      setIsSubmitting(true);
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
      
      // Clear inputs
      if (titleRef.current) titleRef.current.value = "";
      if (linkRef.current) linkRef.current.value = "";
      
      // Close modal and show success message
      onClose();
      // Use a more subtle notification instead of alert
      const notification = document.createElement("div");
      notification.className = "fixed bottom-4 right-4 bg-green-500/90 text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm z-50 animate-fade-in-up";
      notification.textContent = "Content added successfully!";
      document.body.appendChild(notification);
      setTimeout(() => {
        notification.classList.add("animate-fade-out");
        setTimeout(() => document.body.removeChild(notification), 500);
      }, 3000);
    } catch (error) {
      console.error("Error adding content:", error);
      alert("Failed to add content. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"></div>
      
      <div className="flex min-h-screen items-center justify-center p-4">
        <div 
          ref={modalRef}
          className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 p-6 text-white shadow-2xl transition-all"
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Add New Bookmark</h2>
            <button 
              onClick={onClose}
              className="rounded-full p-1.5 text-white/70 hover:bg-yellow-300 hover:text-black transition-colors"
            >
              <CrossIcon size="md" />
            </button>
          </div>
          
          {/* Content Type Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-white/70 mb-2">Type</label>
            <div className="flex space-x-3">
              <button
                type="button"
                onClick={() => setType(ContentType.Youtube)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border ${
                  type === ContentType.Youtube 
                    ? "bg-yellow-500 border-yellow-400 text-black" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                } transition-colors flex-1`}
              >
                <YoutubeIcon size="md" />
                <span>YouTube</span>
              </button>
              <button
                type="button"
                onClick={() => setType(ContentType.Twitter)}
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-lg border ${
                  type === ContentType.Twitter 
                    ? "bg-yellow-500 border-yellow-400 text-black" 
                    : "bg-white/5 border-white/10 hover:bg-white/10"
                } transition-colors flex-1`}
              >
                <TwitterIcon size="md" />
                <span>Twitter</span>
              </button>
            </div>
          </div>
          
          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-white/70 mb-1">Title</label>
              <Input
                id="title"
                type="text"
                placeholder="Enter a descriptive title"
                reference={titleRef}
                fullWidth={true}
                className="bg-white/5 border-white/10 focus:border-yellow-500 text-white"
              />
            </div>
            
            <div>
              <label htmlFor="link" className="block text-sm font-medium text-white/70 mb-1">
                {type === ContentType.Youtube ? "YouTube URL" : "Tweet URL"}
              </label>
              <Input
                id="link"
                type="text"
                placeholder={type === ContentType.Youtube ? "https://youtube.com/watch?v=..." : "https://twitter.com/..."}
                reference={linkRef}
                fullWidth={true}
                className="bg-white/5 border-white/10 focus:border-yellow-500 text-white"
              />
              <p className="mt-1 text-xs text-white/50">
                {type === ContentType.Youtube 
                  ? "Paste the full YouTube video URL" 
                  : "Paste the full Twitter/X post URL"}
              </p>
            </div>
          </div>
          
          {/* Actions */}
          <div className="mt-6 flex justify-end space-x-3">
            <Button
              text={isSubmitting ? "Adding..." : "Add Content"}
              variant="primary"
              onClick={addContent}
              size="md"
              disabled={isSubmitting}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
