import React from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE_TALENT_FROM_PROJECT_MODAL, closeModal, setTalent } from '../../../features/projects/projects';
import { useDeleteTalentFromProject } from '../../../hooks/useProjectData';
import { notifyError, notifySuccess } from '../../../utils/notification';

function DeleteProjectTalentModal({ refetchProject }) {
    const params = useParams()
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.projects[REMOVE_TALENT_FROM_PROJECT_MODAL]);
    const talent = useSelector((state) => state.projects.talent);
    const onCloseHandler = () => {
        dispatch(setTalent(null))
        dispatch(closeModal(REMOVE_TALENT_FROM_PROJECT_MODAL))
    }

    const onError = () => {
        notifyError("There was an issue removing talent from project")
    }
    const onSuccess = () => {
        refetchProject()
        notifySuccess("Talent removed successfully")
        onCloseHandler()
    }
    const { mutate: removeTalentFromProject, isLoading } = useDeleteTalentFromProject(onError, onSuccess)
    const onDeleteTalentHandler = () => {
        removeTalentFromProject({ projectId: params?.id, talentId: talent?._id })
    };
    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <div className="flex flex-col items-center text-center gap-8">
                <h2 className="font-bold text-xl">Delete Talent</h2>
                <img src="/icons/delete.svg" className="w-16 bg-white" alt="delete-icon" />
                <p className="text-gray300">Are you sure you want to delete this talent? </p>
                <div className="mt-16 flex gap-2">
                    <Button variant="outlined" className="w-48" onClick={onDeleteTalentHandler} isLoading={isLoading}>
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
