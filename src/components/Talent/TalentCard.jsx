import React from 'react'
import { SERVER_BASEURL } from '../../config/keys';
import Moment from 'react-moment';

const TalentCard = ({ talent }) => {
    return (
        <a className='h-[292px] w-full md:w-[292px]' href={`/talent/${talent._id}`}>
            <div className=" w-full h-full relative  bg-black mb-12 pb-8">
                <div className=" w-full h-full">
                    <img
                        className="object-contain w-full h-full"
                        src={`${SERVER_BASEURL}${talent.photo}`}
                        alt=""
                    />
                </div>
                <div className="absolute bottom-0 left-0 text-left text-[#ffffff] bg-black w-full">
                    <p><span className='mr-2'> {talent.firstname}</span> {talent.lastname}</p>
                    <p>
                        <span className="capitalize mr-2">{talent.profession}</span>
                        <span className="inline-block w-2 h-2 mr-2 ml-2 bg-white rounded-full"></span>
                        <span className='mr-2'>Active since</span>
                        <Moment format="YYYY">{talent.activeSince}</Moment>
                    </p>
                </div>
            </div>
        </a>
    );
};

export default TalentCard