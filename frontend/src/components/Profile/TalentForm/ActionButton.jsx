import React from 'react';
import Button from '../../Button/Button';
import { previousStep } from '../../../features/profile/profile';
import { useDispatch, useSelector } from 'react-redux';

const ActionButtons = () => {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.createProfile.step);
    const handlePrevStep = () => {
        if (step > 1) dispatch(previousStep());
    };

    return (
        <div className="flex justify-between w-full md:justify-center items-end mt-14 gap-4">
            <Button className="w-52" variant="outlined" onClick={handlePrevStep} disabled={step === 1}>
                Back
            </Button>
            <Button className="w-52" type="submit" variant="primary">
                Next
            </Button>
        </div>
    );
};
export default ActionButtons;
