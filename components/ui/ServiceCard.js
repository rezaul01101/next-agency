

const ServiceCard = ({ data }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-lg shadow-lg group cursor-pointer h-[480px]">
      <div className="absolute inset-0">
        <img
          src={data?.image?.src}
          alt="HR Consulting & Staffing"
          className="w-full h-full object-cover"
        />
      </div>
      <div className=" h-[250px] flex flex-col justify-end absolute bottom-0 left-0 w-full bg-orange-500 text-white p-6 rounded-tr-[80%] rounded-tl-[30%] transition-transform duration-500 ease-in-out transform translate-y-full group-hover:translate-y-0">
        <div className="flex  flex-col gap-2">
          {data.icon}
          <h2 className="text-2xl font-bold">{data.title}</h2>
        </div>
        <p className="mt-2 text-xl font-Figtree">
          {data?.subtitle}
        </p>
      </div>
    </div>
  );
};

export default ServiceCard;
