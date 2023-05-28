import React from 'react'
import { openChangePasswordModal } from '../../features/auth/auth'
import { useDispatch } from 'react-redux'

function AccountCard() {
    const dispatch = useDispatch()
    return (
        <div className='shadow-3xl flex  flex-col  rounded-lg py-5 px-7 '>
            <h1 className='text-xl mb-6 font-semibold'>Account</h1>
            <ul className='space-y-4 '>
                <li className='flex justify-between text-gray300 cursor-pointer'
                    onClick={() => dispatch(openChangePasswordModal())}
                >
                    Password
                    <img src="/icons/arrow-next.svg" alt="arrow-next" />
                </li>
                <li className='flex justify-between text-gray300 cursor-pointer'
                    data-modal-target="share-profile-modal"
                    data-modal-toggle="share-profile-modal"
                >
                    Share profile
                    <img src="/icons/arrow-next.svg" alt="arrow-next" />
                </li>
                <li className='flex justify-between text-gray300 cursor-pointer'
                    data-modal-target="delete-account-modal"
                    data-modal-toggle="delete-account-modal"
                >
                    Deactivate or delete account
                    <img src="/icons/arrow-next.svg" alt="arrow-next" />
                </li>
            </ul>
        </div>
    )
}

export default AccountCard