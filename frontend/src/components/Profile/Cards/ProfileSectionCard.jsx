import React from "react";
import { ReactComponent as RadioIcon } from "../../../assets/icons/radio-box.svg"
import { ReactComponent as CheckedRadioIcon } from "../../../assets/icons/active-radio-checked.svg"
import { ReactComponent as RightAngleIcon } from "../../../assets/icons/angle-right.svg"

const ProfileSectionCard = ({ title, isCompleted, isCurrentStep }) => {
  const isCompletedClass = isCurrentStep ? "text-primary bg-primary100" : "";
  const completedClass = isCompleted ? "text-primary" : ""
  return (
    <section
      className={`flex justify-between items-center space-x-6 p-8 py-6 ${isCompletedClass}`}
    >
      <div className="flex space-x-2 items-center">
        {!isCompleted ? <RadioIcon /> : <CheckedRadioIcon />}
        <span className="font-semibold">{title}</span>
      </div>
      <RightAngleIcon className={`${completedClass}`} />
    </section>
  );
};

export default ProfileSectionCard;
