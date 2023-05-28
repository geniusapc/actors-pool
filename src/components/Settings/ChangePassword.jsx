import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import { closeChangePasswordModal } from '../../features/settings/settings';
import { useSelector, useDispatch } from 'react-redux';
import { notifySuccess, notifyError } from '../../utils/notification';
import { useChangePassword } from '../../hooks/useAuthData';
import { useEffect } from 'react';



function ChangePassword() {
    const dispatch = useDispatch();

    const [data, setData] = useState({});
    const [isFormButtonDisabled, setIsFormButtonDisabled] = useState(true);
    const isModalOpen = useSelector((state) => state.settings.isChangePasswordModalOpen);

    const onCloseHandler = () => {
        setData({});
        dispatch(closeChangePasswordModal());
    };

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((e) => ({ ...e, [name]: value }));
    };

    const onError = ({ response }) => {
        notifyError(response?.data?.message);
    };

    const onSuccess = ({ data }) => {
        notifySuccess(data?.message || 'success');
        onCloseHandler();
    };

    const { mutate: changePassword, isLoading } = useChangePassword(onError, onSuccess);

    const changePasswordHandler = (e) => {
        e.preventDefault();
        if (data?.password !== data?.cpassword) return notifyError("Passord doesn't match");
        const payload = { password: data?.password };
        changePassword({ data: payload });
    };

    useEffect(() => {
        if (!data?.password || !data?.cpassword) setIsFormButtonDisabled(true);
        else setIsFormButtonDisabled(false);
    }, [data, isLoading]);

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Log In</h3>
            <form className="space-y-6" onSubmit={changePasswordHandler}>
                <Input
                    id="password"
                    label="New Password"
                    type="password"
                    placeholder="Enter your email address"
                    value={data?.password}
                    onChange={onChangeHandler}
                />
                <Input
                    id="cpassword"
                    label="Re-Enter Password"
                    placeholder="●●●●●●●●●●●●"
                    value={data?.cpassword}
                    type="password"
                    onChange={onChangeHandler}
                />

                <div className="flex flex-col gap-4 py-4 items-center">
                    <Button
                        className="mx-auto md:px-[90px]"
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        disabled={isFormButtonDisabled}
                    >
                        Change Password
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default ChangePassword;
