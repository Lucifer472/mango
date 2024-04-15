"use client";

import { useSidebarState } from "@/states";
import { IoCloseCircleOutline } from "react-icons/io5";
import { SidebarLinks } from "./nav-links";
import { NavLinks } from "@/constant";

export const Sidebar = () => {
  const [open, setOpen] = useSidebarState((state) => [
    state.open,
    state.setOpen,
  ]);

  return (
    <aside
      className="fixed z-50 top-0 left-0 h-screen bg-background-color border-r-4 border-black transition-all duration-500 w-[300px]"
      style={{
        left: open ? 0 : "-300px",
      }}
    >
      <div className="w-full h-full relative">
        <button
          className="absolute top-0 right-0 p-2 bg-white rounded-full m-2"
          onClick={setOpen}
        >
          <IoCloseCircleOutline className="text-black text-xl" />
        </button>
        <div className="flex flex-col items-start justify-start pt-16 w-full">
          {NavLinks.map((l) => (
            <SidebarLinks label={l.label} link={l.link} key={l.label} />
          ))}
        </div>
      </div>
    </aside>
  );
};
