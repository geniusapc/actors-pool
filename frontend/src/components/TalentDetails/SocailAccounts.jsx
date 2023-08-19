import React from 'react';
import { ReactComponent as FaceBookIcon } from '../../assets/icons/facebook.svg';
import { ReactComponent as IGIcon } from '../../assets/icons/instagram.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icons/twitter.svg';
import { ReactComponent as TikIcon } from '../../assets/icons/tik-tok.svg';
import { ReactComponent as SnapchatIcon } from '../../assets/icons/snapchat.svg';


const addHttps = (s) => {
    if (!s) return;
    var prefix = 'https://';
    if (s.substr(0, prefix.length) !== prefix) {
        s = prefix + s;
    }
    return s
}

function SocailAccounts({ socialMedia = {} }) {
    const { facebook, instagram, twitter, tiktok, snapchat } = socialMedia;
    const hasSociaMediaAccount = Object.values(socialMedia)?.length


    return (
        <>
            <h3 className="text-gray text-xs">Social</h3>
            {!hasSociaMediaAccount && <div>No social media account </div>}

            <div className="flex gap-2 mt-5 pb-5">
                <a href={addHttps(facebook)} className={`${!facebook && 'hidden'}`}>
                    <FaceBookIcon />
                </a>
                <a href={addHttps(instagram)} className={`${!instagram && 'hidden'}`}>
                    <IGIcon />
                </a>
                <a href={addHttps(twitter)} className={`${!twitter && 'hidden'}`}>
                    <TwitterIcon />
                </a>
                <a href={addHttps(tiktok)} className={`${!tiktok && 'hidden'}`}>
                    <TikIcon />
                </a>
                <a href={addHttps(snapchat)} className={`${!snapchat && 'hidden'}`}>
                    <SnapchatIcon />
                </a>
            </div>
        </>
    );
}

export default SocailAccounts;
