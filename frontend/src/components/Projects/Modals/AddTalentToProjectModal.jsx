import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AsyncSelect from 'react-select/async';
import Modal from '../../Modal/Modal';
import Button from '../../Button/Button';
import { ADD_TALENT_TO_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';
import { useTalentsData } from '../../../hooks/useTalentData';
import { useEditProject } from '../../../hooks/useProjectData';
import { useParams } from 'react-router-dom';
import { notifyError, notifySuccess } from '../../../utils/notification';
import { useEffect } from 'react';

function AddTalentToProjectModal({ refetchProject }) {
    const params = useParams();
    const dispatch = useDispatch();
    const [project, setProject] = useState({});
    const [searchTalentField, setSearchTalentField] = useState('');
    const [initialDataOptions, setInitialData] = useState([]);
    const isModalOpen = useSelector((state) => state.projects[ADD_TALENT_TO_PROJECT_MODAL]);

    const query = { select: 'firstname,lastname,photo', q: searchTalentField };
    const { refetch, data } = useTalentsData({ query });


    useEffect(() => {
        const talents = data?.data?.data?.talent;
        if (talents) {
            const init = formatData(talents);
            setInitialData(init);
        }
    }, [data]);


    const formatData = (data) => {
        return data?.map((e) => ({
            label: (
                <div className="flex items-center">
                    <img src={e?.photo} alt="" className="w-8 h-8 mr-2" />
                    <span> {`${e?.firstname} ${e?.lastname}`}</span>
                </div>
            ),
            value: e?._id,
        }));
    };

    const closeModalHandler = () => {
        dispatch(closeModal(ADD_TALENT_TO_PROJECT_MODAL));
    };

    const debounceSearch = async (value) => {
        setSearchTalentField(value);
        return new Promise(async (resolve) => {
            clearTimeout(debounceSearch.timer);
            debounceSearch.timer = setTimeout(async () => {
                const { data } = await refetch();
                const result = formatData(data?.data?.data?.talent)
                resolve(result);
            }, 1000);
        });
    };

    const onError = () => {
        notifyError('error');
    };
    const onSuccess = () => {
        refetchProject();
        closeModalHandler();
        notifySuccess('Talent added successfully');
    };

    const { mutate: editProject, isLoading } = useEditProject(onError, onSuccess);

    const addTalentHandler = (e) => {
        e.preventDefault();
        const data = { ...project };
        editProject({ id: params?.id, data });
    };

    const onChangeTalentHandler = (e) => {
        const ids = e?.map((res) => res?.value);
        setProject({ talents: ids });
    };

    return (
        <Modal isOpen={isModalOpen} onClose={closeModalHandler}>
            <h2 className="text-2xl  font-semibold mb-4">Add Talents</h2>
            <p className="mb-8">Search and add the talents you want to add to this project</p>
            <form className="flex flex-col space-y-6" onSubmit={addTalentHandler}>
                <AsyncSelect
                    styles={{
                        control: (styles) => ({
                            ...styles,
                            borderRadius: "43px",
                            height: "56px",
                            paddingLeft: "12px"
                        }),
                    }}
                    defaultOptions={initialDataOptions}
                    isMulti
                    cacheOptions
                    loadOptions={debounceSearch}
                    onChange={onChangeTalentHandler}
                />

                <Button className="w-48 mx-auto" type="submit" variant="primary" isLoading={isLoading}>
                    Add
                </Button>
            </form>
        </Modal>
    );
}

export default AddTalentToProjectModal;
