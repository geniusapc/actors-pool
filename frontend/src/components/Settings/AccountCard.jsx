import React from 'react';
import { useDispatch } from 'react-redux';
import {
    openChangePasswordModal,
    openShareProfileModal,
    openDeleteModal,
} from '../../features/settings/settings';
import { ReactComponent as ArrrowNextIcon } from '../../assets/icons/angle-right.svg';

import { useMyTalentProfile } from '../../hooks/useTalentData';
import Attention from '../Attention/Attention';



function AccountCard() {
    const dispatch = useDispatch();
    const { data } = useMyTalentProfile();
    const hasProfile = !!data?.data?.data;
    const openProfileModal = () => {
        if (hasProfile) dispatch(openShareProfileModal());
    };

    return (
        <div className="shadow-3xl flex  flex-col  rounded-lg py-5 px-7 ">
            <h1 className="text-xl mb-6 font-semibold">Account</h1>
            <ul className="space-y-4 ">
                <li
                    className="flex justify-between text-gray300 cursor-pointer select-none"
                    onClick={() => dispatch(openChangePasswordModal())}
                >
                    Password
                    <ArrrowNextIcon />
                </li>
                <li
                    className={`flex justify-between text-gray300  select-none ${hasProfile && 'cursor-pointer'
                        }`}
                    onClick={openProfileModal}
                >
                    <div className="flex space-x-2 items-center">
                        <span>Share profile</span>
                        <span>{!hasProfile && <Attention text="You do not have a profile" />}</span>
                    </div>
                    <ArrrowNextIcon />
                </li>
                <li
                    className="flex justify-between text-gray300 cursor-not-allowed select-none"
                    onClick={() => hasProfile && dispatch(openDeleteModal())}
                >

                    <div className="flex space-x-2 items-center">
                        <span> Deactivate or delete account</span>
                        <span>{!hasProfile && <Attention text="You do not have a profile" />}</span>
                    </div>

                    <ArrrowNextIcon />
                </li>
            </ul>
        </div>
    );
}

export default AccountCard;
