import React from 'react';
import ProfileLayout from '../../components/Layout/ProfileLayout';
import ProfileHeaderCard from '../../components/Profile/Cards/ProfileHeaderCard';
import ProfileSectionCard from '../../components/Profile/Cards/ProfileSectionCard';
import { useSelector } from 'react-redux';
import RenderProfileFormStep from '../../components/Profile/FormSteps';

const Profile = () => {
  const step = useSelector((state) => state.createProfile.step);
  const stages = useSelector((state) => state.createProfile.stages);

  return (
    <ProfileLayout>
      <div className="flex flex-col  justify-between md:flex-row md:space-x-10 w-full">

        <div className="hidden md:block shadow-3xl rounded-[10px] w-[400px]">
          {stages.map((item, index) => (
            <ProfileSectionCard
              key={item.title}
              isCurrentStep={step === index + 1}
              isCompleted={step > index + 1}
              title={item.title}
            />
          ))}
        </div>

        <div className="p-8 shadow-3xl rounded-[10px]  w-full">
          <ProfileHeaderCard />
          <RenderProfileFormStep />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
