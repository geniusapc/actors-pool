import React from 'react';
import Moment from 'react-moment';
import SocailAccounts from './SocailAccounts';

function MyTalentDetailsAside({ talent }) {
    return (
        <div className=" shadow-3xl mb-8   p-4">
            <div className="h-[308px] w-[298px]">
                <img src={`${talent?.photo}`} className="h-[308px] w-[298px]" alt={talent?.name} />
            </div>
            <p className="mt-5 text-xl  font-bold capitalize">
                <span className="mr-2 "> {talent?.firstname}</span> {talent?.lastname}
            </p>

            <div className="mt-2.5 font-normal text-black100 flex items-center ">
                <span className="capitalize ">{talent?.profession}</span>
                <span className="inline-block w-1 h-1 mr-2 ml-2 bg-black100 rounded-full"></span>
                <span className="mr-2"> Active since</span>
                <Moment format="YYYY">{talent?.activeSince}</Moment>
            </div>
            <p className='text-gray400 text-sm'>
                <span>{`${talent?.country}, ${talent?.state}`}</span>
                <span className="inline-block bg-gray400 w-1 h-1 mr-2 ml-2 rounded-full my-auto"></span>
                <span>{talent?.phoneNumber}</span>
            </p>

            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <SocailAccounts talent={talent} />
        </div>
    );
}

export default MyTalentDetailsAside;
