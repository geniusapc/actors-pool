import React, { useEffect, useState } from 'react';
import Modal from '../../Modal/Modal';
import Input from '../../Input/Input';
import Button from '../../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { CREATE_PROJECT_MODAL, closeModal } from '../../../features/projects/projects';
import { useTalentsData } from '../../../hooks/useTalentData';
import AsyncSelect from 'react-select/async';
import { useAddProject } from '../../../hooks/useProjectData';
import { notifyError, notifySuccess } from '../../../utils/notification';

function CreateProjectModal({ refetch: refetchProjects, hideTalentField = false }) {
    const dispatch = useDispatch();

    const [project, setProject] = useState({});
    const [searchTalentField, setSearchTalentField] = useState('');
    const [initialDataOptions, setInitialData] = useState([]);

    const isModalOpen = useSelector((state) => state.projects[CREATE_PROJECT_MODAL]);

    const query = { select: 'firstname,lastname,photo', q: searchTalentField };
    const { refetch, data } = useTalentsData({ query, options: { enabled: isModalOpen } });

    const onCloseModalHandler = () => {
        setProject({});
        dispatch(closeModal(CREATE_PROJECT_MODAL));
    };


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
                <div className="flex">
                    <img src={`${e?.photo}`} alt={e.firstname} className="w-8 h-8 mr-2" />
                    <span> {`${e?.firstname} ${e?.lastname}`}</span>
                </div>
            ),
            value: e?._id,
        }));
    };

    const debounceSearch = async (value) => {
        setSearchTalentField(value);

        return new Promise(async (resolve) => {
            clearTimeout(debounceSearch.timer);
            debounceSearch.timer = setTimeout(async () => {
                const { data } = await refetch();
                const result = formatData(data?.data?.data?.talent);
                resolve(result);
            }, 1000);
        });
    };

    const onError = ({ response }) => {
        notifyError(response?.data?.message);
    };
    const onSuccess = () => {
        notifySuccess('Project created successfully');
        onCloseModalHandler();
        refetchProjects();
    };

    const { mutate: createProject, isLoading } = useAddProject(onError, onSuccess);

    const createProjectHandler = (e) => {
        e.preventDefault();
        createProject(project);
    };

    const onChangeTalentHandler = (e) => {
        const ids = e?.map((res) => res?.value);
        setProject((prev) => ({ ...prev, talents: ids }));
    };
    const onChangeNameHandler = (e) => setProject((prev) => ({ ...prev, name: e?.target?.value }));

    return (
        <Modal isOpen={isModalOpen} onClose={onCloseModalHandler}>
            <h2 className="text-2xl  font-semibold mb-4">Create a New Project</h2>
            <p className="mb-8">Kindly give us details about your movie project</p>
            <form className="space-y-6" onSubmit={createProjectHandler}>
                <Input
                    id="Project Name"
                    label="Project Name"
                    placeholder="Enter project name"
                    onChange={onChangeNameHandler}
                    value={project?.name}
                    minLength={'3'}
                    required
                />

                {!hideTalentField && (
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
                )}

                <div className="w-full flex">
                    <Button className="mx-auto" type="submit" variant="primary" isLoading={isLoading}>
                        Create Project
                    </Button>
                </div>
            </form>
        </Modal>
    );
}

export default CreateProjectModal;
