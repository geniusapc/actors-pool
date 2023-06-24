import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { PreviewProfile } from '../../components/Profile';
import { FormSteps } from '../../components/Profile';
import { useMyTalentProfile } from '../../hooks/useTalentData';
import { notifySuccess } from '../../utils/notification';
import ProfileLayout from '../../components/Layout/ProfileLayout';
import { ProfileHeaderCard, ProfileSectionCard } from '../../components/Profile/Cards';

const Profile = () => {
  const navigate = useNavigate();
  const step = useSelector((state) => state.createProfile.step);
  const stages = useSelector((state) => state.createProfile.stages);

  const { data } = useMyTalentProfile();
  const talent = data?.data?.data;
  if (talent) {
    navigate('/profile');
  }
  const onFormSuccess = () => {
    notifySuccess('Profile created successfully');
    navigate("/profile");
  }

  if (step > stages?.length) {
    return (
      <ProfileLayout>
        <PreviewProfile onFormSuccess={onFormSuccess} />
      </ProfileLayout>
    )
  }
  return (
    <ProfileLayout>
      <div className="flex flex-col  justify-between md:flex-row md:space-x-10 w-full">
        <div className="hidden md:block shadow-3xl rounded-[10px] w-[400px] items-start">
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
          <FormSteps />
        </div>
      </div>
    </ProfileLayout>
  );
};

export default Profile;
