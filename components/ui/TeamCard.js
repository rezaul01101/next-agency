

const TeamCard = ({ data }) => {
    return (
      <div className="relative w-full h-full overflow-hidden rounded-lg shadow-lg group cursor-pointer">
        <div className="absolute inset-0">
          <img
            src={data?.image?.src}
            alt="HR Consulting & Staffing"
            className="w-full h-full object-cover"
          />
        </div>
        <div className=" h-[250px] flex flex-col absolute bottom-0 left-0 w-full bg-white text-slate-800 p-6 transition-transform duration-500 ease-in-out transform translate-y-2/4 group-hover:translate-y-0">
          <div className="flex  flex-col gap-2">
            <h2 className="text-2xl font-bold">{data.name}</h2>
          </div>
          <p className="mt-2 text-xl font-Figtree">
            {data?.designation}
          </p>
        </div>
      </div>
    );
  };
  
  export default TeamCard;
  