import React from 'react';
import { SERVER_BASEURL } from '../../config/keys';
import Moment from 'react-moment';
import SocailAccounts from './SocailAccounts';

function MyTalentDetailsAside({ talent }) {
    return (
        <div className=" shadow-3xl mb-8   p-4">
            <div className="h-[308px] w-[298px]">
                <img
                    src={`${SERVER_BASEURL}${talent.photo}`}
                    className="h-[308px] w-[298px]"
                    alt={talent.name}
                />
            </div>
            <p className="mt-5 text-xl  font-bold">
                <span className="mr-2"> {talent.firstname}</span> {talent.lastname}
            </p>

            <div className="mt-2.5 font-normal text-[#040503]">
                <span className="capitalize ">{talent.profession}</span>
                <span className="inline-block w-2 h-2 mr-2 ml-2 bg-[#040503] rounded-full"></span> Active
                since
                <Moment format="YYYY">{talent.activeSince}</Moment>
            </div>

            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <h3 className="text-gray text-xs">Social</h3>
            <SocailAccounts talent={talent} />
        </div>
    );
}

export default MyTalentDetailsAside;
