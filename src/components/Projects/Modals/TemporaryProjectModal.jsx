import React from 'react';
import Modal from '../../Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { TEMP_PROJ_MODAL, clearTempProj, closeModal, getTempProj } from '../../../features/projects/projects';
import Button from '../../Button/Button';
import { useEffect } from 'react';
import Moment from 'react-moment';
import Empty from '../../DataController/Empty';
import { SERVER_BASEURL } from '../../../config/keys';

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

            {
                !tempProject?.length ? <Empty /> :
                    <>
                        <p>Here is a list of talents you have added</p>

                        <ul className="flex flex-col mt-8 gap-y-5 max-h-96 overflow-y-scroll">
                            {tempProject?.map((talent) => (
                                <li className="h-12 flex" key={talent?._id}>
                                    <img src={`${SERVER_BASEURL}${talent?.photo}`} className="h-12 w-12 mr-2" alt="" />
                                    <div className="flex flex-col">
                                        <p className="text-black font-medium">
                                            <span>{talent?.firstname}</span> <span>{talent?.lastname}</span>
                                        </p>
                                        <div className="text-xs text-gray300">
                                            <span className="mr-2">Active since</span>
                                            <Moment format="YYYY">{talent.activeSince}</Moment>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="w-full flex justify-between mt-8 bg-gray200">
                            <Button onClick={() => dispatch(clearTempProj())} variant="outlined">Clear list</Button>
                            <Button variant="primary">Download list</Button>
                        </div>
                    </>

            }

        </Modal>
    );
}

export default TemporaryProjectModal;
