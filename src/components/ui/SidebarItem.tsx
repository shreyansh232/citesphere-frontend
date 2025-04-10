import { ReactElement } from "react";

export const SidebarItem = ({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) => {
  return (
    <div className="flex items-center py-2 cursor-pointer hover:bg-purple-300 rounded-md pl-2 max-w-48 hover:shadow-sm transition-all duration-200">
      <div className="pr-2">{icon}</div>
      <div>{text}</div>
    </div>
  );
};
