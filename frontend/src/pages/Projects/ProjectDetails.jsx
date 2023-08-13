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
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6 xl:gap-x-8">
            {data?.map((talent) => (
                <ProjectTalentCard key={talent?._id} talent={talent} />
            ))}
        </div>
    );
};

function ProjectDetails() {
    const param = useParams();
    const { data, isLoading, refetch } = useProjectDataByID(param?.id);
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
            <AddTalentToProjectModal refetchProject={refetch} />
            <ClearAllTalentFromProjectModal refetchProject={refetch} />
            <DeleteProjectTalentModal refetchProject={refetch} />
            <EditProjectModal refetchProject={refetch} />
            <DeleteProjectModal />
        </Layout>
    );
}

export default ProjectDetails;
