import React from 'react';

const MissionCard = ({data}) => {
    return (
        <div className='bg-white shadow-md rounded-md p-6 cursor-pointer hover:bg-orange-500 hover:text-white'>
            <div className=' bg-orange-100 text-orange-600 w-[50px] text-xl h-[50px] rounded-full flex items-center justify-center'>
                {data.icon}
            </div>
            <h4 className=" my-3 text-2xl font-bold ">{data.title}</h4>
            <p className="text-xl leading-8">{data.subdescription}</p>
        </div>
    );
};

export default MissionCard;