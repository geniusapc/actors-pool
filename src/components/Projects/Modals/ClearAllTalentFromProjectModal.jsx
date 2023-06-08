import React from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { CLEAR_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useClearProjectTalents } from '../../../hooks/useProjectData';
import { notifyError, notifySuccess } from '../../../utils/notification';
import { ReactComponent as DeleteIcon } from "../../../assets/icons/delete.svg"

function ClearAllTalentFromProjectModal({ refetchProject }) {
    const dispatch = useDispatch();
    const params = useParams();
    const isModalOpen = useSelector((state) => state.projects[CLEAR_PROJECT_MODAL]);
    const onCloseHandler = () => dispatch(closeModal(CLEAR_PROJECT_MODAL));

    const onError = () => notifyError('There was an issue deleting talents from project');
    const onSuccess = () => {
        refetchProject();
        notifySuccess('Talents cleared successfully');
        onCloseHandler();
    };

    const { mutate: clearProjectTalents, isLoading } = useClearProjectTalents(onError, onSuccess);
    const onRemoveTalentHandler = () => clearProjectTalents(params?.id);

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <div className="flex flex-col items-center text-center gap-8">
                <h2 className="font-bold text-xl">Remove All Talents</h2>
                <DeleteIcon />
                <p className="text-gray300">
                    Are you sure you want to remove all the talents you added to this project?{' '}
                </p>

                <div className="mt-16 flex gap-2">
                    <Button
                        variant="outlined"
                        className="w-48"
                        onClick={onRemoveTalentHandler}
                        isLoading={isLoading}
                    >
                        Remove Talents
                    </Button>
                    <Button variant="primary" className="w-48" onClick={onCloseHandler}>
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default ClearAllTalentFromProjectModal;
