import React from "react";

const ProfileHeaderCard = ({ caption, title, totalSteps,currentStep, ...rest }) => {
  return (
    <div {...rest}>
      <div className="flex flex-col items-center justify-center">
        <span className="mb-4 text-base">{caption}</span>
        <div>
          <span className="text-primary font-semibold text-sm mr-2">
            {currentStep}/{totalSteps}-
          </span>
          <span className="text-xl md:text-2xl font-bold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderCard;
