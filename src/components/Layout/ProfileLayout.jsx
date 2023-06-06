import React from 'react';
import { Header } from '../Headers';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { previousStep } from '../../features/profile/profile';

const ProfileLayout = ({ children }) => {
  const dispatch = useDispatch()
  const step = useSelector((state) => state.createProfile.step);
  const navigate = useNavigate();

  const handlePrevStep = () => {
    console.log("clicked")
    if (step === 1) navigate(-1);
    else dispatch(previousStep());
  };

  return (
    <>
      <Header showTalentHidden={false} />
      <div className="flex flex-col justify-center container mx-auto my-20">
        <div className="flex pb-8 cursor-pointer items-center gap-2" onClick={handlePrevStep}>
          <ArrowLeft />
          <span>Back</span>
        </div>

        {children}
      </div>
    </>
  );
};

export default ProfileLayout;
