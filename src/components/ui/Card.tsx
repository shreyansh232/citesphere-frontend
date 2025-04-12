import { ShareIcon } from "../../icons/ShareIcon";
import { TrashIcon } from "../../icons/TrashIcon";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";

interface CardProps {
  title?: string;
  link?: string;
  type?: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div>
      <div className="backdrop-blur-md bg-white/10 rounded-xl border border-white/20 shadow-lg p-4 min-h-[350px] max-h-[350px] min-w-[350px] transition-all duration-300 hover:bg-white/20 hover:shadow-xl">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 text-white/90 font-medium">
            {type === "twitter" ? <TwitterIcon size="md" /> : type === "youtube" ? <YoutubeIcon size="md" /> : <ShareIcon size="md" />}
            {title}
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href={link} target="_blank" className="hover:text-white/90 transition-colors">
              <ShareIcon size="md" />
            </a>
            <button className="hover:text-white/90 transition-colors">
              <TrashIcon size="md" />
            </button>
          </div>
        </div>
        <div className="pt-4">
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
        </div>
      </div>
    </div>
  );
};
