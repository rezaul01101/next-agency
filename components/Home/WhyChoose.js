import { choose } from "@/utils/constants";
import Image from "next/image";
import { ImCalculator } from "react-icons/im";
import Button from "../ui/Button";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

const WhyChoose = () => {
  return (
    <div className="bg-white">
      <div className="container h-[750px] mx-auto grid grid-cols-2 items-center w-full">
        <div className="grid grid-cols-12 w-full gap-8">
          <div className="col-span-4 flex flex-col items-center justify-between">
            <div className="bg-[#F5F3F4] gap-1  px-4 py-5 flex flex-col items-center justify-center rounded-md cursor-pointer w-full">
              <ImCalculator className="text-4xl" />
              <h3 className="text-2xl font-bold">98%</h3>
              <p className=" text-xl">Successful Client</p>
            </div>
            <div className="bg-[#F5F3F4] gap-1  px-4 py-5 flex flex-col items-center justify-center rounded-md cursor-pointer w-full">
              <ImCalculator className="text-4xl" />
              <h3 className="text-2xl font-bold">79% </h3>
              <p className=" text-xl">Team Advisors</p>
            </div>
            <div className="bg-[#F5F3F4] gap-1 px-4 py-5 flex flex-col items-center justify-center rounded-md cursor-pointer w-full">
              <ImCalculator className="text-4xl" />
              <h3 className="text-2xl font-bold">12+</h3>
              <p className=" text-xl">Years Experience</p>
            </div>
          </div>
          <div className=" col-span-8">
            <Image src={choose} alt="" className="w-full rounded-md" />
          </div>
        </div>
        <div className="pl-10 pr-10">
          <div className="bg-orange-400 text-slate-900 inline-block px-[12px] py-[8px] rounded-md font-medium mb-2">
            Why Choose Us
          </div>
          <h3 className="text-[50px] font-extrabold leading-[60px] my-2">
            Choose Excellence <br /> Elevate Your Hiring <br /> Experience
          </h3>
          <p className="font-Figtree leading-[30px] text-[18px] text-justify my-4 text-slate-500">
            Our team of industry experts is dedicated to understanding <br />{" "}
            your unique needs and delivering tailored solutions that <br />{" "}
            propel your business forward.
          </p>
          <div className="my-4 flex flex-wrap gap-4 w-2/3 justify-between">
            <div className="flex gap-1 items-center text-xl font-medium">
              <IoCheckmarkCircleSharp />
              Range Of Services
            </div>
            <div className="flex gap-1 items-center text-xl font-medium">
              <IoCheckmarkCircleSharp />
              Professional Expertise
            </div>
            <div className="flex gap-1 items-center text-xl font-medium">
              <IoCheckmarkCircleSharp />
              Online Recourses
            </div>
            <div className="flex gap-1 items-center text-xl font-medium">
              <IoCheckmarkCircleSharp />
              Client Success Stories
            </div>
          </div>
          <Button text={"About us"} className={"mr-2 font-bold"} />
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
