import React from 'react'
import Layout from '../components/Layout/Layout'
import CreateNewProjectCard from '../components/Projects/CreateNewProjectCard'
import ProjectCard from '../components/Projects/ProjectCard'
import { projects } from '../mockData/user'
import CreateProjectModal from '../components/Projects/CreateProjectModal'

function Projects() {
    return (
        <Layout showSearchTalent>
            <CreateProjectModal />
            <h1 className='text-3xl mb-8'>Projects</h1>
            <div className='grid grid-cols-3 gap-2 justify-start content-center'>
                <CreateNewProjectCard />
                {projects.map((project) => <ProjectCard project={project} />)}
            </div>
        </Layout>
    )
}

export default Projects