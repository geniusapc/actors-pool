import React from 'react';
import Modal from '../../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { TEMP_PROJ_MODAL, closeModal, getTempProj } from '../../../features/projects/projects';
import { useEffect } from 'react';
import Empty from '../../DataController/Empty';
import TempProjectCard from '../Cards/TempProjectCard';

function TemporaryProjectModal() {
    const dispatch = useDispatch();

    const isModalOpen = useSelector((state) => state.projects[TEMP_PROJ_MODAL]);
    const tempProject = useSelector((state) => state.projects.tempProject);

    useEffect(() => {
        dispatch(getTempProj());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Modal isOpen={isModalOpen} onClose={() => dispatch(closeModal(TEMP_PROJ_MODAL))}>
            <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">Temporary Project </h3>
            {!tempProject?.length ? <Empty /> : <TempProjectCard talents={tempProject} />}
        </Modal>
    );
}

export default TemporaryProjectModal;
