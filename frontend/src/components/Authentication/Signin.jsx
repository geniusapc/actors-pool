import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import { closeSignInModal, openSignUpModal, openForgotPwdModal, authenticate } from '../../features/auth/auth';
import { useSelector, useDispatch } from 'react-redux';
import { notifySuccess, notifyError } from '../../utils/notification';
import { useNavigate } from 'react-router-dom';
import { useSignIn } from '../../hooks/useAuthData';
import { useLocation } from "react-router-dom"
import { useProfileData } from '../../hooks/useUserData';
import { setDefaultHeader } from '../../config/axios';



function Signin() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation()
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [isEnabled, setIsEnabled] = useState(isAuthenticated)
    const { refetch } = useProfileData({ enabled: isEnabled });

    const [data, setData] = useState({});
    const isModalOpen = useSelector((state) => state.auth.isSignInModalOpen);

    const onCloseHandler = () => {
        setData({});
        dispatch(closeSignInModal());
    };

    const openSignUpHandler = () => {
        onCloseHandler()
        dispatch(openSignUpModal())
    }

    const handleForgotPassword = () => {
        onCloseHandler()
        dispatch(openForgotPwdModal())
    }

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((e) => ({ ...e, [name]: value }));
    };

    const onError = ({ response }) => {
        notifyError(response?.data?.message);
    };

    const onSuccess = async ({ data }) => {
        const redirectUrl = (location.pathname === "/") ? "/talents" : location.pathname
        dispatch(authenticate(data));
        setIsEnabled(true)
        setDefaultHeader()
        refetch()
        notifySuccess('success');
        onCloseHandler()
        navigate(redirectUrl);
    };

    const { mutate: signIn, isLoading } = useSignIn(onError, onSuccess);

    const signInHandler = (e) => {
        e.preventDefault();
        const payload = { username: data?.email, password: data?.password };
        signIn({ data: payload });
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Log In</h3>
            <form className="space-y-6" onSubmit={signInHandler}>
                <Input
                    id="email"
                    label="Email Address"
                    placeholder="Enter your email address"
                    value={data?.email}
                    onChange={onChangeHandler}
                />
                <Input
                    id="password"
                    label="Password"
                    placeholder="●●●●●●●●●●●●"
                    value={data?.password}
                    type="password"
                    onChange={onChangeHandler}
                />
                <div className="mt-4">
                    <div className="text-sm cursor-pointer " onClick={handleForgotPassword}>
                        Forgot Password
                    </div>
                </div>

                <div className="flex flex-col gap-4 py-4 items-center">
                    <Button
                        className="mx-auto md:px-[90px]"
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        disabled={!!isLoading}
                    >
                        Log in
                    </Button>

                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        New here?
                        <button onClick={openSignUpHandler} className="ml-2 text-blue-700 hover:underline dark:text-blue-500">
                            Create an account
                        </button>
                    </div>
                </div>
            </form>
        </Modal>
    );
}

export default Signin;
