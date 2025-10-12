"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/menu";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-[#292929] text-white text-sm py-4">
        <div className="md:pl-[96px] md:pr-[182px] px-4 flex flex-wrap justify-between items-center">
          <p className="flex items-center gap-1 md:gap-[6px] font-medium text-xs md:text-base">
            <Image src="/Hot.svg" alt="" width={28} height={28} />
            প্রতি কোর্সে ২৫% ছাড়!
            <span className="underline cursor-pointer"> এখনই এনরোল করুন।</span>
          </p>

          <div className="hidden sm:flex items-center gap-2 md:gap-[18px]">
            <div className="flex items-center gap-1 text-[13px] md:text-[14px] font-medium">
              <Image src="/phone.svg" alt="" width={18} height={18} />
              <span>+123 4556 789</span>
            </div>
            <div className="flex items-center gap-1 text-[13px] md:text-[14px] font-medium">
              <Image src="/email.svg" alt="" width={18} height={18} />
              <span>alfabic@gmail.com</span>
            </div>
            <div className="flex items-center gap-1 text-[13px] md:text-[14px] font-medium">
              <Image src="/Location.svg" alt="" width={18} height={18} />
              <span>Dhaka, Bangladesh.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-sm relative">
        <div className="md:px-[96px] flex items-center justify-between py-3 md:py-[18px] px-4">
          {/* Logo */}
          <Link
            href="/"
            className="text-[#29B57E] text-2xl md:text-[42px] font-bold uppercase"
          >
            Alfabic
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6 text-[#404040]">
            {navItems.map(({ label, href, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`flex items-center gap-1 transition ${
                    pathname === href ? "font-semibold" : "font-normal"
                  }`}
                >
                  {icon && (
                    <Image src={icon} alt={label} width={24} height={24} />
                  )}
                  {label}
                  {label === "Courses" && (
                    <Image
                      src="/arrow.svg"
                      alt="arrow"
                      width={20}
                      height={20}
                    />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Language Switch */}
            <button className="flex items-center gap-2 border border-[#989898] px-2 py-1 rounded-[18px]">
              <Image src="/EN.svg" alt="flag" width={24} height={24} />
              <span className="text-sm md:text-base">EN</span>
            </button>

            {/* Join Button */}
            <button className="bg-[#5E2F7D] text-white md:px-[42px] px-2 py-2 md:py-3 rounded-[40px] text-sm md:text-[18px] md:font-semibold transition">
              ফ্রী-তে যোগ দিন
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden block text-[#404040]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute right-0 top-full w-1/2 bg-white border-t shadow-md z-50">
            <ul className="flex flex-col items-start px-6 py-4 gap-4 text-[#404040]">
              {navItems.map(({ label, href, icon }) => (
                <li key={href} className="w-full">
                  <Link
                    href={href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center gap-2 py-2 w-full transition ${
                      pathname === href ? "font-semibold " : "font-normal"
                    }`}
                  >
                    {icon && (
                      <Image src={icon} alt={label} width={20} height={20} />
                    )}
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
