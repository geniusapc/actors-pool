import React from 'react';
import { ReactComponent as FaceBookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as IGIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as TikIcon } from '../../assets/icons/tik-tok.svg';
import { ReactComponent as SnapchatIcon } from '../../assets/icons/snapchat.svg';

function SocailAccounts({ socialMedia }) {
    const { fb, ig, tw, tik, snap } = socialMedia || {};
    const hasSociaMediaAccount = fb || ig || tw || tik || snap;

    return (
        <>
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
        </>
    );
}

export default SocailAccounts;
