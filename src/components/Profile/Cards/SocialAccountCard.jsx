import React from "react";

const SocialAccountCard = ({ title, icon }) => {
  return (
    <div className="flex justify-between items-center space-x-2 p-8 py-6 shadow-3xl rounded-[5px] ">
      <div className="flex">
        <img className="mr-4" src={icon} alt={title} />
        <span className="font-semibold">{title}</span>
      </div>
      <img src="/icons/radio-box.svg" alt="right" />
    </div>
  );
}

export default SocialAccountCard;
