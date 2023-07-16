import React from 'react';
import Modal from '../Modal/Modal';
import { closeChangePasswordModal } from '../../features/settings/settings';
import { useSelector, useDispatch } from 'react-redux';
import ChangePassword from './ChangePassword';


function ChangePasswordModal() {
    const dispatch = useDispatch();

    const isModalOpen = useSelector((state) => state.settings.isChangePasswordModalOpen);

    const onCloseHandler = () => {
        dispatch(closeChangePasswordModal());
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <ChangePassword onSuccess={onCloseHandler} />
        </Modal>
    );
}

export default ChangePasswordModal;
