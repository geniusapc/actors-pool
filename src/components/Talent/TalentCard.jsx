import React from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';
import { SERVER_BASEURL } from '../../config/keys';
import { addTalentToProjectHandler } from '../../features/projects/projects';
import { ReactComponent as CopyIcon } from '../../assets/icons/copy.svg';
import { useDispatch } from 'react-redux';

const TalentCard = ({ talent }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return (
        <div className="relative">
            <div
                className="absolute top-2 right-2"
                onClick={() => dispatch(addTalentToProjectHandler(talent))}
            >
                <CopyIcon />
            </div>
            <div
                className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-85 lg:h-80 "
                onClick={() => navigate(`/talent/${talent.username}`)}
            >
                <img
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                    src={`${talent.photo}`}
                    alt=""
                />
            </div>
            <div className="absolute bottom-0 left-0 text-left w-full p-4 text-white bg-gradient-to-t from-black to-transparent ">
                <p className="">
                    <span className="mr-2"> {talent.firstname}</span> {talent.lastname}
                </p>
                <p>
                    <span className="capitalize mr-2">{talent.profession}</span>
                    <span className="inline-block w-2 h-2 mr-2 ml-2 bg-white rounded-full"></span>
                    <span className="mr-2">Active since</span>
                    <Moment format="YYYY">{talent.activeSince}</Moment>
                </p>
            </div>
        </div>
    );
};

export default TalentCard;
