import PageHeader from "@/components/PageHeader";
import { IoLocationOutline, IoCalendarOutline,IoCheckmarkCircleSharp } from "react-icons/io5";
import { VscMail } from "react-icons/vsc";
import logo1 from "@/public/images/company/job-post-image2.png";
import jobDetails from "@/public/images/job-details-image.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <PageHeader name={"Social Media Specialist"} />
      <div className="bg-white py-20 h-full md:px-0 px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 container mx-auto ">
          <div className="col-span-3">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="bg-orange-400 text-slate-900 inline-block px-[8px] py-[5px] rounded-md font-medium ">
                Part Time
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[30px] h-[30px] cursor-pointer bg-orange-100 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
                  <IoLocationOutline className="text-sm" />
                </div>
                <p className="mb-0 font-bold text-slate-500">Paris, France </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[30px] h-[30px] cursor-pointer bg-orange-100 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
                  <IoCalendarOutline className="text-sm" />
                </div>
                <p className="mb-0 font-bold text-slate-500">
                  Posted 3 month ago
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <div className="w-[30px] h-[30px] cursor-pointer bg-orange-100 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
                  <VscMail className="text-sm" />
                </div>
                <p className="mb-0 font-bold text-slate-500">$1700 / Month</p>
              </div>
            </div>
            <div className="py-6 flex gap-4 items-center">
              <div>
                <Image
                  src={logo1}
                  className="w-[70px] h-[70px] rounded-full "
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-4xl font-bold text-slate-900">
                  Creative Hive
                </h4>
              </div>
            </div>
            <div className="">
              <Image
                src={jobDetails}
                className="w-full h-[500px] object-cover rounded-lg"
                alt=""
              />
            </div>
            <div className="py-6">
              <h4 className="text-4xl font-bold mb-3">Job Description</h4>
              <p className="text-xl text-slate-600 font-Figtree leading-7">
                Creative Hive is a leading digital marketing agency specializing
                in innovative campaigns, branding solutions, and social media
                strategies. With a global clientele, we pride ourselves on
                creating impactful digital experiences that connect brands to
                their audiences.
              </p>
            </div>
            <div className="py-6">
              <h4 className="text-4xl font-bold mb-3">Responsibilities</h4>
              <p className="text-xl text-slate-600 font-Figtree leading-8">
                As a Social Media Specialist, you will be responsible for
                managing platforms like Instagram, Facebook, Twitter, and
                LinkedIn, creating and scheduling posts that resonate audiences.
                You’ll analyze campaign performance using tools like Hootsuite
                and Google Analytics, optimizing strategies for maximum reach.
                Ideal candidates will have proven experience in social media
                management, strong communication skills, and a keen eye for
                trends.
              </p>
              <div className="flex gap-1 my-4">
                <div className="w-[25px] h-[25px] text-orange-500 rounded-full flex justify-center items-center">
                    <IoCheckmarkCircleSharp className="text-2xl"/>
                </div>
                <p className="text-xl">Design and execute social media strategies to enhance brand awareness</p>
              </div>
              <div className="flex gap-1 my-4">
                <div className="w-[25px] h-[25px] text-orange-500 rounded-full flex justify-center items-center">
                    <IoCheckmarkCircleSharp className="text-2xl"/>
                </div>
                <p className="text-xl">Manage and grow social media accounts across Instagram, Facebook, Twitter, LinkedIn.</p>
              </div>
              <div className="flex gap-1 my-4">
                <div className="w-[25px] h-[25px] text-orange-500 rounded-full flex justify-center items-center">
                    <IoCheckmarkCircleSharp className="text-2xl"/>
                </div>
                <p className="text-xl">Collaborate with the creative team to produce eye-catching visuals and content.</p>
              </div>
              <div className="flex gap-1 my-4">
                <div className="w-[25px] h-[25px] text-orange-500 rounded-full flex justify-center items-center">
                    <IoCheckmarkCircleSharp className="text-2xl"/>
                </div>
                <p className="text-xl">Monitor industry trends to keep content fresh and relevant.</p>
              </div>
            </div>
          </div>
          <div className="col-span-1"></div>
        </div>
      </div>
    </>
  );
};

export default page;
