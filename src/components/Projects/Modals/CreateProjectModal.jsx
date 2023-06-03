import React, { useState } from 'react';
import Modal from '../../Modal/Modal';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';
import { useTalentsData } from '../../../hooks/useTalentData';

import AsyncSelect from 'react-select/async';
import { SERVER_BASEURL } from '../../../config/keys';

function CreateProjectModal() {
    const [project, setProject] = useState({});

    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.projects[CREATE_PROJECT_MODAL]);
    const [searchTalentField, setSearchTalentField] = useState('');

    const query = { select: 'firstname,lastname,photo', q: searchTalentField };
    const { data: talentData, refetch } = useTalentsData({ query });

    const onCloseModalHandler = () => {
        setProject({});
        dispatch(closeModal(CREATE_PROJECT_MODAL));
    };

    const formatData = (data) => {
        return data?.map((e) => ({
            label: (
                <div className="flex">
                    <img src={`${SERVER_BASEURL}${e?.photo}`} alt="" className="w-8 h-8 mr-2" />
                    <span> {`${e?.firstname} ${e?.lastname}`}</span>
                </div>
            ),
            value: e?._id,
        }));
    };



    const promiseOptions = (inputValue) =>
        new Promise(async (resolve) => {
            setSearchTalentField(inputValue);

            if (inputValue?.length < 2) resolve(formatData(talentData?.data?.data?.talent));

            let timer;
            clearTimeout(timer);

            timer = setTimeout(async () => {
                const { data } = await refetch();
                const result = data?.data?.data?.talent;
                resolve(formatData(result));
            }, 2000);
            clearTimeout(timer);
        });

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseModalHandler}>
            <h2 className="text-2xl  font-semibold mb-4">Create a New Project</h2>
            <p className="mb-8">Kindly give us details about your movie project</p>
            <form className="space-y-6" action="#">
                <Input
                    id="Project Name"
                    label="Project Name"
                    placeholder="Enter project name"
                    onChange={(e) => setProject((prev) => ({ ...prev, name: e?.target?.value }))}
                    value={project?.name}
                />

                <AsyncSelect isMulti cacheOptions loadOptions={promiseOptions} />

                <div className="w-full flex">
                    <Button className="mx-auto" type="submit" variant="primary">
                        Create Project
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default CreateProjectModal;
