import Link from "next/link";
import { HiShoppingCart } from "react-icons/hi";

import { NavbarButton, NavbarLinks } from "@/components/navigation/nav-links";

import { NavLinks } from "@/constant";
import { Sidebar } from "./sidebar";

const Navbar = () => {
  return (
    <header className="w-full relative">
      <div className="fixed top-0 left-0 h-12 sm:h-16 bg-white shadow w-full z-50">
        <nav className="container padding h-12 sm:h-16 flex items-center justify-between">
          <NavbarButton />
          <div className="hidden md:flex items-center justify-start gap-x-4 h-20">
            {NavLinks.map((l) => (
              <NavbarLinks key={l.label} label={l.label} link={l.link} />
            ))}
          </div>
          <div className="flex items-center justify-end gap-x-4">
            <Link href={"/order"}>
              <HiShoppingCart className="text-secondary-color text-3xl" />
            </Link>
            <Link
              href={"/order"}
              className="px-4 py-2 rounded-md text-white bg-secondary-color font-semibold hover:shadow-md hover:underline"
            >
              Order Mangoes!
            </Link>
          </div>
        </nav>
      </div>
      <Sidebar />
    </header>
  );
};

export default Navbar;
