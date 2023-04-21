import React from "react";

const ProfileSectionCard = ({ title, isCompleted }) => {
  const isCompletedClass = isCompleted ? "text-primary bg-primary100" : "";
  return (
    <div
      className={`flex justify-between items-center space-x-2 p-8 py-6 ${isCompletedClass}`}
    >
      <div className="flex">
        {!isCompletedClass ? (
          <img className="mr-2" src={`/icons/radio-box.svg`} alt="radio-box" />
        ) : (
          <img
            className="mr-2"
            src={`/icons/active-radio-checked.svg`}
            alt="radio-box"
          />
        )}

        <span className="font-semibold">{title}</span>
      </div>

      {!isCompletedClass ? (
        <img
          className="mr-2"
          src={`/icons/u_angle-right.svg`}
          alt="radio-box"
        />
      ) : (
        <img
          className="mr-2"
          src={`/icons/active-u_angle-right.svg
        `}
          alt="radio-box"
        />
      )}
    </div>
  );
};

export default ProfileSectionCard;
