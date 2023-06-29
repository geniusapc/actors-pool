import React from 'react';
import Moment from 'react-moment';

function TrailBlazzersCarouselContent({ talent }) {
    return (
        <div class=" w-full flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 items-left">
                <img className="w-full h-full " src={talent?.photo} alt="" />
            </div>

            <div className="w-ful md:w-2/3 bg-white100 text-black text-left p-4 md:p-12">
                <h3 className="text-3xl font-semibold text-[#040503] mt-3">{`${talent?.firstname} ${talent?.lastname}`}</h3>
                <div className="mt-3 space-x-2.5 flex items-center text-black100 text-base">
                    <span>{talent?.profession}</span>
                    <span className="inline-block w-1 h-1 bg-black100 opacity-70 rounded-full"></span>
                    <span>{talent?.dob || 'dob'}</span>
                    <span className="inline-block w-1 h-1 bg-black100 opacity-70  rounded-full"></span>
                    <span>Active since</span>
                    <Moment format="YYYY">{talent?.activeSince}</Moment>
                </div>
                <h3 className="mt-8 mb-3 text-sm text-gray300">About</h3>
                <p className=" text-xs md:text-base"> {talent?.about}</p>

                <h3 className="mt-8 mb-3 text-sm text-gray300">Movies</h3>
                <p className="text-xs md:text-base">
                    {talent?.movies?.map((e, i, arr) => {
                        if (arr.length - 1 === i) {
                            return <span key={e._id}>{e?.title} </span>;
                        } else {
                            return <span key={e._id}>{e?.title}, </span>;
                        }
                    })}
                </p>
            </div>
        </div>
    );
}

export default TrailBlazzersCarouselContent;
