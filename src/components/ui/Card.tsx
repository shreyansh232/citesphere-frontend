import { RedditIcon } from "../../icons/RedditIcon";
import { ShareIcon } from "../../icons/ShareIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { useEffect, useRef } from "react";

interface CardProps {
  title?: string;
  link?: string;
  type?: "twitter" | "youtube" | "reddit";
}

export const Card = ({ title, link, type }: CardProps) => {
  const redditContainerRef = useRef<HTMLDivElement>(null);

  // This effect will handle Reddit embeds specifically
  // In your useEffect hook:
  useEffect(() => {
    if (type === "reddit" && link && redditContainerRef.current) {
      // Clean the URL to get just the post path
      const cleanUrl = link.split("?")[0];

      // Clear previous content
      if (redditContainerRef.current) {
        redditContainerRef.current.innerHTML = "";
      }

      // Create a new Reddit embed
      const blockquote = document.createElement("blockquote");
      blockquote.className = "reddit-embed-bq";
      blockquote.setAttribute("data-embed-height", "316");

      const anchor = document.createElement("a");
      anchor.href = cleanUrl;
      anchor.textContent = title || "Reddit Post";

      blockquote.appendChild(anchor);

      if (redditContainerRef.current) {
        redditContainerRef.current.appendChild(blockquote);
      }

      // Force Reddit widget to re-render
      // Use optional chaining to safely access the property
      if ((window as any).rembeddit?.load) {
        setTimeout(() => {
          (window as any).rembeddit.load();
        }, 100);
      }
    }
  }, [type, link, title]);

  return (
    <div>
      <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-4 min-h-[350px] max-h-[350px] min-w-[350px] max-w-[350px] transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-white/90 font-medium">
            {type === "twitter" ? (
              <TwitterIcon size="md" />
            ) : type === "youtube" ? (
              <YoutubeIcon size="md" />
            ) : (
              <RedditIcon size="md" />
            )}
            {title}
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a
              href={link}
              target="_blank"
              className="hover:text-white/90 transition-colors"
            >
              <ShareIcon size="md" />
            </a>
            <button className="hover:text-white/90 transition-colors">
              <TrashIcon size="md" />
            </button>
          </div>
        </div>
        <div className="pt-4 overflow-auto max-h-[260px]">
          {/* Render YouTube embed if type is "youtube" */}
          {type === "youtube" && (
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full"
                src={link?.replace("watch", "embed").replace("?v=", "/")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Render Twitter embed if type is "twitter" */}
          {type === "twitter" && (
            <blockquote className="twitter-tweet">
              <a href={link?.replace("x.com", "twitter.com")}></a>
            </blockquote>
          )}

          {/* Render Reddit embed if type is "reddit" */}
          {type === "reddit" && (
            <div
              ref={redditContainerRef}
              className="reddit-embed-container"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};
