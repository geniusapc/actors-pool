import React from 'react'
import { ReactComponent as AttentionIcon } from '../../assets/icons/circle-exclamation.svg';
import { Tooltip } from 'flowbite-react';

const Attention = ({ text }) => {
    return (
        <Tooltip content={text}>
            <AttentionIcon />
        </Tooltip>
    );
};

export default Attention