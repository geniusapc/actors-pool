import React from 'react';
import CheckButton from '../Button/CheckButton';
import { useState } from 'react';

function InteractionCard() {
    const [isProfileVisible, setIsProfileVisible] = useState(false);
    const [recieveDirectMessage, setRecieveDirectMessage] = useState(false);

    const onClickRecieveDirectMessage = (e) => {
        setRecieveDirectMessage(e.target.checked);
    };
    const onClickProfileVisibility = (e) => {
        setIsProfileVisible(e.target.checked);
    };
    return (
        <div className="shadow-3xl flex  flex-col  rounded-lg py-5 px-7  select-none">
            <h1 className="text-xl mb-6 font-semibold">Interactions</h1>
            <ul className="space-y-4 ">
                <li className="flex justify-between text-gray300 ">
                    <label htmlFor="directMessage" className='cursor-pointer'>Receive direct messages </label>
                    <CheckButton id="directMessage"
                        isChecked={recieveDirectMessage}
                        onClick={onClickRecieveDirectMessage} />
                </li>
                <li className="flex justify-between text-gray300">
                    <label htmlFor="profileVisibility" className='cursor-pointer'>Make talent profile visible</label>{' '}
                    <CheckButton
                        id="profileVisibility"
                        isChecked={isProfileVisible}
                        onClick={onClickProfileVisibility}
                    />
                </li>
            </ul>
        </div>
    );
}

export default InteractionCard;
