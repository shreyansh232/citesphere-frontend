import { useState } from "react";
import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { RedditIcon } from "../../icons/RedditIcon";

interface SidebarProps {
  onCollapsedChange?: (collapsed: boolean) => void;
}

export const Sidebar = ({ onCollapsedChange }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleSidebar = () => {
    const newCollapsedState = !collapsed;
    setCollapsed(newCollapsedState);
    if (onCollapsedChange) {
      onCollapsedChange(newCollapsedState);
    }
  };

  return (
    <div
      className={`h-screen text-white bg-black border-r border-gray-700 fixed left-0 top-0 transition-all duration-300 ease-in-out ${
        collapsed ? "w-24" : "w-72"
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          className={`flex pt-8 items-center gap-2 ${collapsed ? "ml-5" : "pl-6"}`}
        >
          <div className="text-purple-600">
            <Logo size="xl" />
          </div>
          <span
            className={`text-3xl transition-opacity duration-300 ${collapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}`}
          >
            Citesphere
          </span>
        </div>
        <button
          onClick={toggleSidebar}
          className={`p-1 rounded-full hover:bg-yellow-300 hover:text-black transition-colors mt-8 mr-3 ${collapsed ? "mr-10" : ""}`}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
        </button>
      </div>
      <div className={`pt-8 ${collapsed ? "px-2" : "pl-4"}`}>
        <SidebarItem
          text="Twitter"
          icon={<TwitterIcon size="md" />}
          collapsed={collapsed}
        />
        <SidebarItem
          text="Youtube"
          icon={<YoutubeIcon size="md" />}
          collapsed={collapsed}
        />
        <SidebarItem
          text="Reddit"
          icon={<RedditIcon size="md" />}
          collapsed={collapsed}
        />
      </div>
    </div>
  );
};
