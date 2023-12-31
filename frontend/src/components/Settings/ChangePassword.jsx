import React, { useState } from 'react';
import Button from '../Button/Button';
import { notifySuccess, notifyError } from '../../utils/notification';
import { useChangePassword } from '../../hooks/useAuthData';
import { useEffect } from 'react';
import PaswordInput from '../Input/PaswordInput';

function ChangePassword({ onSuccess = () => { } }) {
    const [data, setData] = useState({});
    const [isFormButtonDisabled, setIsFormButtonDisabled] = useState(true);

    const onCloseHandler = () => {
        setData({});
    };

    const onChangeHandler = (e) => {
        const { name, value } = e.target;
        setData((e) => ({ ...e, [name]: value }));
    };

    const onError = ({ response }) => {
        notifyError(response?.data?.message);
    };

    const onFormSuccess = ({ data }) => {
        notifySuccess(data?.message || 'success');
        onCloseHandler();
        onSuccess()
    };

    const { mutate: changePassword, isLoading } = useChangePassword(onError, onFormSuccess);

    const changePasswordHandler = (e) => {
        e.preventDefault();

        const payload = {
            oldPassword: data?.oldPassword,
            newPassword: data?.newPassword
        };
        changePassword({ data: payload });
    };

    useEffect(() => {
        if (!data?.oldPassword || !data?.newPassword) setIsFormButtonDisabled(true);
        else setIsFormButtonDisabled(false);
    }, [data, isLoading]);

    return (
        <>
            <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
            <p className='text-gray300 text-sm mb-8'>Enter your new password</p>
            <form className="space-y-6 select-none" onSubmit={changePasswordHandler}>
                <PaswordInput
                    id="oldPassword"
                    label="Old Password"
                    value={data?.oldPassword}
                    onChange={onChangeHandler}
                />
                <PaswordInput
                    id="newPassword"
                    label="New Password"
                    value={data?.newPassword}
                    onChange={onChangeHandler}
                />

                <div className="flex flex-col gap-4 py-4 items-center">
                    <Button
                        className="mx-auto "
                        type="submit"
                        variant="primary"
                        isLoading={isLoading}
                        disabled={isFormButtonDisabled}
                    >
                        Change Password
                    </Button>
                </div>
            </form>
        </>
    );
}

export default ChangePassword;
