import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileHeaderCard, ProfileSectionCard } from '../../components/Profile/Cards';
import { PreviewMyProfile } from '../../components/Profile';
import { FormSteps } from '../../components/Profile';
import { notifySuccess } from '../../utils/notification';
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg';
import { useNavigate } from 'react-router-dom';
import { previousStep, resetForm } from '../../features/profile/profile';

const CreateTalent = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const step = useSelector((state) => state.createProfile.step);
    const stages = useSelector((state) => state.createProfile.stages);

    const onFormSuccess = () => {
        notifySuccess('Profile created successfully');
        dispatch(resetForm())
    };

    const handlePrevStep = () => {
        if (step === 1) navigate(-1);
        else dispatch(previousStep());
    };

    if (step > stages?.length) {
        return <PreviewMyProfile onFormSuccess={onFormSuccess} />;
    }
    return (
        <>
            <div className="flex pb-8 cursor-pointer items-center gap-2" onClick={handlePrevStep}>
                <ArrowLeft />
                <span>Back</span>
            </div>
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
                    <FormSteps />
                </div>
            </div>
        </>
    );
};

export default CreateTalent;
