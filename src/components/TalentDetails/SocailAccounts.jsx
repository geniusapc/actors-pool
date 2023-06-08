import React from 'react'
import { ReactComponent as FbIcon } from "../../assets/icons/facebook.svg"
import { ReactComponent as IgIcon } from "../../assets/icons/instagram.svg"
import { ReactComponent as TwIcon } from "../../assets/icons/twitter.svg"
import { ReactComponent as TikTokIcon } from "../../assets/icons/tik-tok.svg"
import { ReactComponent as SnapchatIcon } from "../../assets/icons/snapchat.svg"

function SocailAccounts({ talent }) {
    return (
        <div className="flex gap-2 mt-5">
            <a href={talent?.socialMedia?.fb}>
                <FbIcon />
            </a>
            <a href={talent?.socialMedia?.ig}>
                <IgIcon />
            </a>
            <a href={talent?.socialMedia?.tw}>
                <TwIcon />
            </a>
            <a href={talent?.socialMedia?.tik}>
                <TikTokIcon />
            </a>
            <a href={talent?.socialMedia?.snap}>
                <SnapchatIcon />
            </a>
        </div>
    )
}

export default SocailAccounts