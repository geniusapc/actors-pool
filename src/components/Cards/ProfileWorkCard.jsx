import React from "react";

const ProfileWorkCard = ({ title, year, icon }) => {
  return (
    <div className="shadow-3xl flex items-start rounded-lg py-5 px-7">
      <img className="mr-4 mt-2" src={icon || "icons/media.svg"} alt="media" />
      <div className="flex flex-col">
        <span className="text-sm font-semibold mb-2">{title}</span>
        <span className="text-sm font-light">{year}</span>
      </div>
    </div>
  );
};

export default ProfileWorkCard;
