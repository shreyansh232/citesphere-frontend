import { ShareIcon } from "../../icons/ShareIcon";
import { TrashIcon } from "../../icons/TrashIcon";

interface CardProps {
  title?: string;
  link?: string;
  type?: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  return (
    <div>
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 max-w-72 p-4 min-h-72">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <ShareIcon size="md" />
            {title}
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <a href={link} target="_blank">
              <ShareIcon size="md" />
            </a>
            <button>
              <TrashIcon size="md" />
            </button>
          </div>
        </div>
        <div className="pt-4">
          {/* Render YouTube embed if type is "youtube" */}
          {type === "youtube" && (
            <iframe
              className="w-full"
              src={link?.replace("watch", "embed").replace("?v=", "/")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
