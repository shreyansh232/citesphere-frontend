import { ReactElement } from "react";

export const SidebarItem = ({
  text,
  icon,
  collapsed,
}: {
  text: string;
  icon: ReactElement;
  collapsed?: boolean;
}) => {
  return (
    <div
      className={`flex items-center py-2 cursor-pointer hover:bg-yellow-300 hover:text-black rounded-md pl-2 max-w-48 hover:shadow-sm transition-all duration-200 ${
        collapsed ? "justify-center pl-0 max-w-20" : "justify-start pl-2"
      }`}
    >
      <div className="pr-2">{icon}</div>
      {!collapsed && <span className="hover:text-black text-white ">{text}</span>}
    </div>
  );
};
