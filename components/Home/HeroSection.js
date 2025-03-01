import { heroImage, heroMainBgImage } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <div className="container h-[720px] mx-auto grid grid-cols-2 items-center">
      <div>
        <div className="bg-orange-400 text-orange-500 inline-block px-[12px] py-[8px] font-medium mb-2">
          Staffing Power Your Success
        </div>
        <h3 className="text-[60px] font-extrabold leading-[70px] my-5">
          Growth Exceptional Talent Let's Build Success Together
        </h3>
        <p className="font-medium leading-[30px] text-[18px] text-justify my-5 text-slate-500">
          Our tailored staffing solutions streamline the hiring process,<br/> saving
          you time and resources while ensuring the perfect fit.
        </p>
        <Button text={'Start Your Search'} className={'mr-2'} />
        <Button varient={'black'} text={'Start Your Search'}/>
      </div>
      <div className="w-full relative">
        <div className="relative fex justify-center items-center w-full ">
          <Image
            src={heroMainBgImage}
            className="w-full h-[550px] object-contain"
            alt=""
          />
        </div>
        <div className="absolute top-[50px] right-[96px] rounded-[0_0_50%_50%] overflow-hidden">
          <Image
            src={heroImage}
            className="w-full h-[500px] object-contain"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
