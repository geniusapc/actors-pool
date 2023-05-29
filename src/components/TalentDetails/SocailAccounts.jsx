import React from 'react'

function SocailAccounts({ talent }) {
    return (
        <div className="flex gap-2 mt-5">
            <a href={talent?.socialMedia?.fb}>
                <img src="/icons/facebook.svg" alt="" />
            </a>
            <a href={talent?.socialMedia?.ig}>
                <img src="/icons/instagram.svg" alt="" />
            </a>
            <a href={talent?.socialMedia?.tw}>
                <img src="/icons/twitter.svg" alt="" />
            </a>
            <a href={talent?.socialMedia?.tik}>
                <img src="/icons/tik-tok.svg" alt="" />
            </a>
            <a href={talent?.socialMedia?.snap}>
                <img src="/icons/snapchat.svg" alt="" />
            </a>
        </div>
    )
}

export default SocailAccounts