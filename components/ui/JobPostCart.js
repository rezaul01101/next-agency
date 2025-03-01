import Button from "@/components/ui/Button";
import Image from "next/image";
const JobPostCart = ({data}) => {
    return (
        <div className="w-full p-5 border rounded-md">
        <div className="bg-orange-400 text-slate-900 inline-block p-2 text-sm rounded-md font-medium mb-2">
          {data.category}
        </div>
        <div className="py-4 flex gap-4 border-b">
              <div>
                  <Image src={data.logo} className="w-[50px] h-[50px] rounded-full " alt={data.company} />
              </div>
              <div>
                  <h4 className="text-xl font-bold text-slate-900">{data.company}</h4>
                  <p className="text-slate-500">{data.location}</p>
              </div>
        </div>
        <div className="mt-4">
        <h4 className="text-xl font-bold text-slate-900">{data.title}</h4>
        <p className="text-orange-500 font-bold my-2">{data.salary}</p>
        <p className="text-slate-500">{data.posted}</p>
        <Button text={'View Details'} varient="black" className="py-2 mt-4"/>
        </div>
      </div>
    );
};

export default JobPostCart;