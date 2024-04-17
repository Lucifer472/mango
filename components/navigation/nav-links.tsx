"use client";

import { useSidebarState } from "@/states";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";

export const NavbarLinks = ({
  link,
  label,
}: {
  link: string;
  label: string;
}) => {
  const pathname = usePathname();

  const active = pathname === link;

  return (
    <Link
      href={link}
      className={`text-main-color font-semibold hover:text-secondary-color hover:hover-shadow-nav ${
        active && "text-secondary-color hover-shadow-nav"
      } transition-all duration-500 h-full flex items-center justify-center px-4`}
    >
      {label}
    </Link>
  );
};

export const SidebarLinks = ({
  link,
  label,
}: {
  link: string;
  label: string;
}) => {
  const pathname = usePathname();

  const active = pathname === link;

  return (
    <Link
      href={link}
      className={`text-black font-semibold hover:hover-shadow-sidebar w-full py-4 hover:bg-black hover:bg-opacity-5 bg-opacity-5  ${
        active && "hover-shadow-sidebar bg-black"
      } transition-all duration-500 px-8`}
    >
      {label}
    </Link>
  );
};

export const NavbarButton = () => {
  const setOpen = useSidebarState((state) => state.setOpen);

  return (
    <div
      className="flex items-center justify-start md:hidden"
      onClick={() => setOpen(true)}
    >
      <BiMenu className="text-4xl text-secondary-color cursor-pointer" />
    </div>
  );
};
