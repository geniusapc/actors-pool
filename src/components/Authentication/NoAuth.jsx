import React from 'react';
import Button from '../Button/Button';
import { openSignInModal, openSignUpModal } from '../../features/auth/auth';
import { useDispatch } from 'react-redux';

function NoAuth() {
    const dispatch = useDispatch();
    return (
        <div className='flex flex-col items-center text-center h-screen gap-y-8'>
            <p className='text-[#040503] text-3xl font-bold'>Log In or Create Account to Continue</p>
            <img className="w-[250px] h-[250px]" src="/images/empty_profile.svg" alt="empty_profile" />
            <div className='flex w-full gap-2  justify-center'>
                <Button variant='outlined' className='w-[200px]' onClick={() => dispatch(openSignInModal())}>Log In</Button>
                <Button variant='primary' className='w-[200px]' onClick={() => dispatch(openSignUpModal())}>Create Account</Button>
            </div>
        </div>
    );
}

export default NoAuth;
