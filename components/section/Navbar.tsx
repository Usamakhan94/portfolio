"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowCircleIcons } from "../ui/icons";

const navLinks = [
  { href: "", label: "Home" },
  { href: "about", label: "About us" },
  { href: "work", label: "Our work" },
  { href: "testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const pathName = usePathname().split("/")[1];
  return (
    <nav className="">
      <div className="container relative">
        <div className="flex justify-between items-center absolute w-full top-6 left-0">
          <Image src="/logo.svg" alt="Logo" width="210" height="60" />
          <div className="flex gap-9">
            <ul className="flex gap-9 items-center">
              {navLinks.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    className={`${
                      pathName === navItem.href ? "text-white" : "text-link"
                    }`}
                    href={`/${navItem.href}`}
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="rounded-full  h-14 min-w-[10.25rem] relative group"
              href=""
            >
              <div className="absolute w-1/2 h-1/2 bg-[#01BAED] -bottom-1 left-1/2 -translate-x-1/2 rounded-full blur-md opacity-30" />
              <div className="bg-clip-padding p-[1px] relative isolate overflow-hidden min-w-14 gap-4 h-full rounded-full">
                <div className="absolute w-full h-full btn-gradeint -z-10 top-0 left-0 animate-pulse group-hover:animate-none" />
                <div className="bg-button rounded-full flex items-center justify-between w-full h-full px-[0.625rem] pl-[0.9375rem]">
                  <span>Contact us</span>
                  <span className="group-hover:rotate-45 transition-all">
                    <ArrowCircleIcons />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
