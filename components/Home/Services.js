import {servicesData} from "@/utils/data/services";
import React from "react";
import Button from "../ui/Button";
import ServiceCard from "../ui/ServiceCard";

const Services = () => {
  return (
    <div className="bg-slate-900 py-28 md:px-0 px-4">
      <div className="container mx-auto text-center">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-gray-700 text-white inline-block px-[16px] py-[6px] rounded-md font-medium mb-2">
            Services
          </div>
          <h3 className=" text-[35px] md:text-[50px] text-white font-extrabold md:leading-[60px] leading-[50px] my-2">
            Tailored Solutions for Your Hiring Needs
          </h3>
          <p className="text-center font-Figtree leading-[30px] text-[18px] my-4 text-slate-100">
            {" "}
            With our proven track record and commitment to excellence, we're
            here to support your <br /> organization's growth and help you
            achieve your hiring goals.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 my-14 min-h-[480px] w-full gap-10">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} data={service}/>
          ))}
        </div>
        <div className="flex justify-center w-full">
          <Button text="Lets Get Started" />
        </div>
      </div>
    </div>
  );
};

export default Services;
