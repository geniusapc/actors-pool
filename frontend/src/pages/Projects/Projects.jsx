import React from 'react'
import { Layout } from '../../components/Layout'
import { CreateProjectModal } from '../../components/Projects/Modals'
import { useProjectsData } from '../../hooks/useProjectData'
import DataController from '../../components/DataController/DataController'
import { AllProjects, NoProject } from '../../components/Projects'
import { useSelector } from 'react-redux'


function Projects() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const { data, isLoading, error, refetch } = useProjectsData({ options: { enabled: isAuth } })
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