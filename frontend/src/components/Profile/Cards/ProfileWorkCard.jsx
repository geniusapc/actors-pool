import React from 'react';
import { ReactComponent as MediaLogo } from '../../../assets/icons/media.svg';
import Moment from 'react-moment';

const ProfileWorkCard = ({ title, year }) => {
  return (
    <div className="shadow-3xl flex items-start rounded-lg py-5 px-7">
      <MediaLogo className="mr-4 mt-2" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold mb-2">{title}</span>
        <span className="text-sm font-light">{year && <Moment format="YYYY">{year}</Moment>}</span>
      </div>
    </div>
  );
};

export default ProfileWorkCard;
