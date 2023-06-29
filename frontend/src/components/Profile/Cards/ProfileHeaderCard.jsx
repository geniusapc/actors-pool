import React from 'react';
import { useSelector } from 'react-redux';

const ProfileHeaderCard = () => {
  const step = useSelector((state) => state.createProfile.step);
  const stages = useSelector((state) => state.createProfile.stages);
  const currentStage = stages[step - 1];

  return (
    <div className="mb-14">
      <div className="flex flex-col items-center justify-center">
        <span className="mb-4 text-base">{currentStage.caption}</span>
        <div>
          <span className="text-primary font-semibold text-sm mr-2">
            {step}/{stages?.length}-
          </span>
          <span className="text-xl md:text-2xl font-bold">{currentStage.title}</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderCard;
