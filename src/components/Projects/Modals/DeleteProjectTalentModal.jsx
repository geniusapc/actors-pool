import React from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_TALENT_FROM_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';

function DeleteProjectTalentModal() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.projects[REMOVE_TALENT_FROM_PROJECT_MODAL]);

    const onCloseHandler = () => {
        dispatch(closeModal(REMOVE_TALENT_FROM_PROJECT_MODAL));
    };
    const onDeleteTalentHandler = () => {
        onCloseHandler();
    };
    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <div className="flex flex-col items-center text-center gap-8">
                <h2 className="font-bold text-xl">Delete Talent</h2>
                <img src="/icons/delete.svg" className="w-16 bg-white" alt="delete-icon" />
                <p className="text-gray300">Are you sure you want to delete this talent? </p>
                <div className="mt-16 flex gap-2">
                    <Button variant="outlined" className="w-48" onClick={onDeleteTalentHandler}>
                        Delete Talent
                    </Button>
                    <Button variant="primary" className="w-48" onClick={onCloseHandler}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteProjectTalentModal;
