import React from 'react';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { DELETE_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';
import { useDeleteProject } from '../../../hooks/useProjectData';
import { useNavigate, useParams } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../../utils/notification';
import { ReactComponent as DeleteICon } from "../../../assets/icons/delete.svg"

function DeleteProjectModal() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const param = useParams();
    const isModalOpen = useSelector((state) => state.projects[DELETE_PROJECT_MODAL]);

    const onError = () => notifyError("there was an issue deleting this project")
    const onSuccess = () => {
        navigate("/projects")
        onCloseHandler();
        notifySuccess("Project deleted successfully")
    }

    const { mutate: deleteProject, isLoading } = useDeleteProject(onError, onSuccess)

    const onCloseHandler = () => {
        dispatch(closeModal(DELETE_PROJECT_MODAL));
    };

    const onDeleteProjectHandler = () => {
        deleteProject(param.id)
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseHandler}>
            <div className="flex flex-col items-center text-center gap-8">
                <h2 className="font-bold text-xl">Delete Project</h2>
                <DeleteICon />

                <p className="text-gray300">Are you sure you want to delete this project? </p>

                <div className="mt-16 flex gap-2">
                    <Button variant="outlined" className="w-48" onClick={onDeleteProjectHandler} isLoading={isLoading}>
                        Delete Project
                    </Button>
                    <Button variant="primary" className="w-48" onClick={onCloseHandler} >
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}

export default DeleteProjectModal;
