import React from 'react';
import { useDispatch } from 'react-redux';
import {
    openChangePasswordModal,
    openShareProfileModal,
    openDeleteModal,
} from '../../features/settings/settings';

function AccountCard() {
    const dispatch = useDispatch();
    return (
        <div className="shadow-3xl flex  flex-col  rounded-lg py-5 px-7 ">
            <h1 className="text-xl mb-6 font-semibold">Account</h1>
            <ul className="space-y-4 ">
                <li
                    className="flex justify-between text-gray300 cursor-pointer select-none"
                    onClick={() => dispatch(openChangePasswordModal())}
                >
                    Password
                    <img src="/icons/arrow-next.svg" alt="arrow-next" />
                </li>
                <li
                    className="flex justify-between text-gray300 cursor-pointer select-none"
                    onClick={() => dispatch(openShareProfileModal())}
                >
                    Share profile
                    <img src="/icons/arrow-next.svg" alt="arrow-next" />
                </li>
                <li
                    className="flex justify-between text-gray300 cursor-pointer select-none"
                    onClick={() => dispatch(openDeleteModal())}
                >
                    Deactivate or delete account
                    <img src="/icons/arrow-next.svg" alt="arrow-next" />
                </li>
            </ul>
        </div>
    );
}

export default AccountCard;
