import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import { closeForgotPwdModal } from '../../features/auth/auth';
import { useSelector, useDispatch } from 'react-redux';
import { notifySuccess, notifyError } from '../../utils/notification';
import { useNavigate } from 'react-router-dom';
import { useForgotPwd } from '../../hooks/useAuthData';

function FogotPassword() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [data, setData] = useState({});
    const isModalOpen = useSelector((state) => state.auth.isForgotPwdModalOpen);

    const onCloseHandler = () => {
        setData({});
        dispatch(closeForgotPwdModal());
    };

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((e) => ({ ...e, [name]: value }));
    };

    const onError = ({ response }) => {
        notifyError(response?.data?.message);
    };

    const onSuccess = async ({ data }) => {
        notifySuccess('A mail has been sent to you');
        onCloseHandler();
        navigate('/');
    };

    const { mutate: forgotPwd, isLoading } = useForgotPwd(onError, onSuccess);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const payload = { email: data?.email };
        forgotPwd({ data: payload });
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Forgot Password</h3>
            <form className="space-y-6" onSubmit={handleFormSubmit}>
                <Input
                    id="email"
                    label="Email Address"
                    placeholder="Enter your email address"
                    value={data?.email}
                    onChange={onChangeHandler}
                />

                <div className="flex flex-col gap-4 py-4 items-center">
                    <Button
                        className="mx-auto md:px-[90px]"
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        disabled={!!isLoading}
                    >
                        Send Mail
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default FogotPassword;
