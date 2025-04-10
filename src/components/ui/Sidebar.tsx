import { Logo } from "../../icons/Logo";
import { TwitterIcon } from "../../icons/TwitterIcon";
import { YoutubeIcon } from "../../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <div className="h-screen bg-white border-r border-gray-200 w-72 fixed left-0 top-0 pl-6">
      <div className="flex text-3xl pt-8 items-center gap-2">
        <div className="text-purple-600">
          <Logo size="xl" />
        </div>
        Brainly
      </div>
      <div className="pt-8 pl-4">
        <SidebarItem text="Twitter" icon={<TwitterIcon size="md" />} />
        <SidebarItem text="Youtube" icon={<YoutubeIcon size="md" />} />
      </div>
    </div>
  );
};
