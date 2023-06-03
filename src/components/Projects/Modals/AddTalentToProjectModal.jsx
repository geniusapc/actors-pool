import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { ADD_TALENT_TO_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';
import { useTalentsData } from '../../../hooks/useTalentData';

function AddTalentToProjectModal() {
    // const [project, setProject] = useState({});
    const isModalOpen = useSelector((state) => state.projects[ADD_TALENT_TO_PROJECT_MODAL]);

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

    const dispatch = useDispatch();

    const [searchTalentField, setSearchTalentField] = useState('');

    const query = { select: 'firstname,lastname,photo', q: searchTalentField };
    const { data: talentData, refetch } = useTalentsData({ query });

    const onCloseModalHandler = () => {
        dispatch(closeModal(ADD_TALENT_TO_PROJECT_MODAL));
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
                <AsyncSelect isMulti cacheOptions loadOptions={promiseOptions} />

                <div className="w-full flex">
                    <Button className="mx-auto" type="submit" variant="primary">
                        Add
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default AddTalentToProjectModal;
