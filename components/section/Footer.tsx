"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaDribbble,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

const navLinks = [
  { href: "", label: "Home" },
  { href: "about", label: "About us" },
  { href: "work", label: "Our work" },
  { href: "testimonials", label: "Testimonials" },
];

const socialLinks = [
  { icon: <FaFacebookF />, href: "" },
  { icon: <FaInstagram />, href: "" },
  { icon: <FaDribbble />, href: "" },
  { icon: <FaLinkedin />, href: "" },
  { icon: <FaTwitter />, href: "" },
];

const Footer = () => {
  const pathName = usePathname().split("/")[1];
  return (
    <div
      className="relative xsm:h-[350px] h-[450px] bg-card rounded-[1.25rem]"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative xsm:h-[calc(100vh+350px)] h-[calc(100vh+450px)] -top-[100vh] ">
        <div className="xsm:h-[350px] h-[450px] sticky container flex flex-col justify-between py-6 xsm:top-[calc(100vh-350px)] top-[calc(100vh-450px)]">
          <div className="grid xsm:grid-cols-3 xsm:pt-8 gap-4">
            <div>
              <div className="flex items-end justify-start pl-3 mb-4">
                <Image src="/logo.svg" alt="Logo" width="70" height="60" />
                <Image
                  src="/logo-title.svg"
                  alt="Logo"
                  width="101"
                  height="60"
                />
              </div>
              <p className="text-white text-sm">
                {`There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, `}
              </p>
            </div>
            <ul className="flex md:gap-9 xsm:gap-4 gap-2 md:items-center items-start md:flex-row flex-col justify-end xsm:col-start-3">
              {navLinks.map((navItem) => (
                <li key={navItem.label}>
                  <Link
                    className={`relative text-nowrap ${
                      pathName === navItem.href ? "text-white" : "text-link"
                    }`}
                    href={`/${navItem.href}`}
                  >
                    {navItem.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className=" bg-card-foregrounddark border border-white/10 flex xsm:flex-row flex-col items-center justify-between rounded-sm xsm:py-6 py-4 xsm:px-5 px-2 gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <p className="text-white/50 font-semibold">Follow us on :</p>
              <ul className="flex items-center gap-1">
                {socialLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="footer_icons w-8 h-8 p-2 rounded-full grid place-items-center bg-gradient-to-br from-[#007DFF] to-[#3C1477]"
                      >
                        {item.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <p className="xsm:text-sm text-[0.75rem] text-white/80 text-center">
              Copyright© 2024. Aviorsol.com all right reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
