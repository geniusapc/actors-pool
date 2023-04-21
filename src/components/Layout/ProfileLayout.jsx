import React from "react";
import ProfileHeaderCard from "../Cards/ProfileHeaderCard";
import ProfileSectionCard from "../Cards/ProfileSectionCard";

const ProfileLayout = ({
  children,
  caption,
  totalSteps,
  currentStep,
  title,
  data,
}) => {
  return (
    <div className="flex flex-col justify-center container mx-auto">
      <div className="flex pb-8">
        <img src="/icons/arrow-left.svg" alt="arrow-left" />
        <span>Back</span>
      </div>

      <div className="flex flex-col  justify-between md:flex-row flex-wrap">
        <div className="mr-10">
          <div className="hidden md:block shadow-3xl rounded-[10px]">
            {data.map((item) => (
              <ProfileSectionCard
                key={item.title}
                isCompleted={item.isCompleted}
                title={item.title}
              />
            ))}
          </div>
        </div>
        <div className="p-8 shadow-3xl rounded-[10px] basis-4/6">
          <ProfileHeaderCard
            className="mb-14"
            caption={caption}
            title={title}
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
