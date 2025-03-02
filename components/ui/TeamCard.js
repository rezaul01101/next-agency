import { FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const TeamCard = ({ data }) => {
  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group cursor-pointer min-h-[480px]">
      <div className="absolute inset-0">
        <img
          src={data?.image?.src}
          alt="HR Consulting & Staffing"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" h-[210px] flex flex-col absolute bottom-0 left-0 w-full bg-white text-slate-800 p-6 transition-transform duration-500 ease-in-out transform translate-y-2/4 group-hover:translate-y-0">
        <div className="flex  flex-col gap-2">
          <h2 className="text-2xl font-bold">{data.name}</h2>
        </div>
        <p className="mt-2 text-xl font-Figtree">{data?.designation}</p>
        <div className="flex gap-4 my-4">
          <div className="w-[40px] h-[40px] cursor-pointer bg-orange-100 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
            <FaLinkedinIn className="text-xl" />
          </div>
          <div className="w-[40px] h-[40px] cursor-pointer bg-orange-100 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
            <FaXTwitter className="text-xl" />
          </div>
          <div className="w-[40px] h-[40px] cursor-pointer bg-orange-100 rounded-full flex justify-center items-center hover:bg-orange-500  hover:text-white">
            <FaInstagram className="text-xl" />
          </div>
          <div className="w-[40px] h-[40px] cursor-pointer bg-orange-100 rounded-full flex justify-center items-center hover:bg-orange-500 hover:text-white">
            <FaYoutube className="text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
