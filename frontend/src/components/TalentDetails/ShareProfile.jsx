import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { notifySuccess } from '../../utils/notification';

function ShareProfileCard({ className, username }) {
  const [profileLink, setProfileLink] = useState();
  useEffect(() => {
    const origin = window.location.origin;
    const tempLink = `${origin}/talents/${username}`;
    setProfileLink(tempLink);
  }, [username]);

  return (
    <div className={`shadow-3xl p-4 rounded space-y-4 ${className}`}>
      <p className="text-sm text-gray300">Your profile link</p>
      {username && (
        <div className="flex justify-between text-sm">
          <span className="w-3/5  break-words">{profileLink}</span>
          <CopyToClipboard text={profileLink} onCopy={() => notifySuccess('copied')}>
            <div className="flex items-center gap-1 select-none cursor-pointer">
              <div className="w-3 h-3 bg-primary"></div>
              <span className="text-primary">copy</span>
            </div>
          </CopyToClipboard>
        </div>
      )}
    </div>
  );
}

export default ShareProfileCard;
