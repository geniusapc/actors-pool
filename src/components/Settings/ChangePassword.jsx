import React, { useState } from 'react';
import Button from '../Button/Button';
import Input from '../Input/Input';
import { notifySuccess, notifyError } from '../../utils/notification';
import { useChangePassword } from '../../hooks/useAuthData';
import { useEffect } from 'react';

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
        if (data?.password !== data?.cpassword) return notifyError("Passord doesn't match");
        const payload = { password: data?.password };
        changePassword({ data: payload });
    };

    useEffect(() => {
        if (!data?.password || !data?.cpassword) setIsFormButtonDisabled(true);
        else setIsFormButtonDisabled(false);
    }, [data, isLoading]);

    return (
        <>
            <h3 className="mb-2 text-xl font-medium text-gray-900 dark:text-white">Change Password</h3>
            <p className='text-gray300 text-sm mb-8'>Enter your new password</p>
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
