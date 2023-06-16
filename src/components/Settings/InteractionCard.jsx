import React from 'react';
import CheckButton from '../Button/CheckButton';
import { useState } from 'react';
import { useEditTalent, useMyTalentProfile } from '../../hooks/useTalentData';
import { notifyError, notifySuccess } from '../../utils/notification';

function InteractionCard() {
    const { data, refetch } = useMyTalentProfile();
    const talent = data?.data?.data;

    const [isProfileVisible, setIsProfileVisible] = useState(talent?.isProfileVisible);
    const [recieveDirectMessage, setRecieveDirectMessage] = useState(talent?.recieveDirectMessage);

    const onClickRecieveDirectMessage = (e) => {
        setRecieveDirectMessage(e.target.checked);
        updateRecieveDM({ id: talent?._id, data: { recieveDirectMessage: e.target.checked } });
    };

    const onClickProfileVisibility = (e) => {
        setIsProfileVisible(e.target.checked);
        updateVisibility({ id: talent?._id, data: { isProfileVisible: e.target.checked } });
    };

    const onUpdateRecieveDMError = () => {
        notifyError('There was an issue updating your profile');
        setRecieveDirectMessage((e) => !e);
    };
    const onUpdateVisibilityError = () => {
        notifyError('There was an issue updating your profile');
        setIsProfileVisible((e) => !e);
    };
    const onUpdateVisibilitySuccess = () => {
        refetch();
        notifySuccess('Visibility updated successfully');
    };
    const onUpdateRecieveDirectMessageSuccess = () => {
        refetch();
        notifySuccess('Direct message status updated successfully');
    };

    const { mutate: updateVisibility } = useEditTalent(
        onUpdateVisibilityError,
        onUpdateVisibilitySuccess
    );
    const { mutate: updateRecieveDM } = useEditTalent(
        onUpdateRecieveDMError,
        onUpdateRecieveDirectMessageSuccess
    );
    return (
        <div className="shadow-3xl flex  flex-col  rounded-lg py-5 px-7  select-none">
            <h1 className="text-xl mb-6 font-semibold">Interactions</h1>
            <ul className="space-y-4 ">
                <li className="flex justify-between text-gray300 ">
                    <label htmlFor="directMessage" className="cursor-pointer">
                        Receive direct messages{' '}
                    </label>
                    <CheckButton
                        id="directMessage"
                        isChecked={recieveDirectMessage}
                        onChange={onClickRecieveDirectMessage}
                    />
                </li>
                <li className="flex justify-between text-gray300">
                    <label htmlFor="profileVisibility" className="cursor-pointer">
                        Make talent profile visible
                    </label>{' '}
                    <CheckButton
                        id="profileVisibility"
                        isChecked={isProfileVisible}
                        onChange={onClickProfileVisibility}
                    />
                </li>
            </ul>
        </div>
    );
}

export default InteractionCard;
