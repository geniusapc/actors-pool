import React from 'react';
import Button from '../Button/Button';
import Moment from 'react-moment';
import { ReactComponent as FaceBookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as IGIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as TikIcon } from '../../assets/icons/tik-tok.svg';
import { ReactComponent as SnapchatIcon } from '../../assets/icons/snapchat.svg';

function TalentDetailsAside({ talent }) {
    const { fb, ig, tw, tik, snap } = talent?.socialMedia || {};
    const hasSociaMediaAccount = fb || ig || tw || tik || snap;
    return (
        <div className="shadow-3xl mb-8 p-4">
            <div className="h-[308px] w-[298px]">
                <img src={`${talent?.photo}`} className="h-[308px] w-[298px]" alt={talent?.name} />
            </div>
            <div className="text-xl font-semibold mt-5"> {talent?.name}</div>
            <div className="mt-2.5 flex items-center space-x-2">
                <span>{talent?.profession}</span>
                <span className="inline-block w-[3px] h-[3px]  bg-black rounded-full"></span>
                <span>Active since</span>
                <Moment format="YYYY">{talent?.activeSince}</Moment>
            </div>
            <div className="flex justify-between items-center mt-6">
                <Button variant="primary">Add to Project</Button>
                <span>
                    <img src="/icons/message.svg" alt="" />
                </span>
            </div>
            <hr className="w-full h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />
            <h3 className="text-gray text-xs">Social</h3>

            {!hasSociaMediaAccount && <div>No social media account </div>}

            <div className="flex gap-2 mt-5">
                <a href={fb} className={`${!fb && 'hidden'}`}>
                    <FaceBookIcon />
                </a>
                <a href={ig} className={`${!ig && 'hidden'}`}>
                    <IGIcon />
                </a>
                <a href={tw} className={`${!tw && 'hidden'}`}>
                    <TwitterIcon />
                </a>
                <a href={tik} className={`${!tik && 'hidden'}`}>
                    <TikIcon />
                </a>
                <a href={snap} className={`${!snap && 'hidden'}`}>
                    <SnapchatIcon />
                </a>
            </div>
        </div>
    );
}

export default TalentDetailsAside;
