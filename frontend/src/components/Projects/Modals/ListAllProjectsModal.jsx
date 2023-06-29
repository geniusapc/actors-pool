import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Modal/Modal';
import { useEditProject, useProjectsData } from '../../../hooks/useProjectData';
import ProjectCardWithRadioButton from '../Cards/ProjectCardWithRadioButton';
import { CREATE_PROJECT_MODAL, SELECT_PROJECT_MODAL, closeModal, openModal } from '../../../features/projects/projects';
import { ReactComponent as AddIcon } from '../../../assets/icons/add.svg';
import Button from '../../Button/Button';
import { notifyError, notifySuccess } from '../../../utils/notification';
// import {} from ""
import { CreateProjectModal } from "../../Projects/Modals"


function ListAllProjectsModal() {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.projects[SELECT_PROJECT_MODAL]);
    const selectedTalent = useSelector((state) => state.talents.selectedTalent);

    const [selectedProject, setSelectedProject] = useState(null);

    const { data, refetch: refetchProject } = useProjectsData();
    const projects = data?.data?.data;

    const closeModalHandler = () => {
        dispatch(closeModal(SELECT_PROJECT_MODAL));
        setSelectedProject(null)
    };
    const onSelectProject = (project) => {
        if (selectedProject?._id === project?._id) setSelectedProject(null)
        else setSelectedProject(project);
    };


    const onError = () => {
        notifyError('error');
    };
    const onSuccess = () => {
        refetchProject();
        closeModalHandler();
        notifySuccess('Talent added  to project successfully');
    };

    const { mutate: editProject, isLoading } = useEditProject(onError, onSuccess);

    const onAddTalentToProject = (e) => {
        e.preventDefault();
        const oldTalentId = selectedProject?.talents?.map((e) => e?._id)
        const talents = [...new Set([...oldTalentId, selectedTalent?._id])]
        const data = { talents };
        editProject({ id: selectedProject?._id, data });
    };

    return (<>

        <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
            <h1 className="font-bold text-2xl mb-2">Add Talent to a Project</h1>
            <p className="text-gray400 mb-8">Select the project you want to add this talent to</p>
            <div className="grid grid-cols-1 gap-2 justify-start content-center ">
                {projects?.map((project) => (
                    <ProjectCardWithRadioButton
                        key={project?._id}
                        project={project}
                        onClick={onSelectProject}
                        isChecked={project?._id === selectedProject?._id}
                    />
                ))}
            </div>
            <p className="flex text-sm  items-center space-x-4 text-primary cursor-pointer mt-2"
                onClick={() => dispatch(openModal(CREATE_PROJECT_MODAL))}
            >
                <AddIcon className="w-8" /> <span>Create a new project</span>
            </p>
            <Button variant='primary' className='w-56 mx-auto mt-8' onClick={onAddTalentToProject}
                isLoading={isLoading}
                disabled={!selectedProject?._id || !selectedTalent?._id}
            >Add</Button>
        </Modal>
        {/* Modals */}
        <CreateProjectModal refetch={refetchProject} hideTalentField={true} />
    </>
    );
}

export default ListAllProjectsModal;
