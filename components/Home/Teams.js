import teams from "@/utils/data/teams";
import Button from "../ui/Button";
import TeamCard from "../ui/TeamCard";

const Teams = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="bg-orange-400 text-orange-500 inline-block px-[12px] py-[8px] font-medium mb-2">
            Our Teams
          </div>
          <h3 className="text-[50px] text-slate-800 font-extrabold leading-[60px] my-2">
            Get to Know Our Professionals
          </h3>
          <p className="text-center font-Figtree leading-[30px] text-[18px] my-4 text-gray-600">
            {" "}
            We take pride in fostering a collaborative environment where
            innovation <br />
            thrives and clients receive personalized attention at every step
          </p>
        </div>
        <div className="grid grid-cols-3 my-14 h-[480px] w-full gap-10">
          {teams.map((team) => (
            <TeamCard key={team.id} data={team}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
