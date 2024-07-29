"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowCircleIcons } from "../ui/icons";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";

const navLinks = [
  { href: "", label: "Home" },
  { href: "about", label: "About us" },
  { href: "work", label: "Our work" },
  { href: "testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [isView, setIsVIew] = useState(false);

  const { scrollY } = useScroll();
  const ref = useRef(null);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (ref !== null && value < 2) {
      setIsVIew(false);
    } else {
      setIsVIew(true);
    }
  });

  const pathName = usePathname().split("/")[1];
  return (
    <nav className="">
      <div className="container fixed z-50 left-0 right-0">
        <motion.div
          ref={ref}
          className={`flex justify-between gap-8 items-center absolute z-[9999] px-3 py-3 rounded-full top-6 left-0`}
          style={{
            transition:
              "all 550ms, background 0ms, box-shadow 0ms, translate 500ms",
            width: isView ? "60%" : "100%",
            x: isView ? "-50%" : "0%",
            left: isView ? "50%" : "0%",
            background: isView ? "#0a1016" : "transparent",
            boxShadow: isView
              ? "inset 4px -4px 10px #4C0E49, inset -3px 4px 10px #3C1477, rgb(60, 20, 119) -6px 5px 10px inset"
              : "none",
          }}
        >
          <Image src="/logo.svg" alt="Logo" width="210" height="60" />
          <div className="flex gap-9">
            <ul className="flex gap-9 items-center">
              {navLinks.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    className={`relative text-nowrap ${
                      pathName === navItem.href ? "text-white" : "text-link"
                    }`}
                    href={`/${navItem.href}`}
                  >
                    {/* {pathName === navItem.href ? (
                      <motion.div
                        layoutId="underline"
                        className="absolute w-full h-[2px] bg-white left-0 -bottom-2 rounded-lg"
                      />
                    ) : null} */}
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              className="rounded-full h-14 min-w-[10.25rem] relative group"
              href=""
            >
              {!isView && (
                <div className="absolute w-1/2 h-1/2 bg-[#01BAED] -bottom-1 left-1/2 -translate-x-1/2 rounded-full blur-md opacity-30" />
              )}
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
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
