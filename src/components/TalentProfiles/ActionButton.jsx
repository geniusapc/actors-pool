import React from 'react'
import Button from '../Button/Button'
import { useDispatch, useSelector } from 'react-redux';
import { nextStep } from "../../features/profile/profile";

const ActionButtons = () => {
    const dispatch = useDispatch()
    const step = useSelector((state) => state.createProfile.step)
    const stages = useSelector((state) => state.createProfile.stages)

    // const handleNextStep = () => {
    //     if (step === stages.length) return;
    //     dispatch(nextStep());
    // };
    return (<div className="flex justify-between w-full md:justify-center items-end mt-14 gap-4">
        <Button className="w-52" variant="outlined">
            Save as draft
        </Button>
        <Button className="w-52" type="submit" variant="primary">
            Next
        </Button>
    </div>)
}
export default ActionButtons