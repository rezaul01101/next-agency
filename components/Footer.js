import { footerLogo } from "@/utils/constants";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter,FaLocationDot } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";


const Footer = () => {
  return (
    <div className="bg-slate-900 text-white py-10 md:px-0 px-4">
      <div className="py-10 border-b border-gray-400 container mx-auto  ">
        <h3 className="text-[40px] md:text-[50px] text-white font-extrabold leading-[50px] md:leading-[60px] my-2 text-center">
          Ready to Power up your Savings and Reliability?
        </h3>
        <p className="text-center font-Figtree leading-[30px] text-[18px] my-4 text-slate-300">
          {" "}
          Feel free to customize this paragraph to better reflect the specific
          services offered by your IT solution & the unique
        </p>
      </div>
      <div className="py-10 border-b border-gray-400 container mx-auto flex flex-col md:flex-row justify-between items-center ">
        <div className="grid grid-cols-1 md:grid-cols-4 w-full gap-8">
          <div>
            <Link href="/">
              <Image
                src={footerLogo}
                className="h-[33px] w-[133px] object-contain"
                alt="logo"
              />
            </Link>
            <p className="my-4 text-xl leading-8">
              Our goal is to demystify the process, address your concerns, and
              empower you with the knowledge to embark.
            </p>
            <div className="flex gap-4 my-4">
              <div className="w-[40px] h-[40px] cursor-pointer bg-slate-700 rounded-full flex justify-center items-center hover:bg-orange-500">
                <FaLinkedinIn className="text-xl" />
              </div>
              <div className="w-[40px] h-[40px] cursor-pointer bg-slate-700 rounded-full flex justify-center items-center hover:bg-orange-500">
                <FaXTwitter className="text-xl" />
              </div>
              <div className="w-[40px] h-[40px] cursor-pointer bg-slate-700 rounded-full flex justify-center items-center hover:bg-orange-500">
                <FaInstagram className="text-xl" />
              </div>
              <div className="w-[40px] h-[40px] cursor-pointer bg-slate-700 rounded-full flex justify-center items-center hover:bg-orange-500">
                <FaYoutube className="text-xl" />
              </div>
            </div>
          </div>
          <div className="text-slate-300">
            <h4 className="font-bold text-2xl ">Quick Links</h4>
            <div className="my-4 text-xl">
              <p className="my-3">Staff Management</p>
              <p className="my-3">Leadership Training</p>
              <p className="my-3">Corporate Program </p>
              <p className="my-3">Staffing Solutions</p>
              <p className="my-3">Blog Standard</p>
            </div>
          </div>
          <div className="text-slate-300">
            <h4 className="font-bold text-2xl ">Explore</h4>
            <div className="my-4 text-xl">
              <p className="my-2">About Us</p>
              <p className="my-2">Our Team</p>
              <p className="my-2">Careers</p>
              <p className="my-2">Contact Us</p>
            </div>
          </div>
          <div className="text-slate-300">
            <h4 className="font-bold text-2xl ">Contact Us</h4>
            <div className="my-4 text-xl">
              <div className="my-2 flex gap-3">
                {" "}
                <span>
                  {" "}
                  <div className="w-[30px] h-[30px] cursor-pointer bg-slate-700 rounded-full flex justify-center items-center hover:bg-orange-500">
                    <IoCallOutline className="text-sm" />
                  </div>
                </span>{" "}
                +880 123 456 789
              </div>
              <div className="my-2 flex gap-3">
                {" "}
                <span>
                  {" "}
                  <div className="w-[30px] h-[30px] cursor-pointer bg-slate-700 rounded-full flex justify-center items-center hover:bg-orange-500">
                    <MdOutlineEmail className="text-sm" />
                  </div>
                </span>{" "}
                info@mail.com
              </div>
              <div className="my-2 flex gap-3">
                {" "}
                <span>
                  {" "}
                  <div className="w-[30px] h-[30px] cursor-pointer bg-slate-700 rounded-full flex justify-center items-center hover:bg-orange-500">
                    <FaLocationDot className="text-sm" />
                  </div>
                </span>{" "}
                8502 Preston Rd. Inglewoo Maine 98380
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-4 text-center text-xl">© Copyright 2024 -Recrute. All Right Reserved</p>
    </div>
  );
};

export default Footer;
