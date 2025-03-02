"use client";

import { useState, useEffect } from "react";
import { logo } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`border-b border-white z-50 transition-all duration-500 ease-in-out ${
        isSticky ? "fixed top-0 w-full bg-white shadow-md" : "relative"
      }`}
    >
      <div className="container mx-auto h-[80px] flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            className="h-[33px] w-[133px] object-contain"
            alt="logo"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="text-2xl text-black md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation Links */}
        <div
          className={`absolute top-[80px] left-0 w-full shadow-md md:shadow-none md:static md:w-auto md:flex transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "block bg-white opacity-100 scale-100 translate-y-0"
              : "hidden md:flex opacity-100 scale-100 translate-y-0"
          }`}
        >
          <ul className="flex flex-col md:flex-row text-black font-Figtree font-medium md:space-x-4">
            <li className="py-2 px-4 md:py-0">
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li className="py-2 px-4 md:py-0 relative group">
              <Link
                href="#"
                className="hover:text-orange-500 flex items-center gap-1"
              >
                Job Post <MdOutlineKeyboardArrowDown className="text-2xl" />
              </Link>
              <ul className="absolute left-4 md:left-0 bg-white rounded-md p-2 shadow-lg min-w-[200px] opacity-0 invisible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible">
                <li>
                  <Link
                    href="/job/post"
                    className="py-2 px-4 block hover:text-orange-500"
                  >
                    Job Post
                  </Link>
                </li>
                <li>
                  <Link
                    href="/job/details"
                    className="py-2 px-4 block hover:text-orange-500"
                  >
                    Job Details
                  </Link>
                </li>
              </ul>
            </li>
            <li className="py-2 px-4 md:py-0">
              <Link href="/services" className="hover:text-orange-500">
                Services
              </Link>
            </li>
            <li className="py-2 px-4 md:py-0">
              <Link href="/about" className="hover:text-orange-500">
                About us
              </Link>
            </li>
            <li className="py-2 px-4 md:py-0">
              <Link href="/contact-us" className="hover:text-orange-500">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Call to Action Button */}
        <div className="hidden lg:block">
          <Link
            href="/"
            className="px-6 py-3 bg-orange-500 text-white rounded-md flex items-center font-bold"
          >
            Get A Quote <GoArrowUpRight className="ml-2 text-xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
