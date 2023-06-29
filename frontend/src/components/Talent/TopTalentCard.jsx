import React from 'react';
import Moment from 'react-moment';
import { ReactComponent as ArrowUpIcon } from '../../assets/icons/arrow-point-up.svg';
import { useNavigate } from 'react-router-dom';

function TopTalentCard({ talent }) {
    const navigate = useNavigate();

    return (
        <div className="relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-85 lg:h-80  relative">
                <img
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    src={`${talent?.photo}`}
                    alt={talent?.username}
                />
            </div>

            <div className="absolute bottom-0 left-0  w-full h-full  bg-gradient-to-b from-transparent via-transparent to-black cursor-pointer "></div>

            <div className="absolute bottom-0 left-0 text-left w-full  p-4 text-white space-y-2.5 select-none">
                <div className="flex  justify-between">
                    <p className="text-base">{`${talent?.firstname}  ${talent?.lastname}`}</p>
                    <ArrowUpIcon
                        className="w-3.5 h-3.5 mt-1 text-white cursor-pointer"
                        onClick={() => navigate(`/talent/${talent.username}`)}
                    />
                </div>
                <p className="flex items-center space-x-2 text-sm">
                    <span className="capitalize">{talent?.profession}</span>
                    <span className="inline-block w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Active since</span>
                    <Moment format="YYYY">{talent?.activeSince}</Moment>
                </p>
            </div>
        </div>
    );
}

export default TopTalentCard;
