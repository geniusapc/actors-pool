import React from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';

function DeleteProjectModal() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.projects[DELETE_PROJECT_MODAL]);

    const onCloseHandler = () => {
        dispatch(closeModal(DELETE_PROJECT_MODAL));
    };
    const onDeleteProjectHandler = () => {
        onCloseHandler();
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <div className="flex flex-col items-center text-center gap-8">
                <h2 className="font-bold text-xl">Delete Project</h2>
                <img src="/icons/delete.svg" className="w-16 bg-white" alt="delete-icon" />
                <p className="text-gray300">Are you sure you want to delete this project? </p>

                <div className="mt-16 flex gap-2">
                    <Button variant="outlined" className="w-48" onClick={onDeleteProjectHandler}>
                        Delete Project
                    </Button>
                    <Button variant="primary" className="w-48" onClick={onCloseHandler}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteProjectModal;
