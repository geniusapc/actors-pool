import React from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { ReactComponent as WarningIcon } from '../../../assets/icons/warning.svg';

function UpdateTalentsModalBase({
    isModalOpen,
    closeModal,
    title,
    subtitle,
    actionText,
    affectedCount,
    onSubmit,
    isLoading = false
}) {
    return (
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <div className="flex flex-col items-center text-center gap-8">
                <h2 className="font-bold text-xl">{title}</h2>
                <WarningIcon width="100" className="text-[#EED202]" />
                <p className="text-gray300">{subtitle} </p>
                <p className="text-gray300">{affectedCount} selected talents will be affected </p>
                <div className="mt-16 flex gap-2">
                    <Button variant="outlined" className="w-48" onClick={onSubmit} isLoading={isLoading}>
                        {actionText}
                    </Button>
                    <Button variant="primary" className="w-48" onClick={closeModal}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default UpdateTalentsModalBase;
