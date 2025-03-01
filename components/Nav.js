"use client";

import { useState, useEffect } from "react";
import { logo } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Nav = () => {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`border-b border-white z-50 transition-all duration-500 ease-in-out ${isSticky ? "fixed top-0 translate-y-0 opacity-100 w-full bg-white" : "relative"}`}>
      <div className="container mx-auto h-[80px] flex justify-between items-center transition-all duration-500 ease-in-out">
        <Link href="/">
          <Image
            src={logo}
            className="h-[33px] w-[133px] object-contain"
            alt="logo"
          />
        </Link>
        <div>
          <ul className="flex text-black font-Figtree font-medium">
            <li className=" px-[14px] py-[8px]">
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li className=" px-[14px] py-[8px] relative z-10 group">
              <Link href={"/"} className="hover:text-orange-500 flex items-center gap-1">
                Pages <MdOutlineKeyboardArrowDown className="font-bold text-2xl" />
              </Link>
              <ul
                className="absolute top-[50px] left-0 bg-white rounded-md p-[10px] shadow-[rgba(0,0,0,0.068)_0px_20px_30px] min-w-[256px] opacity-0 invisible  transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible "
              >
                <li className="relative">
                  <Link href="/" className="py-[8px] px-[15px] block hover:text-orange-500">Job Post </Link>
                </li>
                <li className="relative">
                  <a href="/" className="py-[8px] px-[15px] block hover:text-orange-500">Job Details</a>
                </li>
              </ul>
            </li>
            <li className=" px-[14px] py-[8px]">
              <Link href={"/"} className="hover:text-orange-500">
                Services
              </Link>
            </li>
            <li className=" px-[14px] py-[8px] relative z-10 group">
              <Link href={"/"} className="hover:text-orange-500 flex items-center gap-1">
                Job Post <MdOutlineKeyboardArrowDown className="font-bold text-2xl" />
              </Link>
              <ul
                className="absolute top-[50px] left-0 bg-white rounded-md p-[10px] shadow-[rgba(0,0,0,0.068)_0px_20px_30px] min-w-[256px] opacity-0 invisible  transition-all duration-300 translate-y-[20px] group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible "
              >
                <li className="relative">
                  <Link href="/" className="py-[8px] px-[15px] block hover:text-orange-500">Job Post </Link>
                </li>
                <li className="relative">
                  <a href="/" className="py-[8px] px-[15px] block hover:text-orange-500">Job Details</a>
                </li>
              </ul>
            </li>
            <li className=" px-[14px] py-[8px]">
              <Link href={"/about"} className="hover:text-orange-500">
                About us
              </Link>
            </li>
            <li className=" px-[14px] py-[8px]">
              <Link href={"/"} className="hover:text-orange-500">
                Blogs
              </Link>
            </li>
            <li className=" px-[14px] py-[8px]">
              <Link href={"/contact-us"} className="hover:text-orange-500">
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <Link
            href="/"
            className="px-[22px] py-[14px] bg-orange-500 text-white rounded-md flex items-center font-bold"
          >
            Get A Quote{" "}
            <GoArrowUpRight className="text-white text-xl font-bold" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
