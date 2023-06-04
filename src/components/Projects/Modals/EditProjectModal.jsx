import React, { useState } from 'react';
import AsyncSelect from 'react-select/async';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Modal/Modal';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { closeModal } from '../../../features/projects/projects';
import { useTalentsData } from '../../../hooks/useTalentData';
import { EDIT_PROJECT_MODAL } from '../../../features/projects/projects';

function EditProjectModal(project) {
    const dispatch = useDispatch();
    const isModalOpen = useSelector((state) => state.projects[EDIT_PROJECT_MODAL]);
    const [searchTalentField, setSearchTalentField] = useState('');
    const [data] = useState({ name: project?.name });
    const query = { select: 'firstname,lastname,photo', q: searchTalentField };
    const { data: talentData, refetch } = useTalentsData({ query });

    const onCloseModalHandler = () => {
        dispatch(closeModal(EDIT_PROJECT_MODAL));
    };

    const formatData = (data) => {
        return data?.map((e) => ({
            label: (
                <div className="flex">
                    <img src={e?.photo} alt="" className="w-8 h-8 mr-2" />
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

    const onChangeHandler = () => {
        // (e) => setProject((prev) => ({ ...prev, name: e?.target?.value }))
    };

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseModalHandler}>
            <h2 className="text-2xl  font-semibold mb-4">Edit Project Details</h2>
            <p className="mb-8">Kindly give us details about your movie project</p>
            <form className="space-y-6" action="#">
                <Input
                    id="Project Name"
                    label="Project Name"
                    placeholder="Enter project name"
                    onChange={onChangeHandler}
                    value={data?.name}
                />

                <AsyncSelect isMulti cacheOptions loadOptions={promiseOptions} />

                <div className="w-full flex">
                    <Button className="mx-auto" type="submit" variant="primary">
                        Edit Project
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default EditProjectModal;
