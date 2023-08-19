import React from 'react';
import Moment from 'react-moment';
import SocailAccounts from '../SocailAccounts';

function TalentFullDetailsAside({ talent }) {
    return (
        <div className=" shadow-3xl ">
            <div  className='flex flex-col md:flex-row md:space-x-2 lg:flex-col mb-8  p-4 items-center'>
            <div className="h-[308px] w-[298px]">
                <img src={`${talent?.photo}`} className="h-[308px] w-[298px]" alt={talent?.name} />
            </div>
            <div className='mt-5 space-y-2.5 w-full'>
                <p className="text-xl  font-bold capitalize">
                    {`${talent?.firstname}  ${talent?.lastname}`}
                </p>
                <div className="mt-2.5 font-normal text-black100 flex space-x-2">
                    <span className="capitalize ">{talent?.profession}</span>
                    <span className="inline-block w-1 h-1  bg-black100 rounded-full"></span>
                    <span> Active since</span>
                    <Moment format="YYYY">{talent?.activeSince}</Moment>
                </div>
                <p className='text-gray400 text-sm space-x-2 flex items-center'>
                    <span>{`${talent?.country}, ${talent?.state}`}</span>
                    <span className="inline-block bg-gray400 w-1 h-1 rounded-full my-auto"></span>
                    <span>{talent?.phoneNumber}</span>
                </p>

            </div>
            </div>

            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <SocailAccounts socialMedia={talent?.socialMedia} />
        </div>
    );
}

export default TalentFullDetailsAside;
