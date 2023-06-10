import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

function ShareProfileCard({ className, username }) {

  const [profileLink, setProfileLink] = useState()
  useEffect(() => {
    const origin = window.location.origin;
    const tempLink = `${origin}/talent/${username}`
    setProfileLink(tempLink)

  }, [username])
  const copyProfileHandler = () => { };
  return (
    <div className={`shadow-3xl p-4 rounded space-y-4 ${className}`}>
      <p className="text-sm text-gray300">Your profile link</p>
      {username && (
        <div className="flex justify-between text-sm">
          <span className="w-4/5  break-words">actorspool.com/{username}</span>
          <div
            className="flex items-center gap-1 select-none cursor-pointer"
            onClick={copyProfileHandler}
          >
            <div className="w-3 h-3 bg-primary"></div>

            <CopyToClipboard text={profileLink} onCopy={() => alert("Copied")}>
              <span className="text-primary">copy</span>
            </CopyToClipboard>
          </div>
        </div>
      )}
    </div>
  );
}

export default ShareProfileCard;
