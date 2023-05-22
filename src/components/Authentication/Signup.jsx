import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import { useSignUp } from '../../hooks/useAuthData';
import { closeModal } from '../../features/auth/signup';
import { notifySuccess, notifyError } from '../../utils/notification';
import { useSelector, useDispatch } from 'react-redux';

function Signup() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.signup.isModalOpen);
    const onError = ({ response }) => {
        notifyError(response?.data?.message);
    };
    const onSuccess = ({ data }) => {
        notifySuccess(data?.message || 'success');
        onCloseHandler();
    };

    const { mutate: signUp, isLoading } = useSignUp(onError, onSuccess);
    const [data, setData] = useState({});

    const handleSignUp = (e) => {
        e.preventDefault();
        signUp({ data });
    };
    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((e) => ({ ...e, [name]: value }));
    };
    const onCloseHandler = () => {
        setData({});
        dispatch(closeModal());
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Create Account</h3>
            <p className="text-xs">
                Connect with millions of entertainers and list yourself as a talent.{' '}
            </p>
            <form className="space-y-6 mt-12" onSubmit={handleSignUp}>
                <Input
                    id="firstname"
                    label="First Name"
                    placeholder="Enter your first name"
                    value={data?.firstname}
                    onChange={onChangeHandler}
                />
                <Input
                    id="email"
                    label="Email Address"
                    placeholder="Enter your email address"
                    value={data?.email}
                    onChange={onChangeHandler}
                />
                <Input
                    id="password"
                    label="Choose Password"
                    type="password"
                    placeholder="●●●●●●●●●●●●"
                    value={data?.password}
                    onChange={onChangeHandler}
                />

                <div className="flex flex-col gap-4 py-4 items-center">
                    <Button
                        className="mx-auto"
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        disabled={isLoading}
                    >
                        Create Account
                    </Button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Already have an account?
                        <a href="#1" className="text-blue-700 hover:underline dark:text-blue-500">
                            Log in
                        </a>
                    </div>
                </div>
            </form>
        </Modal>
    );
}

export default Signup;
