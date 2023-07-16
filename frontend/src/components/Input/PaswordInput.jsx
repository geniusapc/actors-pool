import React, { useState } from 'react';
import Input from './Input';
import { ReactComponent as EyeOpenIcon } from '../../assets/icons/eye-open.svg';
import { ReactComponent as EyeCloseIcon } from '../../assets/icons/eye-slash.svg';

function PaswordInput({ value, ...rest }) {
    const [isPwdVisible, setIsPwdVisible] = useState(false);



    const type = isPwdVisible ? 'text' : 'password';

    const toggleIcon = () => {

        setIsPwdVisible((e) => !e);
    };

    const eyeComponent = () => {
        return (
            <div className="cursor-pointer" onClick={toggleIcon}>
                {isPwdVisible ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </div>
        );
    };
    return (
        <Input
            LeftComponent={eyeComponent}
            placeholder={isPwdVisible ? "" : "•••••••••••••"}
            type={type}
            value={value}
            {...rest}
        />
    );
}

export default PaswordInput;
