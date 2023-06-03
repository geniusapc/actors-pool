import React from 'react';
import { useProjectDataByID } from '../../hooks/useProjectData';
import { useParams } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import DataController from '../../components/DataController/DataController';
import ProjectTalentCard from '../../components/Projects/Cards/ProjectDetailsCard';
import NoTalent from '../../components/Projects/NoTalent';
import Header from '../../components/Projects/ProjectDetailsHeader';
import {
    AddTalentToProjectModal,
    ClearAllTalentFromProjectModal,
    DeleteProjectModal,
    DeleteProjectTalentModal,
    EditProjectModal,
} from '../../components/Projects/Modals';


const Render = ({ data }) => {
    return (
        <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-y-3 gap-x-2 mt-10">
            {data?.map((talent) => (
                <ProjectTalentCard key={talent?._id} talent={talent} />
            ))}
        </div>
    );
};

function ProjectDetails() {
    const param = useParams();

    const { data, isLoading } = useProjectDataByID(param?.id);
    const project = data?.data?.data;
    const talents = project?.talents;

    return (
        <Layout>
            <Header project={project} />
            <DataController
                isLoading={isLoading}
                empty={!talents?.length}
                emptyComponent={NoTalent}
                data={talents}
                Render={Render}
            />

            {/* Modals */}
            <AddTalentToProjectModal />
            <ClearAllTalentFromProjectModal />
            <DeleteProjectModal />
            <DeleteProjectTalentModal />
            <EditProjectModal />
        </Layout>
    );
}

export default ProjectDetails;
