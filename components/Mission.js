import goalsData from '@/utils/data/goal';
import React from 'react';
import MissionCard from './ui/MissionCard';

const Mission = () => {
    return (
        <div className="py-20">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <div className="bg-orange-400 text-orange-500 inline-block px-[12px] py-[8px] font-medium mb-2">
            Our Mission
            </div>
            <h3 className="text-[50px] text-slate-800 font-extrabold leading-[60px] my-2">
            Success Our Guiding Mission
            </h3>
            <p className="text-center font-Figtree leading-[30px] text-[18px] my-4 text-gray-600">
              {" "}
              We believe that by connecting talented professionals with leading companies, we can <br />
              create opportunities for growth, innovation
            </p>
          </div>
          <div className="grid grid-cols-3 my-14  w-full gap-10">
            {goalsData.map((team) => (
              <MissionCard key={team.id} data={team}/>
            ))}
          </div>
        </div>
      </div>
    );
};

export default Mission;