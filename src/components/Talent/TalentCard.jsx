import React from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { addTalentToProjectHandler } from '../../features/projects/projects';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { useDispatch } from 'react-redux';

const TalentCard = ({ talent }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="relative">
            <div
                className="absolute top-2 right-2 cursor-copy z-10"
                onClick={() => dispatch(addTalentToProjectHandler(talent))}
            >
                <CopyIcon />
            </div>

            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-85 lg:h-80  relative">
                <img
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    src={`${talent?.photo}`}
                    alt={talent?.username}
                />
            </div>

            <div
                className="absolute bottom-0 left-0  w-full h-full  bg-gradient-to-b from-transparent via-transparent to-black cursor-pointer "
                onClick={() => navigate(`${talent?.username}`)}
            ></div>

            <div className="absolute bottom-0 left-0 text-left w-full  p-4 text-white space-y-2.5 select-none" >
                <p className="text-base">{`${talent?.firstname}  ${talent?.lastname}`}</p>
                <p className="flex items-center space-x-2 text-sm">
                    <span className="capitalize">{talent?.profession}</span>
                    <span className="inline-block w-1.5 h-1.5 bg-white rounded-full"></span>
                    <span>Active since</span>
                    <Moment format="YYYY">{talent?.activeSince}</Moment>
                </p>
            </div>
        </div>
    );
};

export default TalentCard;
