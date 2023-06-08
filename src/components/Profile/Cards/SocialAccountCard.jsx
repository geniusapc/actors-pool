import React from "react";
import { ReactComponent as RadioIcon } from "../../../assets/icons/radio-box.svg"

const SocialAccountCard = ({ title, Icon }) => {
  return (
    <div className="flex justify-between items-center space-x-2 p-8 py-6 shadow-3xl rounded-[5px] ">
      <div className="flex">
        <Icon />
        <span className="font-semibold">{title}</span>
      </div>
      <RadioIcon />
    </div>
  );
}

export default SocialAccountCard;
