import React from 'react'
import Layout from '../../components/Layout/Layout'
import { CreateProjectModal } from '../../components/Projects/Modals'
import { useProjectsData } from '../../hooks/useProjectData'
import DataController from '../../components/DataController/DataController'
import { AllProjects, NoProject } from '../../components/Projects'


function Projects() {
    const { data, isLoading, error, refetch } = useProjectsData()
    const projects = data?.data?.data
    return (
        <Layout showSearchTalent>
            <DataController
                isLoading={isLoading}
                error={error}
                emptyComponent={NoProject}
                refetch={refetch}
                data={projects}
                Render={AllProjects}
            />

            {/* Modals */}
            <CreateProjectModal refetch={refetch} />
        </Layout>
    )
}

export default Projects